import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { HeroWavyBackground } from "@/components/hero-wavy-background"
import { NumberCounter } from "@/components/number-counter"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full py-24 md:py-32 lg:py-48 flex items-center justify-center min-h-[80vh] overflow-hidden"
      >
        <HeroWavyBackground />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-x-12 container px-6 md:px-12 relative z-10 text-center md:text-left">
  {/* Image */}
  <Image
    src="/Stephen-img.jpg"
    width={300}
    height={250}
    alt="Writer's Headshot"
    className="rounded-full object-cover border-4 border-primary shadow-lg"
  />

  {/* Text & Buttons */}
  <div className="flex flex-col items-center md:items-start space-y-6">
    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none text-gradient-primary">
      Hello, I'm Stephen Joel
    </h1>
    <p className="mx-auto md:mx-0 max-w-[800px] text-lg md:text-xl text-muted-foreground">
      Social Media Manager| Storyteller | Ad Copy Specialist| Ghostwriter<br></br>

      I help brands go viral with the Right Words and Stories

    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        asChild
        className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-lg"
      >
        <Link href="/contact">Get in Touch</Link>
      </Button>

      <Button
        asChild
        className="border border-gray-300 bg-transparent hover:bg-gray-200 text-white-700 hover:text-gray-900 transition-colors px-8 py-6 text-lg rounded-lg"
      >
        <Link href="/tweets">See My Work</Link>
      </Button>
    </div>
  </div>
</div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient-primary">
            My Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-foreground">Ghostwriting Viral Tweets & Threads</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Craft scroll-stopping tweets and threads that drive reach and engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-foreground">Brand Storytelling</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shape compelling narratives that connect deeply with your audience.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-foreground">Ad Copywriting for Conversions</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bringing your ideas to life with expertly written articles, books, and speeches under your name.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-foreground">Social Media Management</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Handle posting, engagement, and community building across platforms.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-foreground">Content Strategy for Consistent Engagement</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plan and execute content that keeps audiences coming back.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-foreground">Analytics Reporting</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track, measure, and translate data into actionable growth insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section id="numbers" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-foreground">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient-primary">
            The Numbers Don't Lie
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="bg-card border-secondary rounded-lg p-6 text-center">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <div className="text-6xl font-extrabold mb-2">
                  <NumberCounter target={6} suffix="+" />
                </div>
                <p className="text-muted-foreground text-lg">Years of Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-secondary rounded-lg p-6 text-center">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <div className="text-6xl font-extrabold mb-2">
                  <NumberCounter target={250} suffix="+" />
                </div>
                <p className="text-muted-foreground text-lg">Followers</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-secondary rounded-lg p-6 text-center">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <div className="text-6xl font-extrabold mb-2">
                  <NumberCounter target={5} suffix="+" />
                </div>
                <p className="text-muted-foreground text-lg">Brand Partnerships</p>
              </CardContent>
            </Card>
             <Card className="bg-card border-secondary rounded-lg p-6 text-center">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <div className="text-6xl font-extrabold mb-2">
                  <NumberCounter target={706} suffix="m+" />
                </div>
                <p className="text-muted-foreground text-lg">Yearly Impressions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient-primary">
            What The Audience Say
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-foreground text-center">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-gradient-primary">
            Ready to Take Your Social Media Presence to The Next Level?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Let's team up and create content that connects with your audience and gets real results.
          </p>
          <Button
            asChild
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-lg"
          >
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
