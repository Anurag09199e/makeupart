import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Instagram, Facebook, Heart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Import the portfolio items data
import { portfolioItems } from "@/app/data"

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  // Find the portfolio item with the matching ID
  const item = portfolioItems.find((item) => item.id === params.id) || portfolioItems[0]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Kanika Chanda</span>
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
        {/* Back Button */}
        <div className="container py-6">
          <Button variant="ghost" className="flex items-center gap-1" asChild>
            <Link href="/#portfolio">
              <ChevronLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Portfolio Detail Hero */}
        <section className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" priority />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-rose-500 hover:bg-rose-600 mb-3">{item.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{item.title}</h1>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Client</h3>
                  <p>{item.client}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Date</h3>
                  <p>{item.date}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Occasion</h3>
                  <p>{item.occasion}</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Location</h3>
                  <p>{item.location}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="bg-rose-500 hover:bg-rose-600">Book Similar Look</Button>
                <Button variant="outline" className="gap-2">
                  <Heart className="h-4 w-4" /> Save
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Makeup Details */}
        <section className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Products Used</h2>
              <ul className="space-y-2">
                {item.products.map((product, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Techniques</h2>
              <ul className="space-y-2">
                {item.techniques.map((technique, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Client Testimonial */}
        <section className="container py-8 bg-rose-50 rounded-lg">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
            <div className="relative">
              <div className="text-5xl text-rose-200 absolute -top-6 left-0">"</div>
              <p className="text-lg italic text-muted-foreground mb-4 relative z-10">{item.testimonial.text}</p>
              <div className="text-5xl text-rose-200 absolute -bottom-10 right-0">"</div>
            </div>
            <p className="font-medium text-rose-600">— {item.testimonial.author}</p>
          </div>
        </section>

        {/* Related Looks */}
        <section className="container py-12">
          <h2 className="text-2xl font-bold mb-6">Similar Looks You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems
              .filter((relatedItem) => item.relatedLooks.includes(relatedItem.id))
              .slice(0, 3)
              .map((relatedItem, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <Image
                      src={relatedItem.image || "/placeholder.svg"}
                      alt={relatedItem.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-rose-500 hover:bg-rose-600 text-white" asChild>
                        <Link href={`/portfolio/${relatedItem.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{relatedItem.title}</h3>
                  <p className="text-sm text-muted-foreground">{relatedItem.category}</p>
                </div>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 my-8 bg-rose-50 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Love This Look?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a consultation with Kanika to create a personalized look that's perfect for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                Book a Consultation
              </Button>
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600" asChild>
                <Link href="/#portfolio">View More Looks</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kanika Chanda</h3>
              <p className="text-slate-300 mb-4">
                Professional makeup artist providing high-quality services across Gurgaon, Delhi, NCR, and beyond.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-rose-300 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white hover:text-rose-300 transition-colors">
                  <Facebook className="h-5 w-5" />
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
            <p>© {new Date().getFullYear()} Kanika Chanda Makeup Artist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
