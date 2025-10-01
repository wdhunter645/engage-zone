import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "Organization #1",
      description: "Premier partner supporting our community initiatives",
    },
    {
      id: 2,
      name: "Organization #2",
      description: "Exclusive sponsor of our annual events",
    },
    {
      id: 3,
      name: "Organization #3",
      description: "Strategic partner for community development",
    },
  ];

  return (
    <section className="py-20 px-4 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Our Partners
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Proudly collaborating with industry leaders
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="p-8 text-center shadow-card hover:shadow-hover transition-smooth hover:-translate-y-2 cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
