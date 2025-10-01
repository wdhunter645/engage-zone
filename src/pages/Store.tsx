import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Store = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Store
          </h1>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse exclusive merchandise and fan gear.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
