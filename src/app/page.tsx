"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/page/Footer";
import { SOCIAL_LINKS } from "@/constants";
import Header from "@/components/page/Header";
import Hero from "@/components/page/Hero";
import Features from "@/components/page/Features";
import RecentBlog from "@/components/RecentBlog";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero />
      <Features />
      {/* Actionable Impact Section */}
      <section className="py-20 bg-gradient-to-r from-[#57ff8f] to-[#16364d] text-white">
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
                <Button className="bg-white text-[#16364d] hover:bg-gray-100 cursor-pointer">
                  Become a Mentor
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contribute to Projects</h3>
                <p className="mb-4">Work on meaningful projects that benefit our community.</p>
                <Button className="bg-white text-[#16364d] hover:bg-gray-100 cursor-pointer">
                  <Link href={SOCIAL_LINKS.email}></Link>
                    Help Out
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentBlog/>
      {/* Community Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#57ff8f] to-[#16364d] text-white">
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
          <Button className="bg-[#16364d] text-white cursor-pointer hover:bg-[#57ff8f] text-lg px-8 py-6">
            <Link href={SOCIAL_LINKS.telegram}>
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Page;