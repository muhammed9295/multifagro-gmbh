import { Home, Building2, Package, Warehouse, Wrench, Sparkles, TrendingUp, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Moving",
      description: "Stress-free home relocation services with experienced movers who treat your belongings with care.",
      features: [
        "Complete packing and unpacking",
        "Furniture disassembly and assembly",
        "Safe loading and transport",
        "Insurance coverage included",
        "Flexible scheduling",
      ],
    },
    {
      icon: Building2,
      title: "Office Relocation",
      description: "Minimize downtime with our efficient corporate moving services designed for businesses of all sizes.",
      features: [
        "After-hours and weekend moves",
        "IT equipment specialized handling",
        "Office layout and planning",
        "Minimal business disruption",
        "Dedicated move coordinator",
      ],
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Professional packing with quality materials to ensure your items arrive safely at your new location.",
      features: [
        "High-quality packing materials",
        "Expert packing techniques",
        "Systematic labeling system",
        "Fragile item protection",
        "Unpacking services available",
      ],
    },
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage facilities for short-term or long-term needs during your move.",
      features: [
        "24/7 security monitoring",
        "Climate-controlled units",
        "Flexible rental terms",
        "Various unit sizes",
        "Easy access",
      ],
    },
    {
      icon: Wrench,
      title: "Furniture Assembly",
      description: "Expert furniture assembly and disassembly services to make your move easier and more efficient.",
      features: [
        "All furniture types",
        "Professional tools provided",
        "Quick and efficient",
        "Reassembly at destination",
        "Experienced technicians",
      ],
    },
    {
      icon: Sparkles,
      title: "Post-Move Cleaning",
      description: "Leave your old place spotless with our thorough deep cleaning service after you move out.",
      features: [
        "Complete deep cleaning",
        "Eco-friendly products",
        "Move-out inspection ready",
        "Kitchen and bathroom focus",
        "Satisfaction guaranteed",
      ],
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "All our movers are licensed professionals with comprehensive insurance coverage.",
    },
    {
      icon: TrendingUp,
      title: "Transparent Pricing",
      description: "Clear, upfront quotes with no hidden fees. What you see is what you pay.",
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "We value your time. Our movers arrive on schedule, every time.",
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
                Comprehensive Moving Services
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                From packing to unpacking, storage to assembly — we handle every aspect of your move with professionalism and care.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/quote">Get Free Quotes</Link>
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
                Why Choose MoveEasy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to making your move as smooth and stress-free as possible
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

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-accent">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get instant quotes from verified movers and book your perfect moving partner today
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-lift"
            >
              <Link to="/quote">Request Free Quotes</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
