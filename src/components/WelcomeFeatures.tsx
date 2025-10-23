import { Heart, Users, MapPin, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Emergency Help",
    description: "24/7 emergency care available with specialized geriatric emergency protocols and immediate response.",
  },
  {
    icon: Users,
    title: "Qualified Doctors",
    description: "Our expert team is trained in geriatric medicine, ensuring the best medical attention for elderly patients.",
  },
  {
    icon: MapPin,
    title: "Location & Directions",
    description: "Conveniently located in Ruiru near Thika Road with easy access and ample parking facilities.",
  },
  {
    icon: Stethoscope,
    title: "Medical Treatment",
    description: "Comprehensive healthcare services tailored to the unique needs of elderly patients.",
  },
];

const WelcomeFeatures = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Welcome to Horizon Valley</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Providing exceptional healthcare services with compassion and expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeFeatures;
