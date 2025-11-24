import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Multifagro Logo"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                <Facebook className="h-4 w-4" />
              </a>
              {/* <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                <Twitter className="h-4 w-4" />
              </a> */}
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                <Instagram className="h-4 w-4" />
              </a>
              {/* <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft">
                <Linkedin className="h-4 w-4" />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.servicesLinks.homeMoving")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.servicesLinks.officeRelocation")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.servicesLinks.packingServices")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.companyLinks.aboutUs")}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.companyLinks.pricing")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.companyLinks.contact")}
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.companyLinks.terms")}
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.companyLinks.privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:0782177760" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    078 217 77 60
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:multifagroumzug@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    multifagroumzug@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Zurich, Geneva, Basel, Bern<br />Switzerland
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Hohenstieglen 2, 8152 Opfikonzh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Multifagro. {t("footer.allRightsReserved")}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/legal/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.bottomLinks.terms")}
              </Link>
              <Link to="/legal/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.bottomLinks.privacy")}
              </Link>
              <Link to="/legal/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.bottomLinks.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
