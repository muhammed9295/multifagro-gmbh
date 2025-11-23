import { Shield, DollarSign, Users, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";

const ValueProps = () => {
  const { t } = useTranslation();

  const props = [
    {
      icon: Shield,
      title: t("valueProps.items.insured.title"),
      description: t("valueProps.items.insured.description"),
    },
    {
      icon: DollarSign,
      title: t("valueProps.items.pricing.title"),
      description: t("valueProps.items.pricing.description"),
    },
    {
      icon: Users,
      title: t("valueProps.items.verified.title"),
      description: t("valueProps.items.verified.description"),
    },
    {
      icon: Headphones,
      title: t("valueProps.items.support.title"),
      description: t("valueProps.items.support.description"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t("valueProps.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("valueProps.subtitle")}
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
