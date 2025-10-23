import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does MoveEasy work?",
      answer: "Simply fill out our quick form with your moving details. You'll receive multiple quotes from verified movers within minutes. Compare prices, read reviews, and book directly through our platform. It's that easy!",
    },
    {
      question: "Are the movers insured?",
      answer: "Yes! All moving companies on our platform are fully licensed, insured, and background-checked. We only work with professional movers who meet our strict quality standards.",
    },
    {
      question: "How much does a move cost?",
      answer: "Moving costs vary based on distance, volume, and services needed. Our platform shows transparent pricing from multiple movers so you can compare and choose the best option for your budget. Most local moves range from SAR 800-2,500.",
    },
    {
      question: "Can I get help with packing?",
      answer: "Absolutely! Many of our partner movers offer professional packing services. You can add packing, unpacking, and packing materials when requesting your quote.",
    },
    {
      question: "What if something gets damaged?",
      answer: "All our movers carry comprehensive insurance. In the rare event of damage, you're fully covered. Simply file a claim through our platform and we'll help facilitate the process.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 2-4 weeks in advance, especially during peak moving season (summer months). However, many movers can accommodate last-minute moves within 48 hours.",
    },
    {
      question: "Do you serve my area?",
      answer: "We currently serve all major cities in Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Mecca, and Medina. Enter your postcodes to see available movers in your area.",
    },
    {
      question: "Can I reschedule my move?",
      answer: "Yes, most movers allow rescheduling with adequate notice (usually 48-72 hours). Cancellation policies vary by mover, so check the terms when booking.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border border-border shadow-soft data-[state=open]:shadow-medium transition-all"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="text-primary font-medium hover:text-primary-hover transition-colors underline-offset-4 hover:underline"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
