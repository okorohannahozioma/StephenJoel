import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  title?: string
  rating?: number // Optional rating out of 5
}

export function TestimonialCard({ quote, author, title, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-card border-secondary rounded-lg p-6 text-left h-full flex flex-col justify-between card-hover-effect">
      <CardContent className="p-0">
        {rating && (
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? "text-gradient-primary fill-current" : "text-muted-foreground"}`}
              />
            ))}
          </div>
        )}
        <p className="text-lg italic text-foreground mb-4">
          {'"'}
          {quote}
          {'"'}
        </p>
        <div>
          <p className="font-semibold text-primary">{author}</p>
          {title && <p className="text-sm text-muted-foreground">{title}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
