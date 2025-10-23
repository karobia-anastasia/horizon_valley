import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-lg sm:text-xl font-bold text-white">HV</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Horizon Valley</h3>
            </div>
            <p className="text-background/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              Specialized elderly care in Ruiru, Kenya. Providing compassionate, professional healthcare services for seniors.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#departments" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">Departments</a></li>
              <li><a href="#doctors" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">Our Doctors</a></li>
              <li><a href="#blog" className="text-background/80 hover:text-primary transition-colors hover:translate-x-1 inline-block">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-background/80">Geriatric Medicine</li>
              <li className="text-background/80">Cardiology</li>
              <li className="text-background/80">Orthopedic Care</li>
              <li className="text-background/80">Dental Services</li>
              <li className="text-background/80">Physical Therapy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="text-background/80">
                  Ruiru, Kenya<br />
                  Near Thika Road
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+254712345678" className="text-background/80 hover:text-primary transition-colors">
                  +254 712 345 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@horizonvalley.ke" className="text-background/80 hover:text-primary transition-colors break-all">
                  info@horizonvalley.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-background/60">
          <p>© 2024 Horizon Valley Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
