export function SiteFooter() {
  return (
    <footer className="border-t border-secondary py-6 md:py-8 bg-background text-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">{"© 2025 Stephen Joel. All rights reserved."}</p>
        <nav className="flex items-center space-x-4 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  )
}
