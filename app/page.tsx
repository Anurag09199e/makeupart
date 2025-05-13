import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin, Star, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Anurag</span>
            <span className="text-sm text-muted-foreground">Makeup Artist</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-rose-500 transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-rose-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-rose-500 transition-colors">
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
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/makeup-artist-client.png"
              alt="Makeup artist working with client"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container flex flex-col items-center justify-center min-h-[80vh] text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Enhance Your Natural Beauty</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Professional makeup artistry by Kanika Chanda, the best makeup artist in Gurgaon, Delhi and NCR
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                Book Appointment
              </Button>
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600" asChild>
                <Link href="/#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional makeup services to enhance your facial features and give you a sculpted look
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4 h-48 relative rounded-md overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-rose-500">{service.price}</span>
                    <Button variant="ghost" className="text-rose-500 hover:text-rose-600 p-0 h-auto" asChild>
                      <Link href={`/learn-more?tab=${service.id}`}>
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/female-makeup-artist-portrait.png"
                  alt="Kanika Chanda - Professional Makeup Artist"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">About Kanika Chanda</h2>
                <p className="text-muted-foreground mb-4">
                  Kanika Chanda is renowned as the best makeup artist in Gurgaon, Delhi and NCR. With years of
                  experience and a passion for beauty, she has established herself as a leading professional in the
                  industry.
                </p>
                <p className="text-muted-foreground mb-4">
                  Apart from her studio work, Kanika also offers freelance makeup services across India and
                  internationally. Her unique approach focuses on enhancing your natural beauty while creating a look
                  that's perfectly tailored to your features and personality.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you're preparing for your wedding day, a special event, or a photoshoot, Kanika guarantees a
                  unique result with the highest quality service.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/learn-more">My Story</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/learn-more#philosophy">My Approach</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Portfolio</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse through some of my best work and transformations
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioItems.map((item, index) => (
                <div key={index} className="relative group h-80 rounded-lg overflow-hidden">
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
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="mt-4 bg-rose-500 hover:bg-rose-600" asChild>
                <Link href="/portfolio">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Client Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear what our satisfied clients have to say about their experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-0.5 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-rose-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to book an appointment or have questions? Reach out to us through any of the following channels
                  or fill out the contact form.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">kanika@makeupbykc.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Studio Address</p>
                      <p className="font-medium">123 Beauty Lane, Sector 29, Gurgaon, Haryana</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-medium mb-3">Follow me on social media</p>
                  <div className="flex gap-4">
                    <Link href="#" className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors">
                      <Instagram className="h-5 w-5 text-rose-500" />
                    </Link>
                    <Link href="#" className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors">
                      <Facebook className="h-5 w-5 text-rose-500" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <input id="name" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <select id="service" className="w-full px-3 py-2 border rounded-md">
                      <option value="">Select a service</option>
                      <option value="bridal">Bridal Makeup</option>
                      <option value="party">Party Makeup</option>
                      <option value="photoshoot">Photoshoot Makeup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Tell us about your requirements"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">Send Message</Button>
                </form>
              </div>
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
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-slate-300 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-slate-300 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
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

// Sample data
const services = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    description: "Complete bridal makeup package including trials, ceremony and reception looks.",
    price: "Starting at ₹25,000",
    image: "/elegant-indian-bride-makeup.png",
  },
  {
    id: "party",
    title: "Party Makeup",
    description: "Glamorous makeup for special occasions, parties, and celebrations.",
    price: "Starting at ₹5,000",
    image: "/glamorous-evening-makeup.png",
  },
  {
    id: "photoshoot",
    title: "Photoshoot Makeup",
    description: "Professional makeup for modeling, portfolio, and commercial photoshoots.",
    price: "Starting at ₹8,000",
    image: "/professional-makeup-model.png",
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    description: "Beautiful makeup for engagement ceremonies and pre-wedding events.",
    price: "Starting at ₹12,000",
    image: "/indian-engagement-makeup.png",
  },
  {
    id: "lessons",
    title: "Makeup Lessons",
    description: "Learn professional makeup techniques in personalized one-on-one sessions.",
    price: "Starting at ₹7,000",
    image: "/placeholder.svg?key=ahqoq",
  },
  {
    id: "celebrity",
    title: "Celebrity Makeup",
    description: "High-end makeup services for celebrities, influencers, and public figures.",
    price: "Custom Quote",
    image: "/celebrity-makeup-high-fashion.png",
  },
]

const portfolioItems = [
  {
    id: "bridal-traditional",
    title: "Traditional Bridal Makeup",
    image: "/indian-bride-red.png",
    alt: "Bridal Makeup - Traditional",
  },
  {
    id: "bridal-modern",
    title: "Modern Bridal Makeup",
    image: "/modern-bride-natural-makeup.png",
    alt: "Bridal Makeup - Modern",
  },
  {
    id: "party-glam",
    title: "Glamorous Party Makeup",
    image: "/glamorous-party-makeup.png",
    alt: "Party Makeup",
  },
  {
    id: "fashion-editorial",
    title: "High Fashion Editorial Makeup",
    image: "/high-fashion-makeup.png",
    alt: "Fashion Photoshoot",
  },
  {
    id: "celebrity-event",
    title: "Celebrity Red Carpet Makeup",
    image: "/elegant-celebrity-makeup.png",
    alt: "Celebrity Makeup",
  },
  {
    id: "engagement-traditional",
    title: "Traditional Engagement Makeup",
    image: "/indian-engagement-makeup.png",
    alt: "Engagement Makeup",
  },
]

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Bridal Client",
    text: "Kanika did my bridal makeup and I couldn't have been happier! She understood exactly what I wanted and made me look like the best version of myself. Highly recommend!",
    avatar: "/smiling-indian-woman.png",
  },
  {
    name: "Neha Gupta",
    event: "Engagement Makeup",
    text: "I was so impressed with Kanika's work for my engagement. She is professional, punctual, and incredibly talented. My makeup lasted the entire day!",
    avatar: "/young-indian-woman-portrait.png",
  },
  {
    name: "Anjali Patel",
    event: "Celebrity Client",
    text: "Working with Kanika for my award show appearance was a dream. She knows how to create camera-ready looks that still feel natural and comfortable.",
    avatar: "/elegant-professional-woman.png",
  },
]
