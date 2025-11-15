import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq.items.q1.question"),
      answer: t("faq.items.q1.answer"),
    },
    {
      question: t("faq.items.q2.question"),
      answer: t("faq.items.q2.answer"),
    },
    {
      question: t("faq.items.q3.question"),
      answer: t("faq.items.q3.answer"),
    },
    {
      question: t("faq.items.q4.question"),
      answer: t("faq.items.q4.answer"),
    },
    {
      question: t("faq.items.q5.question"),
      answer: t("faq.items.q5.answer"),
    },
    {
      question: t("faq.items.q6.question"),
      answer: t("faq.items.q6.answer"),
    },
    {
      question: t("faq.items.q7.question"),
      answer: t("faq.items.q7.answer"),
    },
    {
      question: t("faq.items.q8.question"),
      answer: t("faq.items.q8.answer"),
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("faq.subtitle")}
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
            {t("faq.stillHaveQuestions")}
          </p>
          <Link
            to="/contact"
            className="text-primary font-medium hover:text-primary-hover transition-colors underline-offset-4 hover:underline"
          >
            {t("faq.contactSupport")} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
