document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileNavOverlay = document.querySelector(".mobile-nav-overlay")

  if (menuToggle && mobileNavOverlay) {
    menuToggle.addEventListener("click", () => {
      mobileNavOverlay.classList.toggle("open")
    })

    // Close mobile nav when clicking a link
    mobileNavOverlay.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavOverlay.classList.remove("open")
      })
    })

    // Close mobile nav when clicking outside
    mobileNavOverlay.addEventListener("click", (e) => {
      if (e.target === mobileNavOverlay) {
        mobileNavOverlay.classList.remove("open")
      }
    })
  }

  // Smooth Scrolling for Navigation Links (only for internal links on index.html)
  if (window.location.pathname === "/" || window.location.pathname.endsWith("/index.html")) {
    document.querySelectorAll(".nav-list a, .mobile-nav-list a").forEach((anchor) => {
      if (anchor.getAttribute("href").startsWith("#")) {
        anchor.addEventListener("click", function (e) {
          e.preventDefault()
          const targetId = this.getAttribute("href")
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
          }
        })
      }
    })

    // Number Counting Animation (only on index.html)
    const numbersSection = document.getElementById("numbers")
    const numberElements = document.querySelectorAll(".numbers-section .number")
    let animationStarted = false

    const animateNumber = (element, target) => {
      const start = 0
      const duration = 2000 // 2 seconds
      let startTime = null

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const value = Math.floor(progress * target)
        element.textContent = value

        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }

      requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            numberElements.forEach((el) => {
              const target = Number.parseInt(el.dataset.target)
              animateNumber(el, target)
            })
            animationStarted = true // Ensure animation runs only once
            observer.unobserve(numbersSection) // Stop observing after animation starts
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      },
    )

    if (numbersSection) {
      observer.observe(numbersSection)
    }

    // Active Navigation Link on Scroll (only on index.html)
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

    const updateActiveLink = () => {
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100 // Offset for header height
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id")
        }
      })

      navLinks.forEach((link) => {
        // Only update active class for internal links on the current page
        if (link.getAttribute("href").startsWith("#")) {
          link.classList.remove("active")
          if (link.getAttribute("href").includes(current)) {
            link.classList.add("active")
          }
        }
      })
    }

    window.addEventListener("scroll", updateActiveLink)
    updateActiveLink() // Call on load to set initial active link
  }

  // Set active class for current page in navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    } else if (currentPage === "index.html" && link.getAttribute("href").startsWith("index.html#")) {
      // Special handling for internal links on home page
      // Active class will be handled by scroll listener for these
    }
  })
})
