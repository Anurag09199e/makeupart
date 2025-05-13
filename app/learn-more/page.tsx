"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Instagram, Facebook } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LearnMore() {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab") || "bridal"

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
            <Link href="/learn-more" className="text-sm font-medium text-rose-500">
              Learn More
            </Link>
          </nav>
          <Button className="bg-rose-500 hover:bg-rose-600">Book Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  The Art of Beauty Transformation
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover the philosophy, techniques, and passion behind Kanika Chanda's makeup artistry. Learn how she
                  creates stunning looks that enhance your natural beauty and bring out your best features.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    Book a Consultation
                  </Button>
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/#services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/makeup-artist-working.png"
                  alt="Kanika Chanda applying makeup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Makeup Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                Beauty is not about changing who you are, but enhancing what makes you unique. My approach to makeup is
                centered around celebrating your individual features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="bg-rose-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-playfair text-rose-500">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
                <p className="text-muted-foreground">
                  Every face is unique, and so should be every makeup look. I take time to understand your features,
                  preferences, and the occasion to create a look that's perfectly tailored to you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="bg-rose-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-playfair text-rose-500">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhancing Natural Beauty</h3>
                <p className="text-muted-foreground">
                  My goal is never to mask your natural beauty, but to enhance it. I believe in creating looks that make
                  you feel confident and comfortable in your own skin.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="bg-rose-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-playfair text-rose-500">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality & Longevity</h3>
                <p className="text-muted-foreground">
                  I use only premium products that ensure your makeup looks fresh throughout your event. My techniques
                  focus on longevity without compromising on comfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section id="services-detail" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Detailed Services</h2>
              <p className="text-lg text-muted-foreground">
                Explore the comprehensive range of makeup services I offer, each tailored to specific occasions and
                needs.
              </p>
            </div>

            <Tabs defaultValue={tab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="bridal">Bridal</TabsTrigger>
                <TabsTrigger value="party">Party</TabsTrigger>
                <TabsTrigger value="photoshoot">Photoshoot</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="celebrity">Celebrity</TabsTrigger>
              </TabsList>

              <TabsContent value="bridal" className="border rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Bridal Makeup</h3>
                    <p className="text-muted-foreground mb-6">
                      Your wedding day is one of the most important days of your life, and looking your absolute best is
                      essential. My bridal makeup service is designed to create a timeless, radiant look that will
                      photograph beautifully and last throughout your special day.
                    </p>

                    <h4 className="text-lg font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Pre-wedding consultation and makeup trial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Customized bridal look planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Premium, long-lasting products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>On-location service for your convenience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Touch-up kit for the day</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-rose-500 hover:bg-rose-600">Book Bridal Package</Button>
                      <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/#services">View Bridal Gallery</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/bridal-makeup-detailed.png"
                      alt="Bridal Makeup by Kanika Chanda"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="party" className="border rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Party Makeup</h3>
                    <p className="text-muted-foreground mb-6">
                      Make a statement at your next party or special event with a glamorous makeup look that turns
                      heads. My party makeup service focuses on creating bold, eye-catching looks that photograph well
                      under various lighting conditions.
                    </p>

                    <h4 className="text-lg font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Consultation to understand the event and your outfit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>High-definition makeup application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Dramatic or subtle looks based on preference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Studio or on-location service</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-rose-500 hover:bg-rose-600">Book Party Makeup</Button>
                      <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/#services">View Party Looks</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/party-makeup-detailed.png"
                      alt="Party Makeup by Kanika Chanda"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="photoshoot" className="border rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Photoshoot Makeup</h3>
                    <p className="text-muted-foreground mb-6">
                      Professional photoshoots require specialized makeup techniques that translate beautifully on
                      camera. My photoshoot makeup service is designed to create flawless, camera-ready looks that
                      enhance your features without appearing heavy in person.
                    </p>

                    <h4 className="text-lg font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Consultation with you and the photographer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Camera-specific makeup techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Multiple look changes if required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>On-set touch-ups throughout the shoot</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-rose-500 hover:bg-rose-600">Book Photoshoot Makeup</Button>
                      <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/#services">View Portfolio</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/photoshoot-makeup-detailed.png"
                      alt="Photoshoot Makeup by Kanika Chanda"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="engagement" className="border rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Engagement Makeup</h3>
                    <p className="text-muted-foreground mb-6">
                      Your engagement is the first celebration of your journey to marriage. My engagement makeup service
                      creates a fresh, romantic look that complements your outfit and sets the tone for your wedding
                      celebrations.
                    </p>

                    <h4 className="text-lg font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Pre-event consultation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Outfit and jewelry-complementing makeup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Long-lasting products for all-day events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>On-location service available</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-rose-500 hover:bg-rose-600">Book Engagement Makeup</Button>
                      <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/#services">View Engagement Gallery</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/engagement-makeup-detailed.png"
                      alt="Engagement Makeup by Kanika Chanda"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="lessons" className="border rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Makeup Lessons</h3>
                    <p className="text-muted-foreground mb-6">
                      Learn professional makeup techniques tailored to your features and lifestyle. My personalized
                      makeup lessons will equip you with the skills and knowledge to create beautiful looks for everyday
                      wear or special occasions.
                    </p>

                    <h4 className="text-lg font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Assessment of your current routine and products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Personalized techniques for your face shape</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Product recommendations within your budget</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Hands-on practice with guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Follow-up support after the lesson</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-rose-500 hover:bg-rose-600">Book Makeup Lesson</Button>
                      <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/#services">View Lesson Packages</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/makeup-lesson-detailed.png"
                      alt="Makeup Lessons by Kanika Chanda"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="celebrity" className="border rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Celebrity Makeup</h3>
                    <p className="text-muted-foreground mb-6">
                      For public figures, influencers, and celebrities who need flawless makeup for events, red carpets,
                      or appearances. My celebrity makeup service offers premium, discreet, and personalized service
                      with the highest attention to detail.
                    </p>

                    <h4 className="text-lg font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Exclusive, private service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Event-specific makeup planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Premium, luxury products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>On-call availability for last-minute bookings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                        <span>Confidentiality agreement</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-rose-500 hover:bg-rose-600">Inquire About Celebrity Services</Button>
                      <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                        <Link href="/#services">View Celebrity Portfolio</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/celebrity-makeup-detailed.png"
                      alt="Celebrity Makeup by Kanika Chanda"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Makeup Process</h2>
              <p className="text-lg text-muted-foreground">
                Understanding how I work helps create a seamless experience. Here's my step-by-step approach to creating
                your perfect look.
              </p>
            </div>

            <div className="relative">
              {/* Process timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform md:-translate-x-1/2"></div>

              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform translate-x-2"></div>
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform -translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-2">1. Initial Consultation</h3>
                    <p className="text-muted-foreground">
                      We begin with a detailed consultation to understand your preferences, the occasion, your outfit,
                      and any specific requirements you might have. This helps me create a personalized plan for your
                      makeup.
                    </p>
                  </div>
                  <div className="md:hidden"></div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:hidden"></div>
                  <div className="md:pl-12">
                    <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform -translate-x-2"></div>
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform -translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-2">2. Skin Preparation</h3>
                    <p className="text-muted-foreground">
                      Proper skin preparation is crucial for flawless makeup application. I begin with cleansing,
                      followed by toning and moisturizing to create the perfect canvas for makeup application.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform translate-x-2"></div>
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform -translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-2">3. Foundation & Contouring</h3>
                    <p className="text-muted-foreground">
                      I apply foundation that matches your skin tone perfectly, followed by strategic contouring and
                      highlighting to enhance your natural bone structure and create dimension.
                    </p>
                  </div>
                  <div className="md:hidden"></div>
                </div>

                {/* Step 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:hidden"></div>
                  <div className="md:pl-12">
                    <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform -translate-x-2"></div>
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform -translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-2">4. Eye & Lip Makeup</h3>
                    <p className="text-muted-foreground">
                      The eyes and lips are the focal points of any makeup look. I create eye makeup that complements
                      your eye shape and color, and choose lip colors that harmonize with your overall look.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform translate-x-2"></div>
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-rose-500 transform -translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-2">5. Final Touches & Setting</h3>
                    <p className="text-muted-foreground">
                      I add final touches like blush and highlighter, then set your makeup with high-quality setting
                      products to ensure it lasts throughout your event with high-quality setting products to ensure it
                      lasts throughout your event without smudging or fading.
                    </p>
                  </div>
                  <div className="md:hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about my makeup services, booking process, and more.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How far in advance should I book your services?</AccordionTrigger>
                  <AccordionContent>
                    For bridal makeup, I recommend booking 6-8 months in advance, especially for peak wedding season
                    (October-February). For other services like party makeup or photoshoots, 2-4 weeks notice is
                    generally sufficient, though more advance booking is always better to secure your preferred date and
                    time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you travel for on-location services?</AccordionTrigger>
                  <AccordionContent>
                    Yes, I offer on-location services throughout Delhi, Gurgaon, and NCR. For destinations beyond these
                    areas, I'm available for travel nationally and internationally with additional travel and
                    accommodation charges. Please inquire for specific details based on your location.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What brands of makeup do you use?</AccordionTrigger>
                  <AccordionContent>
                    I use a curated selection of high-quality, professional makeup brands including MAC, Bobbi Brown,
                    Anastasia Beverly Hills, Huda Beauty, Charlotte Tilbury, and Kryolan. I also customize my kit based
                    on individual skin types and preferences. If you have specific brand preferences or sensitivities,
                    please let me know during our consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer hair styling services as well?</AccordionTrigger>
                  <AccordionContent>
                    Yes, I offer comprehensive hair styling services that can be booked alongside makeup or as a
                    standalone service. My hair styling expertise includes everything from elegant updos to flowing
                    curls, braided styles, and traditional Indian hairstyles that complement your outfit and occasion.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                  <AccordionContent>
                    For standard bookings, cancellations made more than 48 hours in advance receive a full refund of any
                    deposit. Cancellations within 48 hours forfeit the deposit. For bridal bookings, cancellations must
                    be made at least 30 days in advance for a full refund of the deposit. Cancellations closer to the
                    date are subject to partial or no refund, depending on the circumstances.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I bring reference photos to my appointment?</AccordionTrigger>
                  <AccordionContent>
                    Reference photos are extremely helpful in communicating your vision. I encourage you to bring photos
                    of makeup looks you like, but keep in mind that I will adapt these inspirations to suit your unique
                    features, skin tone, and the specific occasion. During our consultation, we'll discuss how to best
                    achieve the look you want.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Client Experiences</h2>
              <p className="text-lg text-muted-foreground">
                Read detailed stories from clients who have experienced my makeup artistry for various occasions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="relative w-full md:w-1/3 h-[300px] rounded-lg overflow-hidden">
                    <Image src="/testimonial-bride.png" alt="Bridal Client" fill className="object-cover" />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-2">Meera's Wedding Day</h3>
                    <p className="text-muted-foreground italic mb-4">
                      "Working with Kanika for my wedding was one of the best decisions I made for my special day. From
                      our very first consultation, she took the time to understand exactly what I wanted - a look that
                      was traditional yet modern, and most importantly, one that made me feel like myself.
                    </p>
                    <p className="text-muted-foreground italic mb-4">
                      The trial session was thorough and she was receptive to all my feedback. On my wedding day, she
                      arrived early and created a calm, enjoyable atmosphere during what could have been a stressful
                      time. The makeup she did was absolutely flawless - it photographed beautifully and lasted through
                      hours of ceremonies, tears, and celebrations.
                    </p>
                    <p className="text-muted-foreground italic mb-4">
                      What impressed me most was her attention to detail and how she considered everything from the
                      lighting at my venue to the colors of my outfits. My family and friends couldn't stop
                      complimenting how I looked. I would recommend Kanika to any bride without hesitation!"
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                      <p className="font-medium">Meera Kapoor</p>
                      <Separator orientation="vertical" className="h-4" />
                      <p className="text-sm text-muted-foreground">Delhi Wedding, December 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="relative w-full md:w-1/3 h-[300px] rounded-lg overflow-hidden">
                    <Image src="/testimonial-celebrity.png" alt="Celebrity Client" fill className="object-cover" />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-2">Aisha's Award Show Experience</h3>
                    <p className="text-muted-foreground italic mb-4">
                      "As someone in the public eye, finding a makeup artist who understands the demands of high-profile
                      events is crucial. Kanika has been my go-to artist for the past two years, and she never
                      disappoints.
                    </p>
                    <p className="text-muted-foreground italic mb-4">
                      For my recent award show appearance, I needed a look that would stand out on the red carpet,
                      photograph well under harsh lighting, and last through hours of interviews and ceremonies. Kanika
                      created a stunning look that accomplished all of this while still feeling comfortable and not
                      overly heavy.
                    </p>
                    <p className="text-muted-foreground italic mb-4">
                      What I appreciate most about working with her is her professionalism and discretion. She's always
                      punctual, prepared, and respects my privacy. Her calm demeanor and efficiency are exactly what I
                      need during high-pressure events. I trust her implicitly with my appearance for important
                      occasions."
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                      <p className="font-medium">Aisha Sharma</p>
                      <Separator orientation="vertical" className="h-4" />
                      <p className="text-sm text-muted-foreground">Filmfare Awards, February 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-rose-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Transform Your Look?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a consultation today and let's create a makeup look that enhances your natural beauty and makes you
                feel confident and radiant.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                  Book a Consultation
                </Button>
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600" asChild>
                  <Link href="/#portfolio">View Portfolio</Link>
                </Button>
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
