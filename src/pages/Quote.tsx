import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
      if (!formData.fromAddress) newErrors.fromAddress = t("quotePage.validation.movingFromRequired");
      if (!formData.toAddress) newErrors.toAddress = t("quotePage.validation.movingToRequired");
      if (!formData.moveSize) newErrors.moveSize = t("quotePage.validation.moveSizeRequired");
      if (!formData.floors) newErrors.floors = t("quotePage.validation.floorsRequired");
    }

    if (currentStep === 3) {
      if (!formData.moveDate) newErrors.moveDate = t("quotePage.validation.moveDateRequired");
      if (!formData.timeWindow) newErrors.timeWindow = t("quotePage.validation.timeWindowRequired");
    }

    if (currentStep === 4) {
      if (!formData.name) newErrors.name = t("quotePage.validation.nameRequired");
      if (!formData.email) newErrors.email = t("quotePage.validation.emailRequired");
      if (!formData.phone) newErrors.phone = t("quotePage.validation.phoneRequired");
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t("quotePage.validation.invalidEmail");
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

  const handleSubmit = async () => {
    try {
      // Show loading state
      const loadingToast = toast.loading('Sending your request...');

      // Submit to Netlify Forms
      const encode = (data: any) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      };

      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        console.log("Local development detected. Mocking Netlify Form submission.", formData);
        // Simulate a small delay
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "quote-request", ...formData }),
        });
        console.log('Submitted to Netlify Forms');
      }

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      const bookingId = `MOV-${Date.now().toString().slice(-8)}`;

      // Store in localStorage
      localStorage.setItem("quoteRequest", JSON.stringify(formData));

      // Calculate estimated price based on move size
      const priceMap: Record<string, number> = {
        studio: 350,
        "1bed": 550,
        "2bed": 750,
        "3bed": 1100,
        "4bed+": 1500,
        office: 2000,
      };

      let basePrice = priceMap[formData.moveSize] || 750;

      // Add service costs
      if (formData.packing) basePrice += 150;
      if (formData.unpacking) basePrice += 100;
      if (formData.boxes) basePrice += 80;
      if (formData.cleaning) basePrice += 200;

      const mockOffer = {
        id: 1,
        company: "Multifagro",
        rating: 4.9,
        reviews: 342,
        price: basePrice,
        avatar: "RM",
        color: "from-primary to-accent",
      };

      const bookingData = {
        bookingId,
        quoteData: formData,
        offer: mockOffer,
        total: basePrice,
      };

      toast.success(t("quotePage.success.message"));
      setTimeout(() => {
        navigate("/booking-success", { state: bookingData });
      }, 1500);
    } catch (error) {
      toast.error('Failed to send quote request. Please try again or contact us directly.');
    }
  };

  const steps = [
    { number: 1, title: t("quotePage.steps.details") },
    { number: 2, title: t("quotePage.steps.options") },
    { number: 3, title: t("quotePage.steps.schedule") },
    { number: 4, title: t("quotePage.steps.contact") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              {t("quotePage.hero.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("quotePage.hero.subtitle")}
            </p>
          </div>

          {/* Stepper */}
          <div className="mb-12">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              {steps.map((s, index) => (
                <div key={s.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${step >= s.number
                        ? "bg-primary text-primary-foreground shadow-medium"
                        : "bg-background text-muted-foreground border-2 border-border"
                        }`}
                    >
                      {s.number}
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium ${step >= s.number ? "text-primary" : "text-muted-foreground"
                        }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 mx-2 transition-all ${step > s.number ? "bg-primary" : "bg-border"
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
                  {t("quotePage.step1.title")}
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fromAddress" className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{t("quotePage.step1.movingFrom")} {t("common.required")}</span>
                    </Label>
                    <Input
                      id="fromAddress"
                      placeholder={t("quotePage.step1.fromPlaceholder")}
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
                      <span>{t("quotePage.step1.movingTo")} {t("common.required")}</span>
                    </Label>
                    <Input
                      id="toAddress"
                      placeholder={t("quotePage.step1.toPlaceholder")}
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
                  <Label htmlFor="moveSize">{t("quotePage.step1.moveSize")} {t("common.required")}</Label>
                  <Select value={formData.moveSize} onValueChange={(value) => setFormData({ ...formData, moveSize: value })}>
                    <SelectTrigger className={errors.moveSize ? "border-destructive" : ""}>
                      <SelectValue placeholder={t("quotePage.step1.selectMoveSize")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">{t("quotePage.step1.sizes.studio")}</SelectItem>
                      <SelectItem value="1bed">{t("quotePage.step1.sizes.1bed")}</SelectItem>
                      <SelectItem value="2bed">{t("quotePage.step1.sizes.2bed")}</SelectItem>
                      <SelectItem value="3bed">{t("quotePage.step1.sizes.3bed")}</SelectItem>
                      <SelectItem value="4bed+">{t("quotePage.step1.sizes.4bed+")}</SelectItem>
                      <SelectItem value="office">{t("quotePage.step1.sizes.office")}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.moveSize && (
                    <p className="text-xs text-destructive">{errors.moveSize}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="floors">{t("quotePage.step1.currentFloor")} {t("common.required")}</Label>
                    <Select value={formData.floors} onValueChange={(value) => setFormData({ ...formData, floors: value })}>
                      <SelectTrigger className={errors.floors ? "border-destructive" : ""}>
                        <SelectValue placeholder={t("quotePage.step1.selectFloor")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ground">{t("quotePage.step1.floors.ground")}</SelectItem>
                        <SelectItem value="1">{t("quotePage.step1.floors.1")}</SelectItem>
                        <SelectItem value="2">{t("quotePage.step1.floors.2")}</SelectItem>
                        <SelectItem value="3">{t("quotePage.step1.floors.3")}</SelectItem>
                        <SelectItem value="4+">{t("quotePage.step1.floors.4+")}</SelectItem>
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
                        {t("quotePage.step1.elevatorAvailable")}
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
                  {t("quotePage.step2.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("quotePage.step2.subtitle")}
                </p>

                <div className="space-y-4">
                  {[
                    { id: "packing", key: "packing" },
                    { id: "unpacking", key: "unpacking" },
                    { id: "boxes", key: "boxes" },
                    { id: "cleaning", key: "cleaning" },
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
                          {t(`quotePage.step2.services.${service.key}.label`)}
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          {t(`quotePage.step2.services.${service.key}.description`)}
                        </p>
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
                  {t("quotePage.step3.title")}
                </h2>

                <div className="space-y-2">
                  <Label htmlFor="moveDate" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{t("quotePage.step3.preferredMoveDate")} {t("common.required")}</span>
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
                  <Label htmlFor="timeWindow">{t("quotePage.step3.preferredTimeWindow")} {t("common.required")}</Label>
                  <Select value={formData.timeWindow} onValueChange={(value) => setFormData({ ...formData, timeWindow: value })}>
                    <SelectTrigger className={errors.timeWindow ? "border-destructive" : ""}>
                      <SelectValue placeholder={t("quotePage.step3.selectTimeWindow")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">{t("quotePage.step3.timeWindows.morning")}</SelectItem>
                      <SelectItem value="afternoon">{t("quotePage.step3.timeWindows.afternoon")}</SelectItem>
                      <SelectItem value="evening">{t("quotePage.step3.timeWindows.evening")}</SelectItem>
                      <SelectItem value="flexible">{t("quotePage.step3.timeWindows.flexible")}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.timeWindow && (
                    <p className="text-xs text-destructive">{errors.timeWindow}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">{t("quotePage.step3.additionalNotes")}</Label>
                  <Textarea
                    id="notes"
                    placeholder={t("quotePage.step3.notesPlaceholder")}
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
                  {t("quotePage.step4.title")}
                </h2>

                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-primary" />
                    <span>{t("quotePage.step4.fullName")} {t("common.required")}</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder={t("quotePage.step4.namePlaceholder")}
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
                    <span>{t("quotePage.step4.emailAddress")} {t("common.required")}</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("quotePage.step4.emailPlaceholder")}
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
                    <span>{t("quotePage.step4.phoneNumber")} {t("common.required")}</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("quotePage.step4.phonePlaceholder")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
                  {t("quotePage.step4.privacyNotice")}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("quotePage.buttons.back")}
                </Button>
              ) : (
                <div></div>
              )}

              <Button variant="hero" onClick={handleNext}>
                {step === 4 ? t("quotePage.buttons.getMyQuotes") : t("quotePage.buttons.continue")}
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
