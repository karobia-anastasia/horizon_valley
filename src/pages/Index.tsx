import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WelcomeFeatures from "@/components/WelcomeFeatures";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Doctors from "@/components/Doctors";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <Hero />
      <WelcomeFeatures />
      <About />
      <Departments />
      <Doctors />
      <Stats />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
