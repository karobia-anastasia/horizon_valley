import { useEffect, useState } from "react";

const stats = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Happy Patients", value: 5000, suffix: "+" },
  { label: "Qualified Doctors", value: 25, suffix: "+" },
  { label: "Medical Staff", value: 80, suffix: "+" },
];

const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep === steps) {
          clearInterval(timer);
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(increment * currentStep);
            return newCounts;
          });
        }
      }, stepDuration);
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
