"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  { image: "/FB-testimonial-img1.jpg" },
  { image: "/FB-testimonial-img2.jpg" },
  { image: "/FB-testimonial-img3.jpg" },
  { image: "/FB-testimonial-img4.jpg" },
  { image: "/FB-testimonial-img5.jpg" },
  { image: "/FB-testimonial-img6.jpg" },
  { image: "/FB-testimonial-img7.jpg" },
  { image: "/FB-testimonial-img8.jpg" },
];

export function TestimonialsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={`Testimonial ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-md" />
      </Carousel>
    </div>
  );
}
