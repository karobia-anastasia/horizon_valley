import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Sarah Kimani",
    specialty: "Geriatric Specialist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    description: "15+ years specializing in elderly care with expertise in age-related conditions.",
  },
  {
    name: "Dr. James Ochieng",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
    description: "Expert in cardiovascular health for elderly patients with compassionate care.",
  },
  {
    name: "Dr. Grace Wanjiku",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
    description: "Specialized in joint care and mobility solutions for senior patients.",
  },
  {
    name: "Dr. Peter Mwangi",
    specialty: "General Physician",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    description: "Comprehensive primary care with focus on chronic disease management.",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Qualified Doctors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Meet our dedicated team of healthcare professionals specialized in elderly care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{doctor.name}</h3>
                <p className="text-primary font-medium mb-3 text-sm sm:text-base">{doctor.specialty}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{doctor.description}</p>
                <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-all">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
