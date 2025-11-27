import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const { t } = useTranslation();

  const factors = [
    { 
      title: t("pricingPage.factors.items.distance.title"), 
      description: t("pricingPage.factors.items.distance.description") 
    },
    { 
      title: t("pricingPage.factors.items.volume.title"), 
      description: t("pricingPage.factors.items.volume.description") 
    },
    { 
      title: t("pricingPage.factors.items.accessibility.title"), 
      description: t("pricingPage.factors.items.accessibility.description") 
    },
    { 
      title: t("pricingPage.factors.items.services.title"), 
      description: t("pricingPage.factors.items.services.description") 
    },
    { 
      title: t("pricingPage.factors.items.timing.title"), 
      description: t("pricingPage.factors.items.timing.description") 
    },
  ];

  const estimates = [
    {
      size: t("pricingPage.estimates.sizes.studio.title"),
      distance: t("pricingPage.estimates.sizes.studio.distance"),
      features: t("pricingPage.estimates.sizes.studio.features", { returnObjects: true }) as string[],
    },
    {
      size: t("pricingPage.estimates.sizes.twoBedroom.title"),
      distance: t("pricingPage.estimates.sizes.twoBedroom.distance"),
      features: t("pricingPage.estimates.sizes.twoBedroom.features", { returnObjects: true }) as string[],
      popular: true,
    },
    {
      size: t("pricingPage.estimates.sizes.threeFourBedroom.title"),
      distance: t("pricingPage.estimates.sizes.threeFourBedroom.distance"),
      features: t("pricingPage.estimates.sizes.threeFourBedroom.features", { returnObjects: true }) as string[],
    },
  ];

  const cleaningEstimates = [
    {
      size: t("pricingPage.cleaningEstimates.sizes.studio.title"),
      price: t("pricingPage.cleaningEstimates.sizes.studio.price"),
      features: t("pricingPage.cleaningEstimates.sizes.studio.features", { returnObjects: true }) as string[],
    },
    {
      size: t("pricingPage.cleaningEstimates.sizes.twoBedroom.title"),
      price: t("pricingPage.cleaningEstimates.sizes.twoBedroom.price"),
      features: t("pricingPage.cleaningEstimates.sizes.twoBedroom.features", { returnObjects: true }) as string[],
      popular: true,
    },
    {
      size: t("pricingPage.cleaningEstimates.sizes.threeFourBedroom.title"),
      price: t("pricingPage.cleaningEstimates.sizes.threeFourBedroom.price"),
      features: t("pricingPage.cleaningEstimates.sizes.threeFourBedroom.features", { returnObjects: true }) as string[],
    },
  ];

  const addOnServices = [
    { 
      service: t("pricingPage.addOns.items.packing"), 
      price: t("pricingPage.addOns.prices.packing") 
    },
    { 
      service: t("pricingPage.addOns.items.unpacking"), 
      price: t("pricingPage.addOns.prices.unpacking") 
    },
    { 
      service: t("pricingPage.addOns.items.materials"), 
      price: t("pricingPage.addOns.prices.materials") 
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
                {t("pricingPage.hero.title")}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                {t("pricingPage.hero.subtitle")}
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/quote">{t("pricingPage.hero.cta")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Price Factors */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                {t("pricingPage.factors.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("pricingPage.factors.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factors.map((factor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-heading font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Estimates Cleaning */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                {t("pricingPage.cleaningEstimates.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("pricingPage.cleaningEstimates.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {cleaningEstimates.map((estimate, index) => (
                <div
                  key={index}
                  className={`bg-background rounded-2xl p-8 shadow-soft border-2 transition-all duration-300 hover:shadow-medium hover-lift relative ${
                    estimate.popular ? "border-primary" : "border-border"
                  }`}
                >
                  {estimate.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full shadow-medium">
                        {t("pricingPage.cleaningEstimates.mostPopular")}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
                    {estimate.size}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">{t("pricingPage.cleaningEstimates.priceLabel")}</p>
                      <p className="text-2xl font-heading font-bold text-primary">{estimate.price}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">{t("pricingPage.cleaningEstimates.typicallyIncludes")}</p>
                    <ul className="space-y-2">
                      {estimate.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              {t("pricingPage.cleaningEstimates.disclaimer")}
            </p>
          </div>
        </section>

        {/* Price Estimates Moving */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                {t("pricingPage.estimates.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("pricingPage.estimates.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {estimates.map((estimate, index) => (
                <div
                  key={index}
                  className={`bg-background rounded-2xl p-8 shadow-soft border-2 transition-all duration-300 hover:shadow-medium hover-lift relative ${
                    estimate.popular ? "border-primary" : "border-border"
                  }`}
                >
                  {estimate.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full shadow-medium">
                        {t("pricingPage.estimates.mostPopular")}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
                    {estimate.size}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">{t("pricingPage.estimates.longDistance")}</p>
                      <p className="text-2xl font-heading font-bold text-primary">{estimate.distance}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">{t("pricingPage.estimates.typicallyIncludes")}</p>
                    <ul className="space-y-2">
                      {estimate.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              {t("pricingPage.estimates.disclaimer")}
            </p>
          </div>
        </section>

        {/* Additional Services Pricing */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                {t("pricingPage.addOns.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
              {addOnServices.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 rounded-lg bg-muted border border-border"
                >
                  <span className="text-foreground font-medium">{item.service}</span>
                  <span className="text-primary font-semibold">{item.price}</span>
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

export default Pricing;
