import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsCalendar = () => {
  const events = [
    {
      id: 1,
      title: "Annual Fan Meetup",
      date: "Oct 15, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Convention Center",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Exclusive Members Night",
      date: "Oct 28, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Downtown Arena",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Community Celebration",
      date: "Nov 10, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "City Park",
      status: "registering",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Upcoming Events
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Don't miss out on these exciting gatherings
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="p-6 shadow-card hover:shadow-hover transition-smooth group">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-smooth">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-smooth">
                    {event.title}
                  </h3>
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                    {event.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {event.location}
                </div>
              </div>

              <Button variant="default" className="w-full">
                Register Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
