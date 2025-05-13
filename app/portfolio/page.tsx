import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Import the portfolio items data
import { portfolioItems } from "@/app/data"

export default function PortfolioGallery() {
  // Group portfolio items by category
  const categories = portfolioItems.reduce(
    (acc, item) => {
      const category = item.category || "Other"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(item)
      return acc
    },
    {} as Record<string, typeof portfolioItems>,
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Divya</span>
            <span className="text-sm text-muted-foreground">Makeup Artist</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#services" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-rose-500 transition-colors">
              About
            </Link>
            <Link href="/#portfolio" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Portfolio
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Testimonials
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Contact
            </Link>
            <Link href="/learn-more" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Learn More
            </Link>
          </nav>
          <Button className="bg-rose-500 hover:bg-rose-600">Book Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-rose-50 py-12">
          <div className="container">
            <div className="flex items-center mb-6">
              <Button variant="ghost" className="flex items-center gap-1 p-0 h-auto" asChild>
                <Link href="/">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Portfolio Gallery</h1>
            <p className="text-muted-foreground max-w-3xl">
              Explore my complete collection of makeup transformations across various styles, occasions, and techniques.
              Click on any image to view more details about the look.
            </p>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-12">
          <div className="container">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold">{category}</h2>
                  <Badge className="bg-rose-500 hover:bg-rose-600">{items.length} looks</Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="relative h-80 w-full overflow-hidden rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button className="bg-rose-500 hover:bg-rose-600 text-white" asChild>
                            <Link href={`/portfolio/${item.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.occasion || category}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-rose-50 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Look?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a consultation today and let's create a makeup look that enhances your natural beauty and makes you
              feel confident and radiant.
            </p>
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
              Book a Consultation
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Divya</h3>
              <p className="text-slate-300 mb-4">
                Professional makeup artist providing high-quality services across Gurgaon, Delhi, NCR, and beyond.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-rose-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-rose-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="text-slate-300 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-slate-300 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-slate-300">Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-300">Saturday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-300">Sunday</span>
                  <span>By Appointment Only</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Divya Makeup Artist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
