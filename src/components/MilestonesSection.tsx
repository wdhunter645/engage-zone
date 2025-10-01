import milestoneImg from "@/assets/milestone.jpg";

const MilestonesSection = () => {
  return (
    <section className="py-20 px-4 gradient-section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Milestones
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Celebrating our community achievements
        </p>

        <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-smooth">
          <img
            src={milestoneImg}
            alt="Milestone celebration"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">10,000 Members Strong!</h3>
              <p className="text-lg text-white/90">
                We reached an incredible milestone this year - thank you to our amazing community
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100K+</div>
            <div className="text-sm text-muted-foreground">Posts Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Years Running</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
