import { Phone, MapPin, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <a href="tel:+254712345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs font-medium text-center sm:text-left">info@horizonvalleyhospital.co.ke</span>
          </a>
          <span className="hidden lg:inline text-xs opacity-80">24/7 Customer Support</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs text-center sm:text-left">Ruiru, Kenya</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
