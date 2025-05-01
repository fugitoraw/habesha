"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, MessageSquare, Search, Plus } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/page/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  date: string;
  category: string;
  readTime: string;
  comments: number;
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      excerpt: "Learn the fundamentals of web development and start your journey in tech...",
      author: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?u=1",
        initials: "SJ"
      },
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      comments: 12
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      excerpt: "Deep dive into React Hooks and how they can improve your component logic...",
      author: {
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?u=2",
        initials: "MC"
      },
      date: "March 14, 2024",
      category: "React",
      readTime: "8 min read",
      comments: 8
    },
    {
      id: 3,
      title: "The Future of AI in Development",
      excerpt: "Exploring how artificial intelligence is shaping the future of software development...",
      author: {
        name: "Alex Turner",
        avatar: "https://i.pravatar.cc/150?u=3",
        initials: "AT"
      },
      date: "March 13, 2024",
      category: "AI & ML",
      readTime: "6 min read",
      comments: 15
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-[#57ff8f] to-[#16364d] py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              habesha progeny Blog
            </h1>
            <Link href="/blog/create">
              <Button className="bg-white text-[#16364d] hover:bg-gray-100">
                <Plus className="w-4 h-4 mr-2" />
                Create New Post
              </Button>
            </Link>
          </div>
          <p className="text-white text-center text-lg mb-8">
            Insights, tutorials, and community stories
          </p>
          <div className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white text-[#16364d] "
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card 
            key={post.id} 
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
          >
            {/* Gradient top border */}
            <div className="h-1 bg-gradient-to-r from-[#57ff8f] to-[#16364d]"></div>
            
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-3">
                <Badge 
                  variant="secondary" 
                  className="bg-[#16364d] text-white hover:bg-[#1e4b6e] transition-colors"
                >
                  {post.category}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium">
                  {post.readTime}
                </span>
              </div>
              <CardTitle className="text-2xl font-bold group-hover:text-[#16364d] transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pb-4">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10 border-2 border-[#57ff8f]">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback className="bg-[#16364d] text-white">
                    {post.author.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <p className="font-medium text-[#16364d]">{post.author.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-[#57ff8f]" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between items-center bg-gray-50 px-6 py-4">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 text-muted-foreground hover:text-[#16364d]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{post.comments} Comments</span>
              </Button>
              
              <Button 
                variant="default" 
                className="bg-[#16364d] hover:bg-[#1e4b6e] text-white flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Read More
              </Button>
            </CardFooter>
          </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}