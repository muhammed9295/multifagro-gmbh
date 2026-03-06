import React from 'react';

/**
 * This component renders hidden HTML forms that Netlify needs to detect 
 * the structure of our dynamic React forms.
 * Netlify's build-time bot parses HTML to find forms; it doesn't execute JS.
 */
const NetlifyForms = () => {
  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {/* Quote Request Form */}
      <form name="quote-request" data-netlify="true" hidden>
        <input type="text" name="fromAddress" />
        <input type="text" name="toAddress" />
        <input type="text" name="moveSize" />
        <input type="text" name="floors" />
        <input type="checkbox" name="elevator" />
        <input type="checkbox" name="packing" />
        <input type="checkbox" name="unpacking" />
        <input type="checkbox" name="boxes" />
        <input type="checkbox" name="cleaning" />
        <input type="date" name="moveDate" />
        <input type="text" name="timeWindow" />
        <textarea name="notes"></textarea>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
      </form>

      {/* Contact Form */}
      <form name="contact-form" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
};

export default NetlifyForms;
