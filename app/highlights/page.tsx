import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Megaphone, Lightbulb, Users, Globe } from "lucide-react"

export default function HighlightsPage() {
  return (
    <section id="highlights" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient-primary">
          Highlights
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <Award className="h-12 w-12 text-gradient-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Award-Winning Articles</h3>
              <p className="text-muted-foreground">Recognized for impactful and insightful journalistic pieces.</p>
            </CardContent>
          </Card>
          <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-gradient-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Published Author</h3>
              <p className="text-muted-foreground">Authored a best-selling book on modern communication.</p>
            </CardContent>
          </Card>
          <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <Megaphone className="h-12 w-12 text-gradient-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Keynote Speaker</h3>
              <p className="text-muted-foreground">Delivered engaging talks at industry conferences.</p>
            </CardContent>
          </Card>
          <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <Lightbulb className="h-12 w-12 text-gradient-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovative Content</h3>
              <p className="text-muted-foreground">Pioneered new content formats for digital platforms.</p>
            </CardContent>
          </Card>
          <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <Users className="h-12 w-12 text-gradient-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Community Engagement</h3>
              <p className="text-muted-foreground">Built a strong online community around writing and literature.</p>
            </CardContent>
          </Card>
          <Card className="card-hover-effect bg-card border-secondary rounded-lg p-6 text-center">
            <CardContent className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-gradient-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Content featured in international publications.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
