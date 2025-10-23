import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const factors = [
    { title: "Distance", description: "Local moves within the same city are typically less expensive than long-distance relocations." },
    { title: "Volume", description: "The amount of items and furniture directly affects the truck size and crew needed." },
    { title: "Accessibility", description: "Stairs, elevators, and parking availability can impact the moving time and cost." },
    { title: "Services", description: "Additional services like packing, unpacking, and storage add to the total cost." },
    { title: "Timing", description: "Peak season (summer) and weekend moves may have higher rates than off-peak times." },
  ];

  const estimates = [
    {
      size: "Studio/1 Bedroom",
      local: "SAR 800 - 1,200",
      distance: "SAR 2,000 - 3,500",
      features: ["1-2 movers", "Small truck", "3-4 hours", "Basic insurance"],
    },
    {
      size: "2 Bedroom",
      local: "SAR 1,200 - 1,800",
      distance: "SAR 3,500 - 5,000",
      features: ["2-3 movers", "Medium truck", "4-6 hours", "Full insurance"],
      popular: true,
    },
    {
      size: "3-4 Bedroom",
      local: "SAR 1,800 - 2,800",
      distance: "SAR 5,000 - 8,000",
      features: ["3-4 movers", "Large truck", "6-8 hours", "Premium insurance"],
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
                Transparent Pricing
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                No hidden fees. Get instant quotes and compare prices from verified movers.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/quote">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Price Factors */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                What Affects Moving Costs?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Several factors influence the final price of your move
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

        {/* Price Estimates */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Estimated Price Ranges
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get an idea of what your move might cost (prices vary by specific details)
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
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
                    {estimate.size}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Local Move</p>
                      <p className="text-2xl font-heading font-bold text-primary">{estimate.local}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Long Distance</p>
                      <p className="text-2xl font-heading font-bold text-primary">{estimate.distance}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">Typically includes:</p>
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
              * Prices are estimates and may vary based on specific requirements, distance, and additional services. Get an accurate quote by filling out our form.
            </p>
          </div>
        </section>

        {/* Additional Services Pricing */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Add-On Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { service: "Professional Packing", price: "SAR 200 - 500" },
                { service: "Unpacking Service", price: "SAR 150 - 350" },
                { service: "Packing Materials", price: "SAR 100 - 300" },
                { service: "Furniture Assembly", price: "SAR 150 - 400" },
                { service: "Post-Move Cleaning", price: "SAR 250 - 600" },
                { service: "Storage (per month)", price: "SAR 300 - 800" },
              ].map((item, index) => (
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

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-accent">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready for Your Exact Quote?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get personalized quotes from multiple movers in minutes — completely free
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-lift"
            >
              <Link to="/quote">Get Free Quotes Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
