import { Button } from '../ui/button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#57ff8f] to-[#16364d] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to habesha progeny Community</h1>
            <p className="text-xl mb-8">
              A vibrant hub for developers, tech enthusiasts, and innovators to connect, learn, and grow together.
            </p>
            <Button className="cursor-pointer bg-white text-[#16364d] hover:bg-gray-100 text-lg px-8 py-6">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
  )
}
