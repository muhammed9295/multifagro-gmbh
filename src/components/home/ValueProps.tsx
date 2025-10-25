import { Shield, DollarSign, Users, Headphones } from "lucide-react";

const ValueProps = () => {
  const props = [
    {
      icon: Shield,
      title: "Fully Insured Crews",
      description: "All our partner movers are vetted, licensed, and fully insured for your peace of mind.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees. Get detailed quotes upfront with clear breakdowns of all costs.",
    },
    {
      icon: Users,
      title: "Verified Partners",
      description: "Every moving company on our platform is background-checked and customer-reviewed.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer support team is always available to help with any questions or concerns.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Why Choose Movu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make moving simple, safe, and stress-free
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              {/* Icon */}
              <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center shadow-medium group-hover:shadow-lift transition-all duration-300 group-hover:scale-110">
                <prop.icon className="h-10 w-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-semibold text-foreground px-4">
                {prop.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed px-4">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
