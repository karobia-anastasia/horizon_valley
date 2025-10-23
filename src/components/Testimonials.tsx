import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Margaret Njeri",
    relation: "Patient's Daughter",
    text: "The care my mother receives at Horizon Valley is exceptional. The staff treats her with dignity and the doctors are always thorough and compassionate.",
  },
  {
    name: "John Kariuki",
    relation: "Patient's Son",
    text: "I'm grateful for the specialized geriatric care. The team understood my father's unique needs and provided excellent medical attention.",
  },
  {
    name: "Rose Achieng",
    relation: "Patient",
    text: "As a patient here, I feel respected and well-cared for. The medical staff is knowledgeable and the facilities are comfortable.",
  },
  {
    name: "David Mutua",
    relation: "Patient's Guardian",
    text: "Horizon Valley has been a blessing. The 24/7 support and emergency care give us peace of mind knowing our loved one is in good hands.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-primary font-semibold mb-2 text-sm sm:text-base">Read Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">What Our Patients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Hear from families who trust us with their loved ones' care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/20 mb-3 sm:mb-4 group-hover:text-primary/30 transition-colors" />
              <p className="text-muted-foreground mb-5 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-3 sm:pt-4">
                <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.relation}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
