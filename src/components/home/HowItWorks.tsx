import { ClipboardList, Search, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Request Your Move",
      description: "Fill out a simple form with your moving details. Takes less than 2 minutes.",
      step: "01",
    },
    {
      icon: Search,
      title: "Compare Offers",
      description: "Receive quotes from verified movers. Compare prices, reviews, and services.",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "Book & Relax",
      description: "Choose your preferred mover and confirm. We'll handle the rest.",
      step: "03",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your perfect moving partner is simple and stress-free
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover-lift">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg shadow-medium">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-soft">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
