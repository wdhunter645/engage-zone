import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VoteSection from "@/components/VoteSection";
import JoinSection from "@/components/JoinSection";
import SocialMediaWall from "@/components/SocialMediaWall";
import PartnersSection from "@/components/PartnersSection";
import EventsCalendar from "@/components/EventsCalendar";
import MilestonesSection from "@/components/MilestonesSection";
import QASection from "@/components/QASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <VoteSection />
        <JoinSection />
        <SocialMediaWall />
        <PartnersSection />
        <EventsCalendar />
        <MilestonesSection />
        <QASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
