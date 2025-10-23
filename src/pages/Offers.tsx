import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Star, Shield, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Offers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quoteData = location.state || JSON.parse(localStorage.getItem("quoteRequest") || "{}");

  const [sortBy, setSortBy] = useState("price");

  // Mock offers data
  const mockOffers = [
    {
      id: 1,
      company: "Royal Movers",
      rating: 4.9,
      reviews: 342,
      price: 1250,
      earliestSlot: "Tomorrow",
      badges: ["Top Rated", "Insured"],
      inclusions: ["2 Professional Movers", "Moving Truck", "Basic Insurance", "Loading/Unloading"],
      avatar: "RM",
      color: "from-primary to-accent",
    },
    {
      id: 2,
      company: "Swift Relocations",
      rating: 4.8,
      reviews: 289,
      price: 1150,
      earliestSlot: "In 2 days",
      badges: ["Best Value", "Fast"],
      inclusions: ["3 Professional Movers", "Moving Truck", "Basic Insurance", "Packing Materials"],
      avatar: "SR",
      color: "from-accent to-primary",
    },
    {
      id: 3,
      company: "Premium Movers Co.",
      rating: 5.0,
      reviews: 156,
      price: 1450,
      earliestSlot: "Tomorrow",
      badges: ["Premium", "Insured"],
      inclusions: ["4 Professional Movers", "Large Truck", "Full Insurance", "Packing Service", "Furniture Protection"],
      avatar: "PM",
      color: "from-primary to-primary-hover",
    },
    {
      id: 4,
      company: "City Packers",
      rating: 4.7,
      reviews: 421,
      price: 1050,
      earliestSlot: "In 3 days",
      badges: ["Budget Friendly"],
      inclusions: ["2 Professional Movers", "Moving Van", "Basic Insurance"],
      avatar: "CP",
      color: "from-accent to-primary",
    },
  ];

  const sortedOffers = [...mockOffers].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const handleSelectOffer = (offer: typeof mockOffers[0]) => {
    navigate("/booking", { state: { offer, quoteData } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              Available Offers
            </h1>
            <p className="text-muted-foreground">
              We found {mockOffers.length} verified movers for your route
            </p>
            <div className="mt-4 p-4 bg-background rounded-lg border border-border inline-flex items-center space-x-2 text-sm">
              <span className="text-muted-foreground">Moving from</span>
              <span className="font-medium text-foreground">{quoteData.fromAddress || "Riyadh"}</span>
              <span className="text-muted-foreground">to</span>
              <span className="font-medium text-foreground">{quoteData.toAddress || "Jeddah"}</span>
            </div>
          </div>

          {/* Sort & Filter */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-muted-foreground">
              {sortedOffers.length} {sortedOffers.length === 1 ? "offer" : "offers"} available
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Lowest Price</SelectItem>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Offers List */}
          <div className="space-y-6">
            {sortedOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Left: Company Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Avatar */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center text-primary-foreground font-heading font-bold text-xl shadow-soft flex-shrink-0`}>
                        {offer.avatar}
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-heading font-semibold text-foreground">
                            {offer.company}
                          </h3>
                          <div className="flex flex-col items-end">
                            <div className="text-3xl font-heading font-bold text-primary">
                              SAR {offer.price.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">Total estimate</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span className="font-semibold text-foreground">{offer.rating}</span>
                            <span className="text-sm text-muted-foreground">({offer.reviews} reviews)</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            • Earliest: <span className="text-foreground font-medium">{offer.earliestSlot}</span>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {offer.badges.map((badge, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>

                        {/* Inclusions */}
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-foreground">What's included:</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {offer.inclusions.map((item, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:w-48 flex flex-col space-y-3">
                    <Button variant="hero" size="lg" onClick={() => handleSelectOffer(offer)} className="w-full">
                      Select & Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="default" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12 bg-muted rounded-xl p-6 text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our team is here to help you find the perfect mover for your needs
            </p>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
