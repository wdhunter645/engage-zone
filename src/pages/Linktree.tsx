import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Linktree = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Linktree
          </h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Find all our social media links and important resources in one place.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Linktree;
