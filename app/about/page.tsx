import Image from "next/image"

export default function AboutPage() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient-primary">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <Image
            src="/about-img.jpeg"
            width={500}
            height={500}
            alt="Writer's Headshot"
            className="mx-auto aspect-square overflow-hidden rounded-lg object-cover border-2 border-primary shadow-lg"
          />
          <div className="space-y-6 text-lg text-muted-foreground text-left">
            <p>
              Storytelling is how I make sense of the world. 
              
              And more than writing just for the fun it, I use words to make your audience feel what you want them to feel. 
            </p>  
            <p>

Your brand needs to leave an impression on people's mind. I help you achieve that through relatable, yet unique content.

</p> 
<p>I help busy entrepreneurs, creators, and brands create content that gets seen, remembered, and acted upon.
            </p>
            <p>
I manage social media accounts and I write stories, whichever kind you need. From viral stories that bring conversations and engagements, to persuasive ads that drive sales. 
</p>
<p>
My clients' posts don’t disappear  into timelines, they start conversations, create emotions, and usually go viral.
</p>
My aim is your happiness and satisfaction. When you're happy, I'm happy. When you're satisfied, I'm motivated. 
<p>
If it’s behind the scenes as your ghostwriter or creating your next high converting adverts through stories, I'm your go-to guy, to make your voice unforgettable.
</p>
<p>
If you want your audience to remember you and your product, not just see you, we should talk.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
