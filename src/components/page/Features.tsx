import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, MessageSquare, Users } from "lucide-react";

export default function Features() {
  return (
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
  )
}
