import { Mail, Linkedin, Twitter, Facebook, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground"
    >
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient-primary">
          Get in Touch
        </h2>

        <div className="space-y-6 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, a collaboration opportunity, or just want to say hello?  
            Feel free to reach out through my social channels or email me directly.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 justify-center">
            <Link
              href="mailto:stephenjoel213@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-8 w-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/stephen-joel-2155a2277"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link
              href="https://x.com/_stephenifeanyi"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-8 w-8" />
            </Link>
            <Link
              href="https://www.facebook.com/share/17Ezwj5B8K/"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid gap-6 sm:grid-cols-2 mt-10 max-w-xl mx-auto">
            <div className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-secondary shadow-sm">
              <MapPin className="h-6 w-6 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-secondary-foreground">Location</h3>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-secondary shadow-sm">
              <Phone className="h-6 w-6 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-secondary-foreground">Phone</h3>
                <p className="text-muted-foreground">+234 906 909 9028</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
