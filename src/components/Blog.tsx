import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Geriatric Care: What Families Should Know",
    excerpt: "Learn about the specialized medical care that addresses the unique needs of elderly patients and how it can improve quality of life.",
    date: "Jan 15, 2024",
    author: "Dr. Sarah Kimani",
    comments: 12,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Heart Health in Senior Years: Prevention Tips",
    excerpt: "Discover essential cardiovascular care strategies and lifestyle modifications that can help seniors maintain a healthy heart.",
    date: "Jan 10, 2024",
    author: "Dr. James Ochieng",
    comments: 8,
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Maintaining Mobility: Exercise for Elderly Patients",
    excerpt: "Safe and effective exercise routines designed specifically for seniors to maintain strength, balance, and independence.",
    date: "Jan 5, 2024",
    author: "Dr. Grace Wanjiku",
    comments: 15,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Latest Health Updates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Stay informed with the latest news and insights on elderly healthcare
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted-foreground mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary group-hover:gap-2 transition-all">
                  Read More <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
