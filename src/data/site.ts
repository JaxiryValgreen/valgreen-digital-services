import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  brand: {
    name: "Valgreen Digital Services",
    shortName: "Valgreen",
    tagline: "We build. You grow.",
    description:
      "We design modern, fast and SEO-optimized websites that build trust, attract customers and drive real results.",
    logoText: "VALGREEN DIGITAL SERVICES",
    url: "https://www.valgreendigitalservices.com",
    logoSrc: "/images/valgreen-logo-official.png",
    logoDarkSrc: "/images/valgreen-logo-official.png",
  },

  theme: {
    brand: "#C5A882",
    brandDark: "#B39670",
    brandSoft: "#F0EBE4",
    accent: "#C5A882",
    background: "#F7F4EF",
    surface: "#FFFFFF",
    foreground: "#222222",
    muted: "#6E6860",
    border: "#E4DFD7",
  },

  contact: {
    email: "valgreendigitalservices@gmail.com",
    phone: "+1 (865) 207-1226",
    phoneHref: "tel:+18652071226",
    instagram: "@valgreendigital",
    instagramHref: "https://instagram.com/valgreendigital",
  },

  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Applications", href: "/services#business-applications" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Pricing", href: "/contact" },
    ],
    footer: [
      { label: "Services", href: "/services" },
      { label: "Applications", href: "/services#business-applications" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },

  seo: {
    title:
      "Valgreen Digital Services | Professional Websites That Help Your Business Grow",
    description:
      "We design modern, fast and SEO-optimized websites that build trust, attract customers and drive real results.",
    keywords: [
      "Valgreen Digital Services",
      "web design",
      "website development",
      "SEO",
      "Google Business",
      "construction websites",
      "custom web applications",
      "progressive web apps",
      "mobile app development",
      "business applications",
    ],
    ogImage: "/images/valgreen-logo-official.jpg",
  },

  hero: {
    title: "Professional Websites",
    titleEmphasis: "That Help Your",
    titleSuffix: "Business Grow.",
    subtitle:
      "We design modern, fast and SEO-optimized websites that build trust, attract customers and drive real results.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/portfolio" },
    stats: [
      { id: "years", value: "15+", label: "Years Experience" },
      { id: "projects", value: "250+", label: "Projects Completed" },
      { id: "satisfaction", value: "100%", label: "Client Satisfaction" },
      { id: "support", value: "24/7", label: "Support" },
    ],
    laptopImage: "/images/hero-laptop-excavator.jpg",
    laptopImageAlt: "Roar Construction website with heavy excavator equipment",
    phoneCoverImage: "/images/gbp-cover.jpg",
  },

  platforms: {
    title: "Trusted platforms",
    items: [
      { id: "wordpress", name: "WordPress" },
      { id: "shopify", name: "Shopify" },
      { id: "wix", name: "Wix" },
      { id: "webflow", name: "Webflow" },
      { id: "squarespace", name: "Squarespace" },
      { id: "stripe", name: "Stripe" },
      { id: "google", name: "Google" },
    ],
  },

  about: {
    title: "A digital partner for growing businesses",
    description:
      "Valgreen Digital Services helps businesses look polished online and convert more visitors into customers — with clear strategy, refined design, and reliable development.",
    points: [
      "Strategy-first websites built around real business goals",
      "Clean, modern design that feels premium and inclusive",
      "Mobile-ready builds with strong performance and SEO foundations",
      "Clear communication from kickoff through launch and support",
    ],
    image: "/images/valgreen-logo-official.png",
    imageAlt: "Valgreen Digital Services logo",
  },

  services: {
    eyebrow: "Our Services",
    title: "Complete Digital Solutions To",
    titleEmphasis: "Grow Your Business",
    description:
      "End-to-end digital services designed to help your business look refined online and grow with confidence.",
    cta: { label: "Explore All Services", href: "/services" },
    items: [
      {
        id: "web",
        title: "Websites & Landing Pages",
        description:
          "Custom websites and landing pages that feel premium, load quickly, and convert visitors into customers.",
        details:
          "A professional website is often the first impression your business makes. We design and build custom websites and landing pages that feel refined, load quickly, and guide visitors toward clear next steps—whether that means requesting a quote, booking a call, or making a purchase. Every layout, section, and interaction is crafted around your brand, your offers, and the way your customers actually decide. From mobile-first structure and SEO foundations to polished visuals and conversion-focused messaging, we create digital storefronts that build trust and turn attention into real business growth.",
        icon: "globe",
        href: "/services#web",
      },
      {
        id: "ecommerce",
        title: "E-Commerce Solutions",
        description:
          "Online stores with clear product presentation and conversion-focused checkout experiences.",
        details:
          "An effective online store does more than list products—it makes buying feel simple, secure, and worth coming back for. We build e-commerce experiences with clear product presentation, intuitive navigation, and checkout flows designed to reduce friction and increase conversions. Whether you need a boutique catalog, a multi-category shop, or a service-driven storefront with payments and order management, we focus on speed, mobile usability, and brand consistency so customers can browse confidently and complete purchases without hesitation.",
        icon: "cart",
        href: "/services#ecommerce",
      },
      {
        id: "booking",
        title: "Booking & Appointments",
        description:
          "Scheduling systems that reduce friction, fill your calendar, and keep clients organized.",
        details:
          "Booking should feel effortless for your clients and organized for your team. We create scheduling systems that make it easy to choose services, pick available times, share important details, and confirm appointments without back-and-forth messages. From reminders and calendar syncing to staff availability and service packages, every flow is designed to fill your calendar more consistently while reducing no-shows, admin work, and missed opportunities. The result is a smoother client experience and a more reliable daily operation.",
        icon: "calendar",
        href: "/services#booking",
      },
      {
        id: "branding",
        title: "Branding & Identity",
        description:
          "Visual systems that communicate trust, consistency, and a memorable brand presence.",
        details:
          "Strong branding helps people recognize you, remember you, and trust you faster. We develop visual identity systems—logos, color palettes, typography, and brand guidelines—that communicate professionalism and consistency across your website, social presence, and marketing materials. Every decision is made to support how your business wants to be perceived: refined, credible, and distinctive. With a cohesive brand foundation, your digital presence feels intentional instead of improvised—and every customer touchpoint reinforces the same premium standard.",
        icon: "palette",
        href: "/services#branding",
      },
      {
        id: "seo",
        title: "SEO & Digital Marketing",
        description:
          "Visibility strategies that help the right customers find you and take action.",
        details:
          "Being discoverable matters only if the right people find you and know what to do next. Our SEO and digital marketing work focuses on visibility that drives qualified interest—not empty traffic. We improve technical foundations, page structure, content clarity, and local relevance so your business can rank for meaningful searches and convert visitors into inquiries. Combined with thoughtful messaging and conversion-minded design, your marketing becomes a system that attracts attention, builds credibility, and supports consistent lead flow over time.",
        icon: "search",
        href: "/services#seo",
      },
      {
        id: "ai",
        title: "AI Automation & Integrations",
        description:
          "Smart automations and integrations that save time and connect your digital tools.",
        details:
          "Repetitive work and disconnected tools slow teams down and create missed follow-ups. We design AI-powered automations and integrations that connect your website, CRM, booking tools, messaging platforms, and internal workflows into a smoother system. From lead routing and smart follow-ups to document handling and operational notifications, automation helps your business respond faster and stay organized without adding more manual effort. The goal is practical efficiency: fewer repetitive tasks, clearer processes, and more time for the work that actually grows your company.",
        icon: "bot",
        href: "/services#ai",
      },
      {
        id: "web-app",
        title: "Custom Web Applications",
        description:
          "Secure browser-based business systems for dashboards, portals, scheduling, CRM, and internal tools.",
        details:
          "A custom web application is a private digital workspace built around the way your company actually operates. Instead of forcing your team into generic software, we create a system that organizes information, automates repetitive work, and keeps customers, employees, and managers connected in one secure place. Everything runs in the browser, so your team can log in from the office, the job site, or home without installing complicated software. It is ideal for dashboards, client portals, scheduling, CRM, reporting, document sharing, and internal tools that need to work smoothly across desktop, tablet, and mobile.",
        icon: "monitor",
        href: "/services#web-app",
      },
      {
        id: "pwa",
        title: "Progressive Web Apps",
        description:
          "App-like experiences that install to the home screen without the App Store or Google Play.",
        details:
          "A Progressive Web App gives your business the convenience of a mobile app with the simplicity of a website. Customers can open it instantly in their browser, then add it to their home screen for quick return visits. It feels fast, familiar, and polished—while remaining easier and more affordable to build and maintain than separate iOS and Android apps. That means your business can offer an app-like experience for booking, ordering, account access, or updates without the delays, fees, or complexity of traditional app-store releases.",
        icon: "appWindow",
        href: "/services#pwa",
      },
      {
        id: "mobile-app",
        title: "Native Mobile Applications",
        description:
          "Custom iOS and Android apps for booking, payments, push notifications, loyalty, and more.",
        details:
          "A native mobile application is a dedicated app designed specifically for iPhone and Android. It is the right choice when your customers or employees use their phones constantly and need a premium mobile experience that feels fast, personal, and always within reach. From booking and payments to loyalty programs, push notifications, and team tools, a native app can become a powerful extension of your brand—one that people open again and again because it is built for the way they already use their devices.",
        icon: "smartphone",
        href: "/services#mobile-app",
      },
    ],
  },

  businessApplications: {
    eyebrow: "Business Applications",
    title: "The Right Digital System for",
    titleEmphasis: "Your Business",
    description:
      "Every business is different—so not every company needs the same digital solution. We help you choose between a professional website, a custom web application, a Progressive Web App, a native mobile app, or a complete digital ecosystem based on how you actually work.",
    cta: { label: "Find the Right Solution", href: "/contact" },
    cards: [
      {
        id: "web-app",
        title: "Custom Web Applications",
        summary:
          "Secure browser-based business systems that work on desktop, tablet, and mobile—without downloading anything from an app store.",
        description:
          "A custom web application is a private digital workspace built around the way your company actually operates. Instead of forcing your team into generic software, we create a system that organizes information, automates repetitive work, and keeps customers, employees, and managers connected in one secure place. Everything runs in the browser, so your team can log in from the office, the job site, or home without installing complicated software.",
        icon: "monitor",
        bestFor:
          "Growing businesses that need more than a marketing website—especially companies that rely on dashboards, client portals, scheduling, reporting, document sharing, or custom internal tools that must work smoothly across desktop, tablet, and mobile browsers.",
        typicalFeatures: [
          "Employee dashboards tailored to each role",
          "Secure client portals for updates and documents",
          "Scheduling and appointment workflows",
          "CRM and lead-tracking tools",
          "Inventory and operations management",
          "Reporting and performance insights",
          "Document storage and sharing",
          "Internal company software designed for your process",
        ],
        benefits: [
          "Gives your team one clear place to work and stay organized",
          "Reduces repetitive tasks and missed follow-ups",
          "Improves communication between staff and clients",
          "Works on desktop, tablet, and mobile without app-store downloads",
          "Scales with your business as your needs grow",
        ],
        whyChoose:
          "Choose a custom web application when your business has a unique workflow that off-the-shelf tools cannot handle well. It is the smart option for companies that want a secure, browser-based system designed specifically for their operations—without asking customers or staff to download an app.",
        href: "/contact?interest=Web%20Application",
      },
      {
        id: "pwa",
        title: "Progressive Web Apps (PWA)",
        summary:
          "A modern digital experience that opens in the browser, installs to the phone's home screen, and feels like a real mobile app—without App Store or Google Play requirements.",
        description:
          "A Progressive Web App gives your business the convenience of a mobile app with the simplicity of a website. Customers can open it instantly in their browser, then add it to their home screen for quick return visits. It feels fast, familiar, and polished—while remaining easier and more affordable to build and maintain than separate iOS and Android apps. That means your business can offer an app-like experience without the delays, fees, or complexity of traditional app-store releases.",
        icon: "appWindow",
        bestFor:
          "Businesses that want a clean mobile experience customers will actually use—especially service companies, restaurants, membership brands, and local businesses that need booking, account access, or quick updates without forcing downloads from an app store.",
        typicalFeatures: [
          "One-tap home-screen installation on phones",
          "App-like screens and smooth mobile navigation",
          "Fast loading for busy customers on the go",
          "Easy booking, ordering, and request flows",
          "Customer account and membership access",
          "Service updates and status pages",
          "Works across phones, tablets, and computers",
          "Lower long-term maintenance than dual native apps",
        ],
        benefits: [
          "Feels like a real app without App Store or Google Play friction",
          "Makes it easier for customers to return and take action",
          "Reaches users across devices with one streamlined experience",
          "Often launches faster and costs less than separate mobile apps",
          "Keeps your brand accessible, modern, and easy to maintain",
        ],
        whyChoose:
          "Choose a Progressive Web App when you want the look and feel of a mobile app, strong customer convenience, and a practical budget. It is ideal when speed, accessibility, and simplicity matter more than building two fully separate native apps.",
        href: "/contact?interest=Progressive%20Web%20App",
      },
      {
        id: "mobile-app",
        title: "Native Mobile Applications",
        summary:
          "Custom iOS and Android apps built for businesses that need polished mobile experiences, push notifications, and everyday engagement on customers' phones.",
        description:
          "A native mobile application is a dedicated app designed specifically for iPhone and Android. It is the right choice when your customers or employees use their phones constantly and need a premium mobile experience that feels fast, personal, and always within reach. From booking and payments to loyalty programs and team tools, a native app can become a powerful extension of your brand—one that people open again and again because it is built for the way they already use their devices.",
        icon: "smartphone",
        bestFor:
          "Businesses with frequent mobile users—such as restaurants, salons, fitness brands, service companies, and growing teams—that need push notifications, loyalty programs, payments, booking, or custom mobile tools to stay connected with customers and staff every day.",
        typicalFeatures: [
          "Online booking and appointment scheduling",
          "In-app ordering for products or services",
          "Secure mobile payments and checkout",
          "Push notifications for reminders and offers",
          "Loyalty programs and rewards tracking",
          "Customer accounts and saved preferences",
          "Employee tools and mobile dashboards",
          "Custom features designed around your business",
        ],
        benefits: [
          "Keeps your brand visible on your customer's home screen",
          "Uses push notifications to drive bookings, orders, and return visits",
          "Delivers a polished experience made for iPhone and Android",
          "Supports loyalty, payments, and personalized customer accounts",
          "Creates a stronger daily connection between your business and your audience",
        ],
        whyChoose:
          "Choose a native mobile application when your business depends on frequent phone engagement and needs features a regular website cannot deliver as effectively. It is the premium option for brands ready to invest in a dedicated iOS and Android experience that supports growth, retention, and convenience.",
        href: "/contact?interest=Mobile%20App",
      },
    ],
    choosing: {
      eyebrow: "Choosing the Right Technology",
      title: "We Study Your Business Before",
      titleEmphasis: "We Recommend Anything",
      description:
        "Before recommending a website, application, or automation strategy, Valgreen Digital Services studies how your business works today—and where it needs to go next.",
      studyPoints: [
        "Business goals",
        "Current workflow",
        "Customer experience",
        "Budget",
        "Future growth",
        "Required features",
      ],
      options: [
        {
          id: "website",
          title: "Professional Website",
          description:
            "Ideal for trust, visibility, and converting visitors into inquiries.",
        },
        {
          id: "ecommerce",
          title: "E-commerce",
          description:
            "Best when products or services need online purchasing and checkout.",
        },
        {
          id: "web-application",
          title: "Custom Web Application",
          description:
            "Right for portals, dashboards, and internal systems that run in the browser.",
        },
        {
          id: "pwa-option",
          title: "Progressive Web App",
          description:
            "A strong fit for app-like mobile access without app-store complexity.",
        },
        {
          id: "native-app",
          title: "Native Mobile App",
          description:
            "Recommended when push notifications and deep mobile usage matter most.",
        },
        {
          id: "ai-automation",
          title: "AI Automation",
          description:
            "Useful for reducing repetitive work and connecting tools intelligently.",
        },
        {
          id: "ecosystem",
          title: "Complete Digital Ecosystem",
          description:
            "A coordinated mix of website, apps, automation, and business tools.",
        },
      ],
      note: "Not every business needs an app. The right solution depends on your goals, customers, workflow, and growth plans—and we recommend only what will create real value.",
    },
  },
  industries: {
    eyebrow: "Industries We Serve",
    title: "Websites for",
    titleEmphasis: "Every Industry",
    description:
      "We partner with businesses across industries that need a professional, effective digital presence.",
    cta: { label: "View More Industries", href: "/industries" },
    items: [
      {
        id: "construction",
        title: "Construction",
        slug: "construction",
        description:
          "Project-forward websites that showcase your work and win more estimate requests.",
        image: "/images/industry-construction.jpg",
        imageAlt: "Heavy excavator on a construction site at golden hour",
        icon: "hardhat",
        explanation:
          "Construction brands need websites that communicate capability, safety, and professionalism.",
        features: [
          "Project galleries",
          "Estimate request forms",
          "Service pages",
          "Mobile lead capture",
          "Local SEO",
        ],
      },
      {
        id: "cleaning",
        title: "Cleaning Services",
        slug: "cleaning-services",
        description:
          "Polished service sites that build trust and make booking effortless.",
        image: "/images/industry-cleaning.jpg",
        imageAlt: "Professional cleaning supplies arranged neatly",
        icon: "sparkles",
        explanation:
          "Cleaning companies grow faster when their website feels organized and easy to book.",
        features: [
          "Service packages",
          "Quote forms",
          "Gallery options",
          "Trust pages",
          "Mobile booking",
        ],
      },
      {
        id: "automotive",
        title: "Automotive",
        slug: "automotive",
        description:
          "Clear, high-performing sites that help drivers find services fast.",
        image: "/images/industry-automotive.jpg",
        imageAlt: "Luxury sports car in a premium garage",
        icon: "car",
        explanation:
          "Auto shops need fast, clear websites that help drivers find services without friction.",
        features: [
          "Service menus",
          "Appointments",
          "Warranty messaging",
          "Directions",
          "Fast mobile",
        ],
      },
      {
        id: "restaurants",
        title: "Restaurants",
        slug: "restaurants",
        description:
          "Inviting digital experiences for menus, reservations, and atmosphere.",
        image: "/images/industry-restaurants.jpg",
        imageAlt: "Moody fine dining restaurant interior",
        icon: "utensils",
        explanation:
          "Restaurant websites should feel as inviting as the dining room.",
        features: [
          "Menu presentation",
          "Reservations",
          "Hours clarity",
          "Atmosphere gallery",
          "Mobile browsing",
        ],
      },
      {
        id: "real-estate",
        title: "Real Estate",
        slug: "real-estate",
        description:
          "Elegant property presentation with lead capture that converts.",
        image: "/images/industry-real-estate.jpg",
        imageAlt: "Modern luxury home exterior at dusk",
        icon: "home",
        explanation:
          "Real estate brands need refined presentation and strong lead capture.",
        features: [
          "Property layouts",
          "Lead forms",
          "Agent pages",
          "Photo galleries",
          "SEO structure",
        ],
      },
      {
        id: "beauty",
        title: "Beauty & Salons",
        slug: "beauty-salons",
        description:
          "Elegant branding for services, portfolios, and appointment booking.",
        image: "/images/industry-beauty.jpg",
        imageAlt: "Luxury spa treatment setting",
        icon: "scissors",
        explanation:
          "Salon brands thrive when their website reflects craftsmanship and ease.",
        features: [
          "Service menus",
          "Portfolios",
          "Booking paths",
          "Brand design",
          "Mobile booking",
        ],
      },
      {
        id: "medical",
        title: "Medical & Clinics",
        slug: "medical-clinics",
        description:
          "Calm, trustworthy sites that help patients request care with ease.",
        image: "/images/industry-medical.jpg",
        imageAlt: "Clean modern medical clinic interior",
        icon: "heartPulse",
        explanation:
          "Clinic websites must feel calm, clear, and trustworthy.",
        features: [
          "Service pages",
          "Appointment forms",
          "Accessible design",
          "Patient navigation",
          "Local discovery",
        ],
      },
    ],
  },

  benefits: {
    title: "Built with care, delivered with clarity",
    description:
      "Honest strengths we bring to every project — without inflated numbers or invented claims.",
    items: [
      {
        id: "tailored",
        title: "Tailored Solutions",
        description:
          "Every website is shaped around your goals, offer, and audience.",
        icon: "target",
      },
      {
        id: "delivery",
        title: "Reliable Delivery",
        description:
          "Clear timelines, organized process, and thoughtful execution.",
        icon: "zap",
      },
      {
        id: "secure",
        title: "Secure Development",
        description:
          "Modern builds with solid foundations and careful attention to detail.",
        icon: "shield",
      },
      {
        id: "support",
        title: "Ongoing Support",
        description:
          "Help when you need updates, refinements, or guidance after launch.",
        icon: "headset",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    title: "Our Simple Process To",
    titleEmphasis: "Get You Online",
    description:
      "A simple, transparent process designed to keep projects aligned and polished—whether you need a website, web application, PWA, or mobile app.",
    steps: [
      {
        step: "01",
        title: "Discover",
        description:
          "Learn about your business goals, audience, workflow, and vision.",
      },
      {
        step: "02",
        title: "Plan",
        description:
          "Evaluate the right solution—website, web app, PWA, native app, or a complete digital ecosystem.",
      },
      {
        step: "03",
        title: "Design",
        description: "Craft a modern, high-converting visual experience.",
      },
      {
        step: "04",
        title: "Develop",
        description:
          "Build a fast, secure, and scalable digital product with care.",
      },
      {
        step: "05",
        title: "Launch",
        description: "Test thoroughly and launch with confidence.",
      },
      {
        step: "06",
        title: "Support",
        description: "Ongoing support so you keep growing online.",
      },
    ],
  },

  work: {
    eyebrow: "Recent Projects",
    title: "Results That Speak for Themselves.",
    description:
      "Every project is designed with strategy, creativity, and your goals in mind.",
    items: [
      {
        id: "real-estate-concept",
        title: "Maple Ridge Real Estate",
        category: "Real Estate",
        label: "Concept Project",
        description:
          "An elegant property-focused website concept built to showcase premium listings, build buyer trust, and convert visitors into qualified inquiries.",
        image: "/images/project-maple-ridge.jpg",
        services: [
          "Custom website design",
          "Property listing layouts",
          "Lead capture forms",
          "Local SEO foundation",
        ],
        features: [
          "Featured property showcase",
          "Clean inquiry and contact flows",
          "Mobile-first browsing experience",
          "Trust-building agent profiles",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "/contact?project=maple-ridge-real-estate",
      },
      {
        id: "cleaning-concept",
        title: "Pure Clean Services",
        category: "Cleaning",
        label: "Portfolio Sample",
        description:
          "A polished service website concept designed for trust, clarity, and easy booking — helping homeowners request cleaning services with confidence.",
        image: "/images/project-pure-clean.jpg",
        services: [
          "Service website design",
          "Booking request flow",
          "Brand messaging",
          "Google Business alignment",
        ],
        features: [
          "Clear service packages",
          "Simple quote request form",
          "Before-and-after visual storytelling",
          "Fast mobile load performance",
        ],
        technologies: ["Next.js", "React", "Tailwind CSS"],
        href: "/contact?project=pure-clean-services",
      },
      {
        id: "restaurant-concept",
        title: "Sunset Grill Restaurant",
        category: "Restaurants",
        label: "Concept Project",
        description:
          "A warm hospitality concept that captures atmosphere, highlights signature dishes, and guides guests toward reservations and visits.",
        image: "/images/project-sunset-grill.jpg",
        services: [
          "Restaurant website design",
          "Menu presentation",
          "Reservation pathway",
          "On-brand photography layout",
        ],
        features: [
          "Mood-driven hero and gallery",
          "Readable digital menu sections",
          "Reservation and contact CTAs",
          "Location and hours clarity",
        ],
        technologies: ["Next.js", "TypeScript", "Framer Motion"],
        href: "/contact?project=sunset-grill-restaurant",
      },
      {
        id: "auto-concept",
        title: "Elite Auto Works",
        category: "Automotive",
        label: "Portfolio Sample",
        description:
          "A high-performing auto shop concept that makes services easy to discover, builds credibility, and turns website visits into service appointments.",
        image: "/images/project-elite-auto.jpg",
        services: [
          "Automotive website design",
          "Service catalog layout",
          "Contact and estimate forms",
          "Local search optimization",
        ],
        features: [
          "Service categories with clear CTAs",
          "Shop credibility and trust signals",
          "Easy phone and estimate access",
          "Responsive service pages",
        ],
        technologies: ["Next.js", "Tailwind CSS", "SEO schema"],
        href: "/contact?project=elite-auto-works",
      },
      {
        id: "construction-concept",
        title: "Summit Construction Group",
        category: "Construction",
        label: "Concept Project",
        description:
          "A bold construction website concept built to showcase craftsmanship, highlight completed projects, and turn site visitors into qualified project inquiries.",
        image: "/images/project-summit-construction.jpg",
        services: [
          "Custom website design",
          "Project portfolio showcase",
          "Estimate request forms",
          "Local SEO for contractors",
        ],
        features: [
          "Featured project gallery",
          "Clear service and capability sections",
          "Strong trust and credibility signals",
          "Mobile-ready quote pathways",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "/contact?project=summit-construction-group",
      },
      {
        id: "law-firm-concept",
        title: "Anderson & Brooks Law",
        category: "Law Firm",
        label: "Portfolio Sample",
        description:
          "A refined law firm website concept designed to communicate authority, build client confidence, and guide visitors toward confidential consultations.",
        image: "/images/project-anderson-brooks-law.jpg",
        services: [
          "Professional website design",
          "Practice area presentation",
          "Consultation request flow",
          "Trust-focused brand messaging",
        ],
        features: [
          "Elegant attorney and firm presentation",
          "Clear practice area navigation",
          "Confidential contact pathways",
          "Polished mobile experience",
        ],
        technologies: ["Next.js", "React", "Tailwind CSS"],
        href: "/contact?project=anderson-brooks-law",
      },
    ],
  },

  cta: {
    title: "Ready to",
    titleEmphasis: "Elevate Your Business",
    titleSuffix: "Online?",
    description: "Let's build a website that works for you.",
    primaryCta: { label: "Get a Free Quote", href: "/contact" },
  },

  contactPage: {
    title: "Let's start your project",
    description:
      "Share a few details and we will follow up with a clear recommendation and free quote—whether you need a website, e-commerce, web application, PWA, mobile app, or something custom.",
    formTitle: "Send a message",
    formDescription: "Prefer email or phone? Both are available below.",
  },

  contactInterests: [
    { value: "Website", label: "Website" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Web Application", label: "Web Application" },
    { value: "Progressive Web App", label: "Progressive Web App" },
    { value: "Mobile App", label: "Mobile App" },
    { value: "AI Automation", label: "AI Automation" },
    { value: "Branding", label: "Branding" },
    { value: "SEO", label: "SEO" },
    { value: "Other", label: "Other" },
  ],
};

export default site;
