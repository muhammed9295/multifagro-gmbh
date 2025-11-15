import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const { t } = useTranslation();
  const benefits = t("finalCTA.benefits", { returnObjects: true }) as string[];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
              {t("finalCTA.title")}
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              {t("finalCTA.subtitle")}
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              >
                <CheckCircle className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-lift text-base h-14 px-10 font-semibold"
            >
              <Link to="/quote">
                {t("finalCTA.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Text */}
          <p className="text-sm text-primary-foreground/80 pt-4">
            {t("finalCTA.trustText")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
