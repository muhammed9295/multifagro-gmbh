import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const loadingToast = toast.loading('Sending your message...');

      const encode = (data: any) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      };

      try {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
          console.log("Local development detected. Mocking Netlify Form submission.", formData);
          // Simulate a small delay
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...formData }),
          });
        }

        toast.dismiss(loadingToast);
        toast.success("Message sent! We'll get back to you soon.");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        toast.dismiss(loadingToast);
        toast.error("Failed to send message. Please try again or contact us directly.");
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      detail: "079 900 01 92",
      link: "tel:0799000192",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      detail: "multifagroumzug@gmail.com",
      link: "mailto:multifagroumzug@gmail.com",
    },
    {
      icon: MapPin,
      title: t("contact.locations"),
      detail: t("contact.locationsText"),
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-secondary">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                {t("contact.title")}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                {t("contact.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-2xl p-6 shadow-soft border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-soft">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Business Hours */}
                <div className="bg-background rounded-2xl p-6 shadow-soft border border-border">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    {t("contact.businessHours")}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("contact.mondayFriday")}</span>
                      <span className="text-foreground font-medium">{t("contact.hours")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("contact.saturdaySunday")}</span>
                      <span className="text-foreground font-medium">{t("contact.closed")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-background rounded-2xl p-8 lg:p-10 shadow-medium border border-border">
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                    {t("contact.form.title")}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t("contact.form.fullName")} {t("common.required")}
                        </Label>
                        <Input
                          id="name"
                          placeholder={t("contact.form.placeholders.name")}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t("contact.form.emailAddress")} {t("common.required")}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("contact.form.placeholders.email")}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {t("contact.form.phoneNumber")} {t("common.optional")}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={t("contact.form.placeholders.phone")}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          {t("contact.form.subject")} {t("common.optional")}
                        </Label>
                        <Input
                          id="subject"
                          placeholder={t("contact.form.placeholders.subject")}
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t("contact.form.message")} {t("common.required")}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={t("contact.form.placeholders.message")}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={errors.message ? "border-destructive" : ""}
                        rows={6}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      {t("contact.form.sendMessage")}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Contact;
