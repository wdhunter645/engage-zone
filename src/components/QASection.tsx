import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QASection = () => {
  const faqs = [
    {
      question: "How do I become a member?",
      answer:
        "Simply click the 'Login / Join' button at the top of the page and follow the registration process. Membership is free and gives you access to exclusive content, events, and community features.",
    },
    {
      question: "What benefits do members get?",
      answer:
        "Members get access to exclusive events, early announcements, voting rights on community decisions, access to the members-only social feed, and special discounts from our partners.",
    },
    {
      question: "How can I participate in voting?",
      answer:
        "Once you're a registered member, you can participate in all voting activities. Simply navigate to the voting section and cast your vote for your favorite option. Each member gets one vote per poll.",
    },
    {
      question: "Are the events free for members?",
      answer:
        "Most events are free for members, though some special events may have a small fee to cover venue costs. Premium events and exclusive meet-and-greets may require advance registration.",
    },
    {
      question: "How can I stay updated on new events?",
      answer:
        "Members receive email notifications for all upcoming events. You can also check the Events Calendar on this page regularly and follow our social media channels for real-time updates.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Questions & Answers
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Everything you need to know about our fan club
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 shadow-card hover:shadow-hover transition-smooth"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default QASection;
