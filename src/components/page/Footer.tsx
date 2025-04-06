import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { SOCIAL_LINKS } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">habesha progeny</h3>
              <p className="text-gray-300">
                Empowering developers and tech enthusiasts to connect, learn, and grow together.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">Events</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">Join Telegram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">Contributors</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#DAA520] transition-colors">Resources</a></li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Stay updated with our latest news and events.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#DAA520]"
                />
                <Button className="bg-[#DAA520] hover:bg-[#B8860B]">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 habesha progeny. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={SOCIAL_LINKS.youtube} className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
