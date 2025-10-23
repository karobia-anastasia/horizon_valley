import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-r from-primary/95 to-blue-600/95 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              The Most Valuable Thing is Your Health
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/90 max-w-xl mx-auto lg:mx-0">
              At Horizon Valley Hospital, we provide compassionate, specialized care for elderly patients in Ruiru, Kenya. Your loved ones deserve the best healthcare with dignity and respect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-base shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                Schedule a Visit
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto transition-all">
                Our Services
              </Button>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 animate-slide-up shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">Quick Appointment</h3>
            <div className="space-y-3 sm:space-y-4">
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white h-12">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="geriatric">Geriatric Medicine</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="orthopedic">Orthopedic Care</SelectItem>
                  <SelectItem value="dental">Dental Services</SelectItem>
                  <SelectItem value="physical">Physical Therapy</SelectItem>
                </SelectContent>
              </Select>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 h-12 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 h-12 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <input
                type="date"
                className="w-full px-4 py-3 h-12 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 h-12 shadow-lg hover:shadow-xl transition-all" size="lg">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
