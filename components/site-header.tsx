"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const pathname = usePathname()

  const handleNavLinkClick = () => {
    setIsSheetOpen(false)
  }

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-secondary bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Stephen Joel
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={`nav-link ${isActive("/") ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link ${isActive("/about") ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors`}
          >
            About
          </Link>
          <Link
            href="/tweets"
            className={`nav-link ${isActive("/tweets") ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors`}
          >
            Viral Tweets
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${isActive("/contact") ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors`}
          >
            Contact
          </Link>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:text-primary">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card text-foreground border-l border-secondary">
            <div className="flex flex-col gap-4 py-6">
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-foreground hover:text-primary"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold tracking-tight text-foreground hover:text-primary"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
              <Link
                href="/tweets"
                className="text-lg font-semibold tracking-tight text-foreground hover:text-primary"
                onClick={handleNavLinkClick}
              >
                Viral Tweets
              </Link>
              <Link
                href="/contact"
                className="text-lg font-semibold tracking-tight text-foreground hover:text-primary"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
