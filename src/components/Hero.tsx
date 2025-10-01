import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tight animate-in fade-in duration-1000">
          BUSINESS NAME
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto animate-in fade-in duration-1000 delay-200">
          Welcome to the ultimate fan community
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Hero;
