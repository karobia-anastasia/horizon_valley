import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import geriatric_medicine from "@/assets/geriatric_medicine.jpg"

const departments = [
  {
    id: "geriatric",
    name: "Geriatric Medicine",
    description: "Comprehensive medical care specialized for elderly patients, addressing age-related health conditions and promoting healthy aging. Our geriatric specialists provide personalized treatment plans that consider the unique medical, functional, and social needs of seniors.",
    features: [
      "Complete geriatric assessments",
      "Age-related disease management",
      "Medication optimization for seniors",
      "Fall prevention programs",
    ],
  },
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Expert cardiovascular care for elderly patients, specializing in heart disease prevention, diagnosis, and treatment. Our cardiologists understand the unique challenges of cardiac care in the elderly population.",
    features: [
      "Cardiac health monitoring",
      "Heart disease prevention",
      "Hypertension management",
      "ECG and stress testing",
    ],
  },
  {
    id: "orthopedic",
    name: "Orthopedic Care",
    description: "Specialized orthopedic services for elderly patients, focusing on joint health, mobility, and pain management. We help seniors maintain independence and quality of life through expert musculoskeletal care.",
    features: [
      "Joint pain management",
      "Arthritis treatment",
      "Fracture care and prevention",
      "Post-surgical rehabilitation",
    ],
  },
  {
    id: "dental",
    name: "Dental Services",
    description: "Complete dental care tailored for elderly patients, ensuring oral health contributes to overall wellbeing. Our gentle approach addresses the unique dental needs of seniors.",
    features: [
      "Preventive dental care",
      "Denture services",
      "Oral health assessments",
      "Gentle senior-focused treatment",
    ],
  },
  {
    id: "physical",
    name: "Physical Therapy",
    description: "Comprehensive physical therapy programs designed to help elderly patients maintain mobility, strength, and independence. Our therapists specialize in age-appropriate rehabilitation techniques.",
    features: [
      "Mobility enhancement",
      "Strength training for seniors",
      "Balance and coordination",
      "Post-injury rehabilitation",
    ],
  },
];

const Departments = () => {
  const [activeTab, setActiveTab] = useState(departments[0].id);

  return (
    <section id="departments" className="py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Horizon Valley Departments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive healthcare services specialized for elderly patients
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full mb-6 sm:mb-8 h-auto gap-2 bg-transparent">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept.id}
                value={dept.id}
                className="py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-lg transition-all"
              >
                {dept.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id} className="mt-0 animate-fade-in">
              <Card className="p-6 sm:p-8 lg:p-12 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{dept.name}</h3>
                    <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {dept.description}
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      {dept.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                          </div>
                          <span className="text-foreground text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative order-first lg:order-last">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={geriatric_medicine}
                        alt={dept.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Departments;
