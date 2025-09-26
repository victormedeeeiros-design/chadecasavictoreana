import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Eletrodomésticos
import microwaveImg from "@/assets/gifts/microwave-real.jpg";
import rangeHoodImg from "@/assets/gifts/range-hood.jpg";
import grillImg from "@/assets/gifts/grill.jpg";
import blenderImg from "@/assets/gifts/blender.jpg";
import mixerImg from "@/assets/gifts/mixer.jpg";
import electricOvenImg from "@/assets/gifts/electric-oven.jpg";
import airFryerImg from "@/assets/gifts/air-fryer.jpg";
import stoveImg from "@/assets/gifts/stove.jpg";
import refrigeratorImg from "@/assets/gifts/refrigerator.jpg";
import dishwasherImg from "@/assets/gifts/dishwasher.jpg";
import waterDispenserImg from "@/assets/gifts/water-dispenser.jpg";
import toasterImg from "@/assets/gifts/toaster.jpg";
import coffeeMakerImg from "@/assets/gifts/coffee-maker.jpg";

// Utensílios
import cookwareSetImg from "@/assets/gifts/cookware-set.jpg";
import pressureCookerImg from "@/assets/gifts/pressure-cooker.jpg";
import kettleImg from "@/assets/gifts/kettle.jpg";
import cuttingBoardsImg from "@/assets/gifts/cutting-boards.jpg";
import dishTowelsImg from "@/assets/gifts/dish-towels.jpg";
import fruitBowlImg from "@/assets/gifts/fruit-bowl.jpg";
import storageContainersImg from "@/assets/gifts/storage-containers.jpg";
import cookwareImg from "@/assets/gifts/cookware.jpg";

// Mesa e Decoração
import servingPlattersImg from "@/assets/gifts/serving-platters.jpg";
import cutlerySetImg from "@/assets/gifts/cutlery-set.jpg";
import wineGlassesImg from "@/assets/gifts/wine-glasses.jpg";
import beerGlassesImg from "@/assets/gifts/beer-glasses.jpg";
import tableclothImg from "@/assets/gifts/tablecloth.jpg";
import diningImg from "@/assets/gifts/dining.jpg";

// Outros
import extensionCordImg from "@/assets/gifts/extension-cord.jpg";
import drillSetImg from "@/assets/gifts/drill-set.jpg";

// Brincadeiras
import survivalKitRealImg from "@/assets/gifts/survival-kit-real.jpg";
import funnyTowelRealImg from "@/assets/gifts/funny-towel-real.jpg";
import funnyDoormattRealImg from "@/assets/gifts/funny-doormat-real.jpg";

interface GiftItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const gifts: GiftItem[] = [
  // Eletrodomésticos
  { id: "1", name: "Micro-ondas", price: 450, category: "Eletrodomésticos", image: microwaveImg },
  { id: "2", name: "Coifa", price: 350, category: "Eletrodomésticos", image: rangeHoodImg },
  { id: "3", name: "Grill", price: 200, category: "Eletrodomésticos", image: grillImg },
  { id: "4", name: "Liquidificador", price: 180, category: "Eletrodomésticos", image: blenderImg },
  { id: "5", name: "Batedeira", price: 250, category: "Eletrodomésticos", image: mixerImg },
  { id: "6", name: "Forno elétrico", price: 400, category: "Eletrodomésticos", image: electricOvenImg },
  { id: "7", name: "Air Fryer", price: 320, category: "Eletrodomésticos", image: airFryerImg },
  { id: "8", name: "Fogão", price: 800, category: "Eletrodomésticos", image: stoveImg },
  { id: "9", name: "Geladeira", price: 1500, category: "Eletrodomésticos", image: refrigeratorImg },
  { id: "10", name: "Lava-louça", price: 1200, category: "Eletrodomésticos", image: dishwasherImg },
  { id: "11", name: "Bebedouro", price: 300, category: "Eletrodomésticos", image: waterDispenserImg },
  { id: "12", name: "Torradeira", price: 120, category: "Eletrodomésticos", image: toasterImg },
  { id: "13", name: "Cafeteira", price: 200, category: "Eletrodomésticos", image: coffeeMakerImg },
  { id: "14", name: "Mixer", price: 150, category: "Eletrodomésticos", image: mixerImg },

  // Utensílios de Cozinha
  { id: "15", name: "Escorredor", price: 80, category: "Utensílios", image: cookwareImg },
  { id: "16", name: "Jogo de panelas", price: 300, category: "Utensílios", image: cookwareSetImg },
  { id: "17", name: "Panela de pressão", price: 150, category: "Utensílios", image: pressureCookerImg },
  { id: "18", name: "Chaleira", price: 100, category: "Utensílios", image: kettleImg },
  { id: "19", name: "Tábuas de cozinha", price: 60, category: "Utensílios", image: cuttingBoardsImg },
  { id: "20", name: "Panos de prato", price: 40, category: "Utensílios", image: dishTowelsImg },
  { id: "21", name: "Fruteira", price: 70, category: "Utensílios", image: fruitBowlImg },
  { id: "22", name: "Potes", price: 80, category: "Utensílios", image: storageContainersImg },
  { id: "23", name: "Garrafa térmica", price: 90, category: "Utensílios", image: storageContainersImg },
  { id: "24", name: "Peneira", price: 25, category: "Utensílios", image: cookwareImg },
  { id: "25", name: "Coador", price: 30, category: "Utensílios", image: cookwareImg },
  { id: "26", name: "Jarras", price: 60, category: "Utensílios", image: servingPlattersImg },
  { id: "27", name: "Medidor de alimento", price: 35, category: "Utensílios", image: cookwareImg },
  { id: "28", name: "Lixeira", price: 80, category: "Utensílios", image: cookwareImg },
  { id: "29", name: "Tesoura", price: 40, category: "Utensílios", image: cookwareImg },
  { id: "30", name: "Espremedor de limão", price: 25, category: "Utensílios", image: cookwareImg },
  { id: "31", name: "Kit utensílios de cozinha", price: 120, category: "Utensílios", image: cookwareImg },
  { id: "32", name: "Ralador", price: 35, category: "Utensílios", image: cookwareImg },
  { id: "33", name: "Espátulas", price: 45, category: "Utensílios", image: cookwareImg },
  { id: "34", name: "Jogo de assadeira", price: 100, category: "Utensílios", image: cookwareImg },
  { id: "35", name: "Escorredor de arroz", price: 30, category: "Utensílios", image: cookwareImg },
  { id: "36", name: "Escorredor de macarrão", price: 35, category: "Utensílios", image: cookwareImg },
  { id: "37", name: "Pegador de gelo", price: 20, category: "Utensílios", image: cookwareImg },
  { id: "38", name: "Luva", price: 25, category: "Utensílios", image: cookwareImg },
  { id: "39", name: "Kit tempero cozinha", price: 80, category: "Utensílios", image: storageContainersImg },
  { id: "40", name: "Kit galheitero", price: 60, category: "Utensílios", image: servingPlattersImg },
  { id: "41", name: "Lixeira cozinha", price: 120, category: "Utensílios", image: cookwareImg },
  { id: "42", name: "Boleira", price: 50, category: "Utensílios", image: servingPlattersImg },
  { id: "43", name: "Espátula massas", price: 30, category: "Utensílios", image: cookwareImg },
  { id: "44", name: "Kit hamburgueira", price: 80, category: "Utensílios", image: cookwareImg },
  { id: "45", name: "Porta tempeiro", price: 40, category: "Utensílios", image: storageContainersImg },
  { id: "46", name: "Espremedor de alho", price: 25, category: "Utensílios", image: cookwareImg },
  { id: "47", name: "Kit abridor de vinho", price: 60, category: "Utensílios", image: wineGlassesImg },
  { id: "48", name: "Jogo de Fondue", price: 150, category: "Utensílios", image: cookwareSetImg },

  // Louças e Mesa
  { id: "49", name: "Travessas e baixelas", price: 120, category: "Mesa e Decoração", image: servingPlattersImg },
  { id: "50", name: "Toalhas de mesa", price: 80, category: "Mesa e Decoração", image: tableclothImg },
  { id: "51", name: "Faqueiro", price: 200, category: "Mesa e Decoração", image: cutlerySetImg },
  { id: "52", name: "Jogo de facas", price: 150, category: "Mesa e Decoração", image: cutlerySetImg },
  { id: "53", name: "Porta guardanapo", price: 30, category: "Mesa e Decoração", image: diningImg },
  { id: "54", name: "Kit café, chá, prato", price: 100, category: "Mesa e Decoração", image: diningImg },
  { id: "55", name: "Kit chá - WOLF", price: 120, category: "Mesa e Decoração", image: diningImg },
  { id: "56", name: "Talheres", price: 80, category: "Mesa e Decoração", image: cutlerySetImg },
  { id: "57", name: "Porta talheres", price: 40, category: "Mesa e Decoração", image: diningImg },
  { id: "58", name: "Saleiro", price: 25, category: "Mesa e Decoração", image: diningImg },
  { id: "59", name: "Kit taças de vinho", price: 100, category: "Mesa e Decoração", image: wineGlassesImg },
  { id: "60", name: "Taça cerveja", price: 60, category: "Mesa e Decoração", image: beerGlassesImg },
  { id: "61", name: "Jogo americano", price: 50, category: "Mesa e Decoração", image: tableclothImg },
  { id: "62", name: "Copos", price: 70, category: "Mesa e Decoração", image: beerGlassesImg },
  { id: "63", name: "Kit de copo", price: 80, category: "Mesa e Decoração", image: beerGlassesImg },
  { id: "64", name: "Petisqueira", price: 60, category: "Mesa e Decoração", image: servingPlattersImg },

  // Outros
  { id: "65", name: "KIT", price: 100, category: "Outros", image: storageContainersImg },
  { id: "66", name: "Amolador de faca", price: 50, category: "Outros", image: cutlerySetImg },
  { id: "67", name: "Trena", price: 40, category: "Outros", image: drillSetImg },
  { id: "68", name: "Extensão", price: 30, category: "Outros", image: extensionCordImg },
  { id: "69", name: "Kit ferramentas - parafusadeira", price: 200, category: "Outros", image: drillSetImg },

  // Brincadeiras
  { id: "70", name: "Kit sobrevivência do morador novo", price: 80, category: "Brincadeiras", image: survivalKitRealImg },
  { id: "71", name: "Pano de prato motivacional", price: 35, category: "Brincadeiras", image: funnyTowelRealImg },
  { id: "72", name: "Tapete de porta diferentão", price: 65, category: "Brincadeiras", image: funnyDoormattRealImg },
  { id: "73", name: "Manual de sobrevivência doméstica", price: 45, category: "Brincadeiras", image: survivalKitRealImg },
  { id: "74", name: "Kit \"Eu não sei cozinhar\"", price: 120, category: "Brincadeiras", image: funnyTowelRealImg },
  { id: "75", name: "Placa \"Zona de descanso matrimonial\"", price: 55, category: "Brincadeiras", image: funnyDoormattRealImg },
  { id: "76", name: "Avental \"Chef em treinamento\"", price: 40, category: "Brincadeiras", image: funnyTowelRealImg },
  { id: "77", name: "Kit emergência \"Esqueci de fazer comida\"", price: 90, category: "Brincadeiras", image: survivalKitRealImg },
];

const categories = ["Eletrodomésticos", "Utensílios", "Mesa e Decoração", "Outros", "Brincadeiras"];

const GiftList = () => {
  const { toast } = useToast();

  const handleGift = (item: GiftItem) => {
    // TODO: Integrar com API de pagamento (Stripe/Mercado Pago)
    // Estrutura preparada para receber:
    // - item.id: ID do produto
    // - item.name: Nome do produto  
    // - item.price: Valor em reais
    // - Dados do comprador (nome, email, etc.)
    
    console.log('Iniciando processo de pagamento para:', {
      productId: item.id,
      productName: item.name,
      amount: item.price,
      currency: 'BRL'
    });
    
    toast({
      title: "Presente selecionado! 🎁",
      description: `${item.name} - R$ ${item.price.toFixed(2)}. Em breve você poderá finalizar a contribuição.`,
    });
  };

  const categoryColors: { [key: string]: string } = {
    "Eletrodomésticos": "bg-primary/10 text-primary",
    "Utensílios": "bg-accent/60 text-accent-foreground",
    "Mesa e Decoração": "bg-secondary text-secondary-foreground",
    "Outros": "bg-muted text-muted-foreground",
    "Brincadeiras": "bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600"
  };

  return (
    <section id="gifts" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Gift className="mx-auto mb-4 text-primary" size={48} />
          <h2 className="text-4xl font-bold text-primary mb-4">Lista de Presentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha um presente para ajudar o casal a mobiliar sua nova casa. 
            Você pode contribuir com o valor do presente e eles receberão o dinheiro para comprar o item.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold font-edwardian text-primary mb-6 text-center">
              {category}
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {gifts
                .filter((gift) => gift.category === category)
                .map((item) => (
                <Card key={item.id} className="p-4 shadow-soft hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                  <div className="flex flex-col h-full">
                    <div className="mb-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-card-foreground text-sm leading-tight flex-1">
                          {item.name}
                        </h4>
                        <Badge className={categoryColors[item.category] + " ml-2 text-xs"}>
                          {item.category === "Brincadeiras" ? "😄" : item.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <p className="text-lg font-bold text-primary mb-3">
                        R$ {item.price.toFixed(2)}
                      </p>
                      
                      <Button 
                        onClick={() => handleGift(item)}
                        size="sm"
                        className="w-full text-xs gap-1"
                      >
                        <ShoppingCart size={14} />
                        Presentear
                      </Button>
                    </div>
                  </div>
                </Card>
                ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12 p-6 bg-secondary/30 rounded-lg">
          <h4 className="text-xl font-semibold text-primary mb-2">
            Como funciona?
          </h4>
          <p className="text-muted-foreground">
            Ao escolher um presente, você contribui com o valor correspondente. 
            O casal receberá o dinheiro para comprar exatamente o que precisam para a nova casa. 
            <br />
            <strong>Em breve integraremos com meios de pagamento para facilitar sua contribuição!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftList;