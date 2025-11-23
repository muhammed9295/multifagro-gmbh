import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Calendar, MapPin, Package, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { offer, quoteData } = location.state || {};
  
  const [agreed, setAgreed] = useState(false);

  if (!offer) {
    navigate("/quote");
    return null;
  }

  const addOns = [
    { name: "Packing Service", selected: quoteData.packing, price: 250 },
    { name: "Unpacking Service", selected: quoteData.unpacking, price: 200 },
    { name: "Packing Materials", selected: quoteData.boxes, price: 150 },
    { name: "Post-Move Cleaning", selected: quoteData.cleaning, price: 300 },
  ];

  const selectedAddOns = addOns.filter((addon) => addon.selected);
  const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
  const subtotal = offer.price + addOnsTotal;
  const vat = subtotal * 0.15; // 15% VAT
  const total = subtotal + vat;

  const handleConfirm = () => {
    if (!agreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    // Store booking data
    const bookingData = {
      offer,
      quoteData,
      addOns: selectedAddOns,
      total,
      bookingDate: new Date().toISOString(),
      bookingId: `MV${Date.now()}`,
    };

    localStorage.setItem("booking", JSON.stringify(bookingData));
    
    // Navigate to thank you page
    navigate("/booking-success", { state: bookingData });
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              Booking Summary
            </h1>
            <p className="text-muted-foreground">
              Review your booking details before confirming
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Booking Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Moving Details */}
              <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft border border-border">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Moving Details
                </h2>
                
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">From</p>
                      <p className="font-medium text-foreground">{quoteData.fromAddress}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">To</p>
                      <p className="font-medium text-foreground">{quoteData.toAddress}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Move Size</p>
                      <p className="font-medium text-foreground capitalize">{quoteData.moveSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Floor</p>
                      <p className="font-medium text-foreground">
                        {quoteData.floors} {quoteData.elevator ? "(Elevator available)" : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft border border-border">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Schedule
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Move Date</p>
                    <p className="font-medium text-foreground">
                      {new Date(quoteData.moveDate).toLocaleDateString("en-GB", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Time Window</p>
                    <p className="font-medium text-foreground capitalize">{quoteData.timeWindow}</p>
                  </div>
                </div>

                {quoteData.notes && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-1">Additional Notes</p>
                    <p className="text-foreground">{quoteData.notes}</p>
                  </div>
                )}
              </div>

              {/* Selected Mover */}
              <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft border border-border">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-primary" />
                  Your Selected Mover
                </h2>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center text-primary-foreground font-heading font-bold text-xl shadow-soft`}>
                    {offer.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                      {offer.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {offer.rating} ★ • {offer.reviews} reviews
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {offer.inclusions.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Price Summary */}
            <div className="lg:col-span-1">
              <div className="bg-background rounded-2xl p-6 shadow-medium border border-border sticky top-20">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
                  Price Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Base Moving Service</span>
                    <span className="font-medium text-foreground">CHF {offer.price.toLocaleString()}</span>
                  </div>

                  {selectedAddOns.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-foreground mb-3">Add-on Services:</p>
                      {selectedAddOns.map((addon, idx) => (
                        <div key={idx} className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">{addon.name}</span>
                          <span className="font-medium text-foreground">CHF {addon.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">CHF {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">VAT (15%)</span>
                      <span className="font-medium text-foreground">CHF {vat.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-primary">
                    <div className="flex justify-between">
                      <span className="font-heading font-semibold text-foreground">Total</span>
                      <span className="text-2xl font-heading font-bold text-primary">
                        CHF {total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-2 mb-6 p-4 bg-muted rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                    I agree to the{" "}
                    <a href="/legal/terms" className="text-primary hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and understand the cancellation policy
                  </Label>
                </div>

                {/* Confirm Button */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={handleConfirm}
                  disabled={!agreed}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Confirm Booking
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Secure booking • Full refund if cancelled 48h before move
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
