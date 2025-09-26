import { Card } from "@/components/ui/card";
import { Heart, Home } from "lucide-react";

const CoupleStory = () => {
  return (
    <section id="couple" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="mx-auto mb-4 text-primary" size={48} />
          <h2 className="text-4xl font-bold text-primary mb-4">Nossa História</h2>
          <p className="text-lg text-muted-foreground">
            Um amor que encontrou seu lar
          </p>
        </div>

        <Card className="p-8 shadow-soft bg-gradient-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                O Início de Tudo
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Há alguns anos, duas vidas se encontraram e descobriram que juntas 
                formavam algo muito especial. Após muitos momentos compartilhados, 
                risadas, sonhos e planos, chegou o momento de dar o próximo grande 
                passo: construir um lar juntos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Agora, com as chaves da nossa primeira casa em mãos, queremos 
                compartilhar esta alegria com vocês, pessoas especiais que fazem 
                parte da nossa jornada.
              </p>
            </div>
            
            <div className="text-center">
              <Home className="mx-auto mb-4 text-accent" size={80} />
              <h4 className="text-xl font-semibold text-primary mb-2">
                Nossa Nova Casa
              </h4>
              <p className="text-muted-foreground">
                Um espaço para criar memórias, receber amigos e família, 
                e começar este novo capítulo das nossas vidas.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CoupleStory;