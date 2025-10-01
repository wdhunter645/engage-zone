import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import voteOption1 from "@/assets/vote-option-1.jpg";
import voteOption2 from "@/assets/vote-option-2.jpg";

const VoteSection = () => {
  const [votes, setVotes] = useState({ option1: 0, option2: 0 });

  const handleVote = (option: "option1" | "option2") => {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
    toast.success("Vote submitted successfully!");
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Vote for your favorite
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Make your choice and support your favorite!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option 1 */}
          <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
            <div className="aspect-square overflow-hidden">
              <img
                src={voteOption1}
                alt="Vote Option 1"
                className="w-full h-full object-cover transition-smooth hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-center">Option A</h3>
              <p className="text-center text-muted-foreground">
                Current votes: <span className="font-semibold text-foreground">{votes.option1}</span>
              </p>
              <Button
                variant="vote"
                size="lg"
                className="w-full"
                onClick={() => handleVote("option1")}
              >
                VOTE
              </Button>
            </div>
          </Card>

          {/* Option 2 */}
          <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
            <div className="aspect-square overflow-hidden">
              <img
                src={voteOption2}
                alt="Vote Option 2"
                className="w-full h-full object-cover transition-smooth hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-center">Option B</h3>
              <p className="text-center text-muted-foreground">
                Current votes: <span className="font-semibold text-foreground">{votes.option2}</span>
              </p>
              <Button
                variant="vote"
                size="lg"
                className="w-full"
                onClick={() => handleVote("option2")}
              >
                VOTE
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoteSection;
