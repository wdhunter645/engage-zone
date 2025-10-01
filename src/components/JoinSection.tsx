import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const JoinSection = () => {
  return (
    <section className="py-20 px-4 gradient-section">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-card rounded-3xl p-12 shadow-card hover:shadow-hover transition-smooth">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-hero mb-6 shadow-glow">
            <Users className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Join the fan club today!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of an exclusive community of passionate fans. Get access to exclusive content, 
            early announcements, and connect with fellow enthusiasts.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
            Login / Join
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div>
              <span className="block text-2xl font-bold text-foreground">10K+</span>
              Members
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="block text-2xl font-bold text-foreground">500+</span>
              Daily Posts
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <span className="block text-2xl font-bold text-foreground">24/7</span>
              Active Community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
