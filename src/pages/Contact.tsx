import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      toast.success("Message sent! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+966 12 345 6789",
      link: "tel:+966123456789",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "support@moveeasy.sa",
      link: "mailto:support@moveeasy.sa",
    },
    {
      icon: MapPin,
      title: "Locations",
      detail: "Riyadh • Jeddah • Dammam",
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
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Have questions? We're here to help. Reach out and we'll respond as soon as possible.
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
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday - Thursday</span>
                      <span className="text-foreground font-medium">8am - 8pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Friday</span>
                      <span className="text-foreground font-medium">10am - 6pm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-background rounded-2xl p-8 lg:p-10 shadow-medium border border-border">
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name *
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
                        <Label htmlFor="email">
                          Email Address *
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
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number (Optional)
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+966 5X XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          Subject (Optional)
                        </Label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
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
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Link Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our FAQ section for instant answers to common questions
            </p>
            <Button variant="outline" asChild>
              <a href="/#faq">View FAQ</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
