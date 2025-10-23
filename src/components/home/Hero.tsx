import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Users, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-moving.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromPostcode: "",
    toPostcode: "",
  });

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/quote", { state: formData });
  };

  const trustBadges = [
    { icon: Shield, text: "Fully Insured" },
    { icon: Award, text: "Verified Partners" },
    { icon: TrendingUp, text: "500+ Moves/Month" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-secondary to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Move with{" "}
                <span className="text-primary">Confidence</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Get instant quotes from verified movers. Compare prices, read reviews, and book your perfect moving partner in minutes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-background border border-border shadow-soft"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Quick Quote Form */}
            <form onSubmit={handleQuickQuote} className="bg-background rounded-2xl p-6 lg:p-8 shadow-medium border border-border space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">Get Your Free Quote</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fromPostcode" className="text-sm font-medium flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Moving From</span>
                  </Label>
                  <Input
                    id="fromPostcode"
                    type="text"
                    placeholder="e.g., Riyadh"
                    value={formData.fromPostcode}
                    onChange={(e) => setFormData({ ...formData, fromPostcode: e.target.value })}
                    className="h-11"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="toPostcode" className="text-sm font-medium flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Moving To</span>
                  </Label>
                  <Input
                    id="toPostcode"
                    type="text"
                    placeholder="e.g., Jeddah"
                    value={formData.toPostcode}
                    onChange={(e) => setFormData({ ...formData, toPostcode: e.target.value })}
                    className="h-11"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Compare Moving Offers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Free quotes • No commitment • Instant comparison
              </p>
            </form>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lift">
              <img
                src={heroImage}
                alt="Professional movers loading boxes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium border border-border">
                <div className="text-2xl font-heading font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium border border-border">
                <div className="text-2xl font-heading font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium border border-border">
                <div className="text-2xl font-heading font-bold text-primary">5k+</div>
                <div className="text-xs text-muted-foreground">Moves</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
