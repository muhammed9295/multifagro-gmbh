import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Klaus Huber",
      city: "Zurich",
      rating: 5,
      text: "Moving with Multifagro was seamless. The movers were professional, punctual, and handled everything with care. Highly recommended!",
      date: "2 weeks ago",
    },
    {
      name: "Séverine Moreau",
      city: "Geneva",
      rating: 5,
      text: "I was dreading the move, but Multifagro made it so easy! Got multiple quotes instantly and found the perfect mover within my budget.",
      date: "1 month ago",
    },
    {
      name: "Giovanna Bianchi",
      city: "Zurich",
      rating: 5,
      text: "Excellent service from start to finish. The packing team was meticulous, and nothing was damaged. Best moving experience ever.",
      date: "3 weeks ago",
    },
    {
      name: "Dr. Anja Keller",
      city: "Basel",
      rating: 5,
      text: "Professional, reliable, and affordable. The customer support team was always available to answer my questions. Thank you Multifagro!",
      date: "2 months ago",
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trusted us with their move
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
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
