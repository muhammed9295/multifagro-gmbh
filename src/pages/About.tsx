import { Shield, Users, TrendingUp, Award, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and peace of mind are our top priorities in every move.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We vet every partner and ensure full insurance coverage for your protection.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We're committed to delivering exceptional service on every single move.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Successful Moves" },
    { number: "500+", label: "Verified Partners" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" },
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
                Making Moving Simple
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We're on a mission to transform the moving experience by connecting customers with trusted, professional movers across Switzerland.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background border-y border-border">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Movu was born from a simple observation: moving shouldn't be stressful. After experiencing the challenges of coordinating moves firsthand, our founders realized there had to be a better way.
                  </p>
                  <p>
                    We built Movu to be the trusted platform that brings transparency, choice, and peace of mind to every move. By carefully vetting our partners and providing instant quotes, we've helped thousands of families and businesses relocate with confidence.
                  </p>
                  <p>
                    Today, we're proud to be Switzerland's leading moving marketplace, connecting customers with the best professional movers in the industry. But we're just getting started.
                  </p>
                </div>
              </div>
              
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-lift">
                <div className="bg-background rounded-xl p-8 lg:p-12">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To make every move simple, transparent, and stress-free by connecting people with trusted professionals and innovative tools that streamline the entire relocation process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-8 shadow-soft border border-border text-center hover:shadow-medium transition-all duration-300 hover-lift"
                >
                  <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center mb-6 shadow-medium">
                    <value.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                How We're Different
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Verified Partners Only",
                  description: "Every moving company is thoroughly vetted, licensed, and insured before joining our platform.",
                },
                {
                  title: "Transparent Pricing",
                  description: "Get detailed quotes upfront with no hidden fees. Compare and choose with confidence.",
                },
                {
                  title: "Customer Protection",
                  description: "All moves include insurance coverage and our satisfaction guarantee.",
                },
                {
                  title: "24/7 Support",
                  description: "Our team is always available to help before, during, and after your move.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-muted border border-border"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-accent">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who chose Movu for their relocation
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-lift"
            >
              <Link to="/quote">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
