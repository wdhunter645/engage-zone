import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const SocialMediaWall = () => {
  const mockPosts = [
    {
      id: 1,
      author: "FanClubMember1",
      content: "Just had an amazing experience at the latest event! Can't wait for the next one 🎉",
      likes: 234,
      comments: 45,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "SuperFan2023",
      content: "The community here is absolutely incredible. Love being part of this!",
      likes: 189,
      comments: 32,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      author: "CommunityLover",
      content: "Check out the exclusive merchandise I just received! Quality is top-notch 🌟",
      likes: 312,
      comments: 67,
      timestamp: "1 day ago",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Community Feed
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          See what our amazing fan community is talking about
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {mockPosts.map((post) => (
            <Card key={post.id} className="p-6 shadow-card hover:shadow-hover transition-smooth">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-bold">
                    {post.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{post.content}</p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border text-muted-foreground text-sm">
                <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                  <Heart className="w-4 h-4" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-smooth ml-auto">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaWall;
