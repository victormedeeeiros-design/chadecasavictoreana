import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToGifts = () => {
    document.getElementById('gifts')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCouple = () => {
    document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Casal em sua nova casa" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <Heart className="mx-auto mb-6 text-primary" size={64} />
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
          Chá de Casa Nova
        </h1>
        
        <p className="text-xl md:text-2xl text-primary/80 mb-8 max-w-2xl mx-auto">
          Ajude o casal a mobiliar sua nova casa com amor e carinho
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={scrollToGifts}
            className="text-lg px-8 py-4 shadow-elegant hover:shadow-soft transition-all duration-300"
          >
            Ver Lista de Presentes
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={scrollToCouple}
            className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Conheça o Casal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;