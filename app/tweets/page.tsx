import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function TweetsPage() {
  const tweets = [
    { id: 1, image: "/FB-img1.jpg", link: "https://www.facebook.com/share/p/1B8LeDrP5g/" },
    { id: 2, image: "/FB-img2.jpg", link: "https://www.facebook.com/share/163g11BMfZ/" },
    { id: 3, image: "/X-img1.jpg", link: "https://twitter.com/..." },
    { id: 4, image: "/X-analytics1.jpg", link: "https://twitter.com/..." },
    { id: 5, image: "/X-img2.jpg", link: "https://twitter.com/..." },
    { id: 6, image: "/X-analytics2.jpg", link: "https://twitter.com/..." },
    { id: 7, image: "/X-img3.jpg", link: "https://twitter.com/..." },
    { id: 8, image: "/X-img4.jpg", link: "https://twitter.com/..." },
    { id: 9, image: "/X-img5.jpg", link: "https://twitter.com/..." },
    { id: 10, image: "/X-analytics3.jpg", link: "https://twitter.com/..." },
  ];

  return (
    <section
      id="tweets"
      className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient-primary">
          Viral Tweets/Posts
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {tweets.map((tweet) => (
            <Card
              key={tweet.id}
              className="card-hover-effect bg-card border-secondary rounded-lg p-4 text-center"
            >
              <CardContent className="flex justify-center">
                <div className="relative w-full h-64 rounded-md overflow-hidden">
                  <Image
                    src={tweet.image}
                    alt={`Tweet ${tweet.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="pt-4 flex justify-center">
                <Link
                  href={tweet.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
