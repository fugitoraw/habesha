import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'

export default function RecentBlog() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-[#8B0000]">Technology</span>
                    <h3 className="text-xl font-semibold mt-2">Getting Started with Web Development</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Learn the fundamentals of web development and start your journey in tech...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">5 min read</span>
                    <Button variant="ghost" className="text-[#8B0000] hover:text-[#6B0000]">
                      Read More <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
