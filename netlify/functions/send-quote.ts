/// <reference types="node" />
import { Handler } from '@netlify/functions';

const WEBHOOK_URL = process.env.WEBHOOK_URL;

if (!WEBHOOK_URL) {
  throw new Error('WEBHOOK_URL environment variable is not set');
}

interface QuoteData {
  name: string;
  email: string;
  phone: string;
  fromAddress: string;
  toAddress: string;
  moveSize: string;
  floors: string;
  elevator: boolean;
  packing: boolean;
  unpacking: boolean;
  boxes: boolean;
  cleaning: boolean;
  moveDate: string;
  timeWindow: string;
  notes?: string;
}

export const handler: Handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'text/plain',
      } as Record<string, string>,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      } as Record<string, string>,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    if (!event.body) {
      throw new Error('Request body is empty');
    }

    const quoteData: QuoteData = JSON.parse(event.body);
    const bookingId = `MOV-${Date.now().toString().slice(-8)}`;

    // Validate required fields
    if (!quoteData.name || !quoteData.email || !quoteData.phone) {
      throw new Error('Missing required fields: name, email, or phone');
    }

    // Prepare data to send to webhook
    // n8n webhooks typically expect flat structure for easier access
    const webhookData = {
      bookingId,
      timestamp: new Date().toISOString(),
      // Contact information
      name: quoteData.name,
      email: quoteData.email,
      phone: quoteData.phone,
      // Moving details
      fromAddress: quoteData.fromAddress || '',
      toAddress: quoteData.toAddress || '',
      moveSize: quoteData.moveSize || '',
      floors: quoteData.floors || '',
      elevator: quoteData.elevator || false,
      // Services
      packing: quoteData.packing || false,
      unpacking: quoteData.unpacking || false,
      boxes: quoteData.boxes || false,
      cleaning: quoteData.cleaning || false,
      // Schedule
      moveDate: quoteData.moveDate || '',
      timeWindow: quoteData.timeWindow || '',
      notes: quoteData.notes || '',
    };

    // Send to webhook
    console.log('Sending to webhook:', WEBHOOK_URL);
    console.log('Webhook data:', JSON.stringify(webhookData, null, 2));
    
    let webhookResponse;
    let webhookResult;

    try {
      // Send POST request to n8n webhook with JSON body
      console.log('Sending POST request to webhook');
      
      webhookResponse = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      console.log('Webhook response status:', webhookResponse.status);

      // Read response text first
      const responseText = await webhookResponse.text();
      
      // Try to parse as JSON, fallback to text
      try {
        webhookResult = JSON.parse(responseText);
      } catch {
        webhookResult = { message: responseText || 'Webhook received' };
      }

      console.log('Webhook result:', webhookResult);

      // Consider 2xx status codes as success
      if (webhookResponse.status >= 200 && webhookResponse.status < 300) {
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          } as Record<string, string>,
          body: JSON.stringify({
            success: true,
            message: 'Quote request sent successfully',
            bookingId,
            webhookResponse: webhookResult,
          }),
        };
      } else {
        // Non-2xx status, but still return success to user
        // The webhook might have received the data even with non-200 status
        console.warn('Webhook returned non-2xx status:', webhookResponse.status);
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          } as Record<string, string>,
          body: JSON.stringify({
            success: true,
            message: 'Quote request sent (webhook status: ' + webhookResponse.status + ')',
            bookingId,
            webhookResponse: webhookResult,
          }),
        };
      }
    } catch (fetchError: any) {
      console.error('Fetch error:', fetchError);
      throw new Error(`Failed to call webhook: ${fetchError.message}`);
    }
  } catch (error: any) {
    console.error('Function error:', error);
    console.error('Error stack:', error.stack);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      } as Record<string, string>,
      body: JSON.stringify({
        success: false,
        message: 'Failed to send quote request',
        error: error.message || 'Unknown error',
        ...(process.env.NODE_ENV === 'development' && error.stack ? { stack: error.stack } : {}),
      }),
    };
  }
};

