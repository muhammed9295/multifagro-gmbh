import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, ArrowLeft, MapPin, Home as HomeIcon, Calendar, User, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Quote = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state || {};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Details
    fromAddress: initialData.fromPostcode || "",
    toAddress: initialData.toPostcode || "",
    moveSize: "",
    floors: "",
    elevator: false,
    
    // Step 2: Add-ons
    packing: false,
    unpacking: false,
    boxes: false,
    cleaning: false,
    assembly: false,
    
    // Step 3: Date & Time
    moveDate: "",
    timeWindow: "",
    notes: "",
    
    // Step 4: Contact
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fromAddress) newErrors.fromAddress = "Moving from is required";
      if (!formData.toAddress) newErrors.toAddress = "Moving to is required";
      if (!formData.moveSize) newErrors.moveSize = "Move size is required";
      if (!formData.floors) newErrors.floors = "Number of floors is required";
    }

    if (currentStep === 3) {
      if (!formData.moveDate) newErrors.moveDate = "Move date is required";
      if (!formData.timeWindow) newErrors.timeWindow = "Time window is required";
    }

    if (currentStep === 4) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step === 4) {
        handleSubmit();
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = () => {
    localStorage.setItem("quoteRequest", JSON.stringify(formData));
    toast.success("Quote request submitted! Redirecting to offers...");
    setTimeout(() => {
      navigate("/offers", { state: formData });
    }, 1500);
  };

  const steps = [
    { number: 1, title: "Details" },
    { number: 2, title: "Options" },
    { number: 3, title: "Schedule" },
    { number: 4, title: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              Get Your Free Quote
            </h1>
            <p className="text-muted-foreground">
              Complete the form to receive personalized quotes from verified movers
            </p>
          </div>

          {/* Stepper */}
          <div className="mb-12">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                        step >= s.number
                          ? "bg-primary text-primary-foreground shadow-medium"
                          : "bg-background text-muted-foreground border-2 border-border"
                      }`}
                    >
                      {s.number}
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium ${
                        step >= s.number ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 transition-all ${
                        step > s.number ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl p-6 lg:p-10 shadow-medium border border-border">
            {/* Step 1: Details */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Moving Details
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fromAddress" className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Moving From *</span>
                    </Label>
                    <Input
                      id="fromAddress"
                      placeholder="e.g., Al Malqa, Riyadh"
                      value={formData.fromAddress}
                      onChange={(e) => setFormData({ ...formData, fromAddress: e.target.value })}
                      className={errors.fromAddress ? "border-destructive" : ""}
                    />
                    {errors.fromAddress && (
                      <p className="text-xs text-destructive">{errors.fromAddress}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="toAddress" className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Moving To *</span>
                    </Label>
                    <Input
                      id="toAddress"
                      placeholder="e.g., Al Hamra, Jeddah"
                      value={formData.toAddress}
                      onChange={(e) => setFormData({ ...formData, toAddress: e.target.value })}
                      className={errors.toAddress ? "border-destructive" : ""}
                    />
                    {errors.toAddress && (
                      <p className="text-xs text-destructive">{errors.toAddress}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="moveSize">Move Size *</Label>
                  <Select value={formData.moveSize} onValueChange={(value) => setFormData({ ...formData, moveSize: value })}>
                    <SelectTrigger className={errors.moveSize ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select move size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">Studio Apartment (1-2 rooms)</SelectItem>
                      <SelectItem value="1bed">1 Bedroom (2-3 rooms)</SelectItem>
                      <SelectItem value="2bed">2 Bedroom (3-4 rooms)</SelectItem>
                      <SelectItem value="3bed">3 Bedroom (4-5 rooms)</SelectItem>
                      <SelectItem value="4bed+">4+ Bedroom (6+ rooms)</SelectItem>
                      <SelectItem value="office">Office Space</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.moveSize && (
                    <p className="text-xs text-destructive">{errors.moveSize}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="floors">Current Floor *</Label>
                    <Select value={formData.floors} onValueChange={(value) => setFormData({ ...formData, floors: value })}>
                      <SelectTrigger className={errors.floors ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select floor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ground">Ground Floor</SelectItem>
                        <SelectItem value="1">1st Floor</SelectItem>
                        <SelectItem value="2">2nd Floor</SelectItem>
                        <SelectItem value="3">3rd Floor</SelectItem>
                        <SelectItem value="4+">4th Floor or Higher</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.floors && (
                      <p className="text-xs text-destructive">{errors.floors}</p>
                    )}
                  </div>

                  <div className="space-y-2 flex items-end">
                    <div className="flex items-center space-x-2 h-11">
                      <Checkbox
                        id="elevator"
                        checked={formData.elevator}
                        onCheckedChange={(checked) => setFormData({ ...formData, elevator: checked as boolean })}
                      />
                      <Label htmlFor="elevator" className="cursor-pointer">
                        Elevator available
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Add-ons */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Additional Services
                </h2>
                <p className="text-muted-foreground mb-6">
                  Select any additional services you need (optional)
                </p>

                <div className="space-y-4">
                  {[
                    { id: "packing", label: "Professional Packing", desc: "Let our team pack your belongings safely" },
                    { id: "unpacking", label: "Unpacking Service", desc: "We'll unpack and arrange items in your new place" },
                    { id: "boxes", label: "Packing Materials", desc: "Boxes, bubble wrap, tape, and other supplies" },
                    { id: "cleaning", label: "Post-Move Cleaning", desc: "Deep cleaning of your old residence" },
                    { id: "assembly", label: "Furniture Assembly", desc: "Assembly and disassembly of furniture" },
                  ].map((service) => (
                    <div
                      key={service.id}
                      className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <Checkbox
                        id={service.id}
                        checked={formData[service.id as keyof typeof formData] as boolean}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, [service.id]: checked as boolean })
                        }
                        className="mt-1"
                      />
                      <div className="flex-1 cursor-pointer" onClick={() => {
                        const checkbox = document.getElementById(service.id) as HTMLButtonElement;
                        checkbox?.click();
                      }}>
                        <Label htmlFor={service.id} className="font-medium cursor-pointer">
                          {service.label}
                        </Label>
                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Schedule Your Move
                </h2>

                <div className="space-y-2">
                  <Label htmlFor="moveDate" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Preferred Move Date *</span>
                  </Label>
                  <Input
                    id="moveDate"
                    type="date"
                    value={formData.moveDate}
                    onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                    className={errors.moveDate ? "border-destructive" : ""}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.moveDate && (
                    <p className="text-xs text-destructive">{errors.moveDate}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeWindow">Preferred Time Window *</Label>
                  <Select value={formData.timeWindow} onValueChange={(value) => setFormData({ ...formData, timeWindow: value })}>
                    <SelectTrigger className={errors.timeWindow ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select time window" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                      <SelectItem value="evening">Evening (4pm - 8pm)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.timeWindow && (
                    <p className="text-xs text-destructive">{errors.timeWindow}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requirements or items that need extra care?"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-primary" />
                    <span>Full Name *</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ahmed Al-Rashid"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ahmed@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Phone Number *</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+966 5X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
                  By submitting this form, you agree to receive quotes from verified moving partners. Your information is secure and will not be shared with third parties.
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              
              <Button variant="hero" onClick={handleNext}>
                {step === 4 ? "Get My Quotes" : "Continue"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quote;
