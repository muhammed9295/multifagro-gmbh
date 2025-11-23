import { Home, Building2, Package, Sparkles, TrendingUp, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Home,
      title: t("servicesPage.services.residential.title"),
      description: t("servicesPage.services.residential.description"),
      features: t("servicesPage.services.residential.features", { returnObjects: true }) as string[],
    },
    {
      icon: Building2,
      title: t("servicesPage.services.office.title"),
      description: t("servicesPage.services.office.description"),
      features: t("servicesPage.services.office.features", { returnObjects: true }) as string[],
    },
    {
      icon: Package,
      title: t("servicesPage.services.packing.title"),
      description: t("servicesPage.services.packing.description"),
      features: t("servicesPage.services.packing.features", { returnObjects: true }) as string[],
    },
    {
      icon: Sparkles,
      title: t("servicesPage.services.cleaning.title"),
      description: t("servicesPage.services.cleaning.description"),
      features: t("servicesPage.services.cleaning.features", { returnObjects: true }) as string[],
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: t("servicesPage.whyChoose.items.licensed.title"),
      description: t("servicesPage.whyChoose.items.licensed.description"),
    },
    {
      icon: TrendingUp,
      title: t("servicesPage.whyChoose.items.pricing.title"),
      description: t("servicesPage.whyChoose.items.pricing.description"),
    },
    {
      icon: Clock,
      title: t("servicesPage.whyChoose.items.guarantee.title"),
      description: t("servicesPage.whyChoose.items.guarantee.description"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-16 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                {t("servicesPage.hero.title")}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                {t("servicesPage.hero.subtitle")}
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/quote">{t("servicesPage.hero.cta")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover-lift"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-soft">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                {t("servicesPage.whyChoose.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("servicesPage.whyChoose.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-soft border border-border text-center"
                >
                  <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center mb-6 shadow-medium">
                    <item.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Services;
