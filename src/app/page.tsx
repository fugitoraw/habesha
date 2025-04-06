"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, MessageSquare, Calendar, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use_mobile";
import Link from "next/link";
import Footer from "@/components/Footer";
import { SOCIAL_LINKS } from "@/constants";

const page = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      {/* <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/blog">
          <BookOpen className="w-4 h-4 mr-2" />
          Blog
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <Users className="w-4 h-4 mr-2" />
          Collaboration Tools
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="p-4 w-[200px]">
            <ul className="space-y-2">
              <li><a href="/tools/code-sharing" className="block hover:text-[#8B0000]">Code Sharing</a></li>
              <li><a href="/tools/project-collab" className="block hover:text-[#8B0000]">Project Collaboration</a></li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem> */}
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
          About Us
        </NavigationMenuLink>
      </NavigationMenuItem>
      {/* <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/support">
          Support Us
        </NavigationMenuLink>
      </NavigationMenuItem> */}
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/guidelines">
          Community Guidelines
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {/* <a href="/blog" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md">
            <BookOpen className="w-4 h-4" />
            Blog
          </a>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 p-2">
              <Users className="w-4 h-4" />
              Collaboration Tools
            </span>
            <a href="/tools/code-sharing" className="pl-8 p-2 hover:bg-accent rounded-md">Code Sharing</a>
            <a href="/tools/project-collab" className="pl-8 p-2 hover:bg-accent rounded-md">Project Collaboration</a>
          </div> */}
          <a href="/about" className="p-2 hover:bg-accent rounded-md">About Us</a>
          {/* <a href="/support" className="p-2 hover:bg-accent rounded-md">Support Us</a> */}
          <a href="/guidelines" className="p-2 hover:bg-accent rounded-md">Community Guidelines</a>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-[#8B0000]">habesha progeny</a>
          {isMobile ? (
            <MobileNav />
          ) : (
            <NavigationMenu>
              <NavigationMenuList>
                <NavLinks />
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#8B0000] to-[#DAA520] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to habesha progeny Community</h1>
            <p className="text-xl mb-8">
              A vibrant hub for developers, tech enthusiasts, and innovators to connect, learn, and grow together.
            </p>
            <Button className="cursor-pointer bg-white text-[#8B0000] hover:bg-gray-100 text-lg px-8 py-6">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-[#8B0000] mb-4 flex justify-center">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Interactive Blogs</h3>
                <p className="text-gray-600 text-center">
                  Stay updated with latest trends, tutorials, and insights from industry experts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-[#8B0000] mb-4 flex justify-center">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Collaborative Tools</h3>
                <p className="text-gray-600 text-center">
                  Real-time code-sharing and collaboration tools for enhanced teamwork.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-[#8B0000] mb-4 flex justify-center">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Engagement via Telegram</h3>
                <p className="text-gray-600 text-center">
                  Join discussions and share ideas through our Telegram groups.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-[#8B0000] mb-4 flex justify-center">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Events & Announcements</h3>
                <p className="text-gray-600 text-center">
                  Stay updated with workshops, hackathons, and learning opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      {/* <RecentBlog/> */}

      {/* Actionable Impact Section */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#DAA520] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Make an Impact</h2>
            <p className="text-xl mb-8">
              Join our community initiatives and help shape the future of technology in Ethiopia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Mentor Others</h3>
                <p className="mb-4">Share your knowledge and experience with aspiring developers.</p>
                <Button className="bg-white text-[#8B0000] hover:bg-gray-100 cursor-pointer">
                  Become a Mentor
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contribute to Projects</h3>
                <p className="mb-4">Work on meaningful projects that benefit our community.</p>
                <Button className="bg-white text-[#8B0000] hover:bg-gray-100 cursor-pointer">
                  <Link href={SOCIAL_LINKS.email}></Link>
                    Help Out
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#228B22] to-[#DAA520] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-xl">Active Members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-xl">Monthly Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with fellow developers, share your knowledge, and be part of something amazing.
          </p>
          <Button className="bg-[#8B0000] text-white cursor-pointer hover:bg-[#6B0000] text-lg px-8 py-6">
            <Link href={SOCIAL_LINKS.email}>
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default page;