import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const About = () => {
  const features = [
    "Specialized geriatric care programs",
    "State-of-the-art medical equipment",
    "24/7 nursing and medical support",
    "Comfortable and accessible facilities",
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
                alt="Elderly care at Horizon Valley Hospital"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-primary">15+</p>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              We Are Horizon Valley
              <br />
              <span className="text-primary">A Healthcare Provider</span>
            </h2>
            <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Horizon Valley Hospital is a medium-sized private healthcare facility in Ruiru dedicated to providing 
              comprehensive medical care with a special focus on geriatric services. We understand that caring for 
              elderly loved ones requires more than just medical expertise—it requires patience, understanding, and 
              a genuine commitment to their wellbeing.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                Make an Appointment
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground transition-all">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
