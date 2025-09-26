import Hero from "@/components/Hero";
import CoupleStory from "@/components/CoupleStory";
import GiftList from "@/components/GiftList";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoupleStory />
      <GiftList />
      
      <footer className="bg-primary/5 py-8 text-center">
        <p className="text-muted-foreground">
          Feito com ❤️ para o casal • Chá de Casa Nova
        </p>
      </footer>
    </div>
  );
};

export default Index;