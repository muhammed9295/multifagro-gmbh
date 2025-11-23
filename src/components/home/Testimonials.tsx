import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: t("testimonials.items.testimonial1.name"),
      city: t("testimonials.items.testimonial1.city"),
      rating: 5,
      text: t("testimonials.items.testimonial1.text"),
      date: t("testimonials.items.testimonial1.date"),
    },
    {
      name: t("testimonials.items.testimonial2.name"),
      city: t("testimonials.items.testimonial2.city"),
      rating: 5,
      text: t("testimonials.items.testimonial2.text"),
      date: t("testimonials.items.testimonial2.date"),
    },
    {
      name: t("testimonials.items.testimonial3.name"),
      city: t("testimonials.items.testimonial3.city"),
      rating: 5,
      text: t("testimonials.items.testimonial3.text"),
      date: t("testimonials.items.testimonial3.date"),
    },
    {
      name: t("testimonials.items.testimonial4.name"),
      city: t("testimonials.items.testimonial4.city"),
      rating: 5,
      text: t("testimonials.items.testimonial4.text"),
      date: t("testimonials.items.testimonial4.date"),
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-3xl p-8 lg:p-12 shadow-medium border border-border">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-medium">
              <Quote className="h-6 w-6 text-primary-foreground" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-center mb-8">
              <p className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="text-center space-y-1">
              <p className="font-heading font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].city} • {testimonials[currentIndex].date}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">{t("testimonials.stats.averageRating")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">{t("testimonials.stats.happyCustomers")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">{t("testimonials.stats.wouldRecommend")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
