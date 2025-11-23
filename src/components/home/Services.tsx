import { Home, Building2, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Home,
      title: t("services.items.homeMoving.title"),
      description: t("services.items.homeMoving.description"),
      features: t("services.items.homeMoving.features", { returnObjects: true }) as string[],
    },
    {
      icon: Building2,
      title: t("services.items.officeMoving.title"),
      description: t("services.items.officeMoving.description"),
      features: t("services.items.officeMoving.features", { returnObjects: true }) as string[],
    },
    {
      icon: Package,
      title: t("services.items.packing.title"),
      description: t("services.items.packing.description"),
      features: t("services.items.packing.features", { returnObjects: true }) as string[],
    },
    {
      icon: Sparkles,
      title: t("services.items.cleaning.title"),
      description: t("services.items.cleaning.description"),
      features: t("services.items.cleaning.features", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover-lift group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-soft group-hover:shadow-medium transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/services">{t("services.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
