import type { IndustryCatalogItem, IndustryIconName } from "@/types";

type Seed = {
  id: string;
  title: string;
  slug: string;
  icon: IndustryIconName;
  shortDescription: string;
  challenges: string[];
  howWeHelp: string;
  websiteBenefits: string[];
  whenCustomWebApp: string;
  whenPwa: string;
  whenNativeApp: string;
  solutionExamples: IndustryCatalogItem["solutionExamples"];
  featureCards: IndustryCatalogItem["featureCards"];
};

function withDefaults(seed: Seed): IndustryCatalogItem {
  return {
    ...seed,
    techBenefits: [
      "Faster response times and fewer missed opportunities",
      "A more polished brand experience that builds trust",
      "Clearer workflows for customers, staff, and partners",
      "Better visibility, conversion, and long-term scalability",
      "Systems that grow with your business instead of holding it back",
    ],
    benefits: [
      {
        title: "Stronger first impressions",
        description:
          "A premium digital presence helps customers choose you with confidence before the first conversation.",
      },
      {
        title: "More qualified inquiries",
        description:
          "Clear messaging and conversion paths turn website traffic into leads that are ready to take the next step.",
      },
      {
        title: "Smoother operations",
        description:
          "Custom tools can reduce manual work, improve follow-up, and keep your team organized.",
      },
      {
        title: "Future-ready growth",
        description:
          "We design solutions that support today’s goals while leaving room for tomorrow’s expansion.",
      },
    ],
  };
}

export const industriesCatalog: IndustryCatalogItem[] = [
  withDefaults({
    id: "construction",
    title: "Construction",
    slug: "construction",
    icon: "hardhat",
    shortDescription:
      "Project-forward websites that showcase craftsmanship and convert visitors into estimate requests.",
    challenges: [
      "Competing with larger contractors who look more established online",
      "Difficulty showcasing past projects in a clear, persuasive way",
      "Slow or inconsistent follow-up on estimate requests",
      "Limited visibility in local search when homeowners need a builder",
    ],
    howWeHelp:
      "We design construction websites and digital systems that communicate capability, safety, and professionalism—then make it easy for the right clients to request estimates and start conversations.",
    websiteBenefits: [
      "A polished portfolio that proves your quality before the first call",
      "Clear service pages that help clients understand what you deliver",
      "Mobile-friendly lead capture for on-the-go homeowners and property managers",
      "Local SEO foundations that help your company get found in the right markets",
    ],
    whenCustomWebApp:
      "A custom web application is ideal when you need project portals, estimate workflows, document sharing, or internal tools that go beyond a standard marketing website.",
    whenPwa:
      "A Progressive Web App is a strong fit when field teams need fast access to schedules, project updates, or client communication without installing a native app.",
    whenNativeApp:
      "A native iOS or Android app makes sense for high-frequency field operations, offline job tracking, push notifications, or dedicated crew and client experiences.",
    solutionExamples: [
      {
        title: "Estimate request systems",
        description:
          "Structured forms and follow-up flows that capture project details and route leads to the right team member.",
      },
      {
        title: "Project galleries & case studies",
        description:
          "Elegant showcases that highlight craftsmanship, timelines, and outcomes for residential and commercial work.",
      },
      {
        title: "Client project portals",
        description:
          "Secure spaces for updates, selections, documents, and milestone communication.",
      },
      {
        title: "CRM & automation",
        description:
          "Lead routing, reminder sequences, and CRM integrations that keep opportunities from falling through.",
      },
    ],
    featureCards: [
      {
        title: "Capability-first branding",
        description:
          "Visual systems and messaging that make your company feel established, trustworthy, and ready to build.",
      },
      {
        title: "Lead-ready architecture",
        description:
          "Every key page is designed to guide visitors toward an estimate, consultation, or phone call.",
      },
      {
        title: "Operations-aware design",
        description:
          "We plan for how construction teams actually work—so the digital experience supports the business, not just the brand.",
      },
    ],
  }),
  withDefaults({
    id: "law-firms",
    title: "Law Firms",
    slug: "law-firms",
    icon: "scale",
    shortDescription:
      "Refined digital experiences that communicate authority, discretion, and client confidence.",
    challenges: [
      "Looking indistinguishable from competing firms online",
      "Difficulty explaining practice areas in clear, client-friendly language",
      "Missed consultation opportunities due to weak conversion paths",
      "Balancing professionalism with approachability and trust",
    ],
    howWeHelp:
      "We create polished websites and secure digital tools that elevate your firm’s presence, clarify your expertise, and guide prospective clients toward confidential consultations.",
    websiteBenefits: [
      "A premium brand presentation that signals credibility immediately",
      "Practice-area pages that educate clients and reduce friction",
      "Clear consultation pathways that respect privacy and professionalism",
      "Stronger local and practice-area visibility for people seeking counsel",
    ],
    whenCustomWebApp:
      "A custom web application is ideal for client intake portals, secure document exchange, case-status dashboards, or internal matter workflows.",
    whenPwa:
      "A PWA works well when attorneys or clients need fast, secure access to updates and forms across devices without a full app store release.",
    whenNativeApp:
      "Native apps are best for high-touch client communication, push notifications for deadlines, or firm-specific tools used daily by staff and clients.",
    solutionExamples: [
      {
        title: "Consultation booking",
        description:
          "Elegant scheduling experiences that make it easy to request a confidential conversation.",
      },
      {
        title: "Secure client portals",
        description:
          "Private spaces for documents, updates, and communication that protect sensitive information.",
      },
      {
        title: "Intake & qualification forms",
        description:
          "Thoughtful questionnaires that gather the right details before the first meeting.",
      },
      {
        title: "CRM integrations",
        description:
          "Connected workflows that keep new inquiries organized and follow-up consistent.",
      },
    ],
    featureCards: [
      {
        title: "Authority with elegance",
        description:
          "Design systems that feel premium, calm, and trustworthy without becoming cold or generic.",
      },
      {
        title: "Clarity for complex services",
        description:
          "We translate legal expertise into clear pathways clients can understand and act on.",
      },
      {
        title: "Privacy-conscious experiences",
        description:
          "Every interaction is planned with discretion, professionalism, and conversion in mind.",
      },
    ],
  }),
  withDefaults({
    id: "cleaning",
    title: "Cleaning Services",
    slug: "cleaning-services",
    icon: "sparkles",
    shortDescription:
      "Clean, trustworthy websites that make booking and quote requests effortless.",
    challenges: [
      "Standing out in a crowded local market",
      "Building trust quickly with first-time customers",
      "Complicated or slow booking processes",
      "Inconsistent inquiry follow-up across phone, text, and web",
    ],
    howWeHelp:
      "We design cleaning-service websites and booking systems that feel fresh, reliable, and easy to use—so customers can understand your offerings and request service with confidence.",
    websiteBenefits: [
      "Clear packages and service options that reduce back-and-forth",
      "Trust signals that help new customers feel comfortable booking",
      "Fast mobile experiences for on-the-spot quote requests",
      "Better local discoverability when people search for cleaning help",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for recurring service scheduling, customer accounts, technician routing, or quoting tools tailored to your operations.",
    whenPwa:
      "A PWA is a strong option for customers and staff who need quick booking or job updates from any device with near-app speed.",
    whenNativeApp:
      "Native apps make sense for high-frequency recurring clients, push reminders, or dedicated technician apps used throughout the day.",
    solutionExamples: [
      {
        title: "Online booking systems",
        description:
          "Simple scheduling flows for one-time cleans, recurring plans, and special services.",
      },
      {
        title: "Quote calculators",
        description:
          "Guided estimating tools that capture property details and set expectations early.",
      },
      {
        title: "Customer portals",
        description:
          "Account areas for upcoming appointments, preferences, and billing clarity.",
      },
      {
        title: "Team dashboards",
        description:
          "Internal tools for schedules, checklists, and job completion tracking.",
      },
    ],
    featureCards: [
      {
        title: "Trust-first presentation",
        description:
          "Clean visuals and messaging that make reliability and professionalism obvious.",
      },
      {
        title: "Frictionless booking",
        description:
          "Conversion paths designed for busy homeowners and commercial clients.",
      },
      {
        title: "Recurring-revenue ready",
        description:
          "Experiences that support one-time jobs and long-term service relationships.",
      },
    ],
  }),
  withDefaults({
    id: "automotive",
    title: "Automotive",
    slug: "automotive",
    icon: "car",
    shortDescription:
      "High-performance shop websites that make services discoverable and appointments easy.",
    challenges: [
      "Customers struggling to understand which services you offer",
      "Lost appointments due to slow response times",
      "Looking less modern than competing shops online",
      "Difficulty converting search traffic into service bookings",
    ],
    howWeHelp:
      "We build automotive websites and digital tools that clarify your services, build credibility, and turn website visits into service appointments and estimate requests.",
    websiteBenefits: [
      "Service catalogs that are easy to browse and act on",
      "Strong trust cues for quality, expertise, and reliability",
      "Fast contact and appointment pathways on every device",
      "Local search visibility when drivers need help nearby",
    ],
    whenCustomWebApp:
      "A custom web application fits shops that need service history portals, estimate approvals, parts tracking, or internal bay scheduling tools.",
    whenPwa:
      "A PWA is useful for customers checking status updates or for teams accessing schedules quickly without installing software.",
    whenNativeApp:
      "Native apps are ideal for loyalty programs, push appointment reminders, or technician tools requiring offline access and device features.",
    solutionExamples: [
      {
        title: "Service menus & packages",
        description:
          "Clear presentations of maintenance, diagnostics, and specialty work with strong CTAs.",
      },
      {
        title: "Appointment booking",
        description:
          "Streamlined scheduling that captures vehicle details and preferred times.",
      },
      {
        title: "Estimate & approval flows",
        description:
          "Digital estimate review experiences that reduce phone tag and speed up approvals.",
      },
      {
        title: "Customer reminders",
        description:
          "Automated follow-ups for maintenance intervals, reviews, and return visits.",
      },
    ],
    featureCards: [
      {
        title: "Credibility at a glance",
        description:
          "Design that feels precise, modern, and mechanically confident.",
      },
      {
        title: "Service clarity",
        description:
          "Customers instantly understand what you do and how to get started.",
      },
      {
        title: "Appointment-driven UX",
        description:
          "Every key interaction is shaped around getting the next service booked.",
      },
    ],
  }),
  withDefaults({
    id: "restaurants",
    title: "Restaurants",
    slug: "restaurants",
    icon: "utensils",
    shortDescription:
      "Atmosphere-driven restaurant websites that highlight menus and drive reservations.",
    challenges: [
      "Menus and photos that fail to capture the dining experience",
      "Missed reservations due to outdated or confusing websites",
      "Weak online ordering or catering inquiry pathways",
      "Inconsistent branding across Google, social, and the website",
    ],
    howWeHelp:
      "We craft restaurant websites and digital systems that showcase atmosphere, make menus easy to explore, and guide guests toward reservations, ordering, and visits.",
    websiteBenefits: [
      "A visual story that makes guests want to dine with you",
      "Readable menus and clear calls to action",
      "Reservation and contact pathways that reduce friction",
      "A cohesive brand presence across devices and platforms",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for online ordering, loyalty programs, catering portals, or staff tools that connect kitchen, front-of-house, and guests.",
    whenPwa:
      "A PWA can deliver app-like ordering or loyalty experiences without requiring guests to download anything from an app store.",
    whenNativeApp:
      "Native apps make sense for high-frequency guests, push offers, table waitlists, or branded loyalty programs with deep engagement.",
    solutionExamples: [
      {
        title: "Reservation systems",
        description:
          "Elegant booking experiences that capture party size, timing, and special requests.",
      },
      {
        title: "Online ordering",
        description:
          "Custom ordering flows designed around your menu, modifiers, and fulfillment process.",
      },
      {
        title: "Catering portals",
        description:
          "Dedicated pathways for events, corporate orders, and larger group requests.",
      },
      {
        title: "Guest CRM & automation",
        description:
          "Follow-up sequences for reviews, return visits, and seasonal promotions.",
      },
    ],
    featureCards: [
      {
        title: "Mood and appetite",
        description:
          "Design that captures the feeling of your restaurant before the first bite.",
      },
      {
        title: "Menu clarity",
        description:
          "Beautiful presentation without sacrificing readability or conversion.",
      },
      {
        title: "Guest-ready actions",
        description:
          "Reserve, order, or inquire—always one clear step away.",
      },
    ],
  }),
  withDefaults({
    id: "real-estate",
    title: "Real Estate",
    slug: "real-estate",
    icon: "home",
    shortDescription:
      "Elegant property-focused experiences that build trust and capture qualified inquiries.",
    challenges: [
      "Listings and agent profiles that feel outdated or generic",
      "Difficulty converting browsers into serious inquiries",
      "Fragmented tools for showings, leads, and follow-up",
      "Standing out in competitive local markets",
    ],
    howWeHelp:
      "We design real estate websites and lead systems that present properties beautifully, elevate your brand, and help serious buyers and sellers take the next step.",
    websiteBenefits: [
      "Premium presentation for listings, neighborhoods, and expertise",
      "Clear inquiry paths for buyers, sellers, and investors",
      "Mobile experiences designed for on-the-go property browsing",
      "Stronger local authority and brand recognition",
    ],
    whenCustomWebApp:
      "A custom web application is ideal for listing portals, saved searches, agent dashboards, or lead-nurture workflows tailored to your brokerage.",
    whenPwa:
      "A PWA works well for clients who want fast property browsing and alerts without installing a native app.",
    whenNativeApp:
      "Native apps are useful for push listing alerts, showing schedules, or high-engagement client tools used repeatedly throughout a search.",
    solutionExamples: [
      {
        title: "Property showcases",
        description:
          "High-end listing layouts with galleries, details, and strong inquiry CTAs.",
      },
      {
        title: "Lead capture & CRM",
        description:
          "Connected inquiry flows that keep buyer and seller opportunities organized.",
      },
      {
        title: "Client portals",
        description:
          "Saved homes, documents, and communication in one polished experience.",
      },
      {
        title: "Showing coordination tools",
        description:
          "Digital workflows that streamline scheduling and follow-up for agents and clients.",
      },
    ],
    featureCards: [
      {
        title: "Luxury presentation",
        description:
          "Visual systems that make every property and profile feel elevated.",
      },
      {
        title: "Inquiry-focused UX",
        description:
          "Every browsing path leads toward a meaningful conversation.",
      },
      {
        title: "Market-ready scalability",
        description:
          "Built to support growing inventories, teams, and lead volume.",
      },
    ],
  }),
  withDefaults({
    id: "medical",
    title: "Medical & Clinics",
    slug: "medical-clinics",
    icon: "heartPulse",
    shortDescription:
      "Calm, professional clinic websites that build trust and simplify appointment requests.",
    challenges: [
      "Patients struggling to understand services and next steps",
      "Outdated websites that undermine clinical credibility",
      "Appointment requests lost across phone and email",
      "Balancing warmth with professionalism and compliance-minded UX",
    ],
    howWeHelp:
      "We create medical and clinic websites that feel reassuring and modern—helping patients understand care options and request appointments with clarity and confidence.",
    websiteBenefits: [
      "A trustworthy digital first impression for new patients",
      "Clear service and provider information",
      "Simple appointment and contact pathways",
      "Better local visibility for people searching for care",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for patient intake, portal experiences, internal dashboards, or workflow tools that connect front desk and clinical teams.",
    whenPwa:
      "A PWA can support appointment access, forms, and updates with fast performance across devices.",
    whenNativeApp:
      "Native apps are a fit for practices that need push reminders, frequent patient engagement, or dedicated care-management experiences.",
    solutionExamples: [
      {
        title: "Appointment request systems",
        description:
          "Guided booking pathways that collect the right details before confirmation.",
      },
      {
        title: "Patient intake forms",
        description:
          "Digital intake experiences that reduce paperwork and improve preparation.",
      },
      {
        title: "Provider directories",
        description:
          "Clear profiles that help patients choose the right clinician with confidence.",
      },
      {
        title: "Internal clinic tools",
        description:
          "Custom dashboards and automations that support operations and follow-up.",
      },
    ],
    featureCards: [
      {
        title: "Reassuring design",
        description:
          "Calm typography, clarity, and structure that put patients at ease.",
      },
      {
        title: "Care pathway clarity",
        description:
          "Patients quickly understand services, providers, and how to take the next step.",
      },
      {
        title: "Operations-aware UX",
        description:
          "Digital experiences planned around real clinic workflows and staff needs.",
      },
    ],
  }),
  withDefaults({
    id: "beauty",
    title: "Beauty & Salons",
    slug: "beauty-salons",
    icon: "scissors",
    shortDescription:
      "Stylish salon websites that showcase your craft and fill the appointment book.",
    challenges: [
      "Visual work that doesn’t look as premium online as it does in person",
      "Booking friction that causes clients to choose a competitor",
      "Inconsistent branding across social media and the website",
      "Limited ability to promote packages, memberships, or retail",
    ],
    howWeHelp:
      "We design beauty and salon websites that feel elevated and bookable—highlighting your style while making appointments, packages, and inquiries effortless.",
    websiteBenefits: [
      "A brand experience that matches the quality of your work",
      "Galleries and service menus that inspire bookings",
      "Clear appointment and consultation pathways",
      "Stronger discovery for local clients searching online",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for memberships, client profiles, stylist schedules, retail ordering, or loyalty programs tailored to your salon.",
    whenPwa:
      "A PWA is excellent for repeat clients who want fast booking and updates without downloading a native app.",
    whenNativeApp:
      "Native apps suit high-frequency salons that want push reminders, loyalty rewards, or dedicated client experiences.",
    solutionExamples: [
      {
        title: "Online booking",
        description:
          "Beautiful scheduling flows for services, stylists, and preferred times.",
      },
      {
        title: "Service & package pages",
        description:
          "Clear presentations of offerings, pricing structure, and add-ons.",
      },
      {
        title: "Client loyalty tools",
        description:
          "Memberships, rewards, and return-visit incentives that keep chairs full.",
      },
      {
        title: "Staff dashboards",
        description:
          "Internal tools for schedules, notes, and day-of operations.",
      },
    ],
    featureCards: [
      {
        title: "Aesthetic precision",
        description:
          "Design that feels as refined as your best work in the chair or suite.",
      },
      {
        title: "Booking-first journeys",
        description:
          "Inspiration quickly turns into an appointment request.",
      },
      {
        title: "Brand consistency",
        description:
          "A cohesive look across web, social, and in-studio experiences.",
      },
    ],
  }),
  withDefaults({
    id: "roofing",
    title: "Roofing",
    slug: "roofing",
    icon: "layers",
    shortDescription:
      "Credible roofing websites that win inspections, repairs, and replacement projects.",
    challenges: [
      "Homeowners struggling to trust unfamiliar roofing companies",
      "Emergency and storm-lead opportunities missed after hours",
      "Weak project proof and before/after storytelling",
      "Generic websites that fail to communicate quality and warranties",
    ],
    howWeHelp:
      "We build roofing websites and lead systems that establish trust quickly, showcase completed work, and make it easy for homeowners to request inspections or estimates.",
    websiteBenefits: [
      "Clear proof of quality through projects and reviews",
      "Fast estimate and inspection request pathways",
      "Storm and emergency messaging that converts under urgency",
      "Stronger local search presence when roofs need attention",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for inspection reports, photo documentation, estimate approvals, or crew scheduling tools.",
    whenPwa:
      "A PWA helps field teams and homeowners access updates and forms quickly across devices.",
    whenNativeApp:
      "Native apps can support push storm alerts, field documentation, or high-frequency crew workflows.",
    solutionExamples: [
      {
        title: "Inspection request flows",
        description:
          "Guided forms that capture roof concerns, property details, and urgency.",
      },
      {
        title: "Project galleries",
        description:
          "Before-and-after showcases that prove craftsmanship and materials expertise.",
      },
      {
        title: "Estimate approval portals",
        description:
          "Digital review experiences that help homeowners move from quote to decision.",
      },
      {
        title: "CRM automation",
        description:
          "Lead routing and follow-up sequences for storm and replacement opportunities.",
      },
    ],
    featureCards: [
      {
        title: "Trust under pressure",
        description:
          "Design and messaging that reassure homeowners when decisions feel urgent.",
      },
      {
        title: "Proof-driven storytelling",
        description:
          "Project visuals and process clarity that reduce skepticism.",
      },
      {
        title: "Lead capture that works",
        description:
          "Conversion paths built for both planned replacements and emergency needs.",
      },
    ],
  }),
  withDefaults({
    id: "hvac",
    title: "HVAC",
    slug: "hvac",
    icon: "thermometer",
    shortDescription:
      "Reliable HVAC websites that generate service calls, maintenance plans, and installs.",
    challenges: [
      "Seasonal demand spikes that overwhelm phone lines",
      "Difficulty explaining service plans and system options",
      "Competitors ranking higher for urgent local searches",
      "Missed maintenance renewals and follow-up opportunities",
    ],
    howWeHelp:
      "We create HVAC websites and digital systems that make services clear, capture urgent and planned demand, and support maintenance relationships over time.",
    websiteBenefits: [
      "Clear service and system pages for residential and commercial clients",
      "Fast pathways for repairs, tune-ups, and installations",
      "Membership and maintenance plan visibility",
      "Stronger local discoverability during peak seasons",
    ],
    whenCustomWebApp:
      "A custom web app fits dispatch tools, membership portals, technician schedules, or customer service histories.",
    whenPwa:
      "A PWA is useful for customers managing memberships or for teams accessing job details quickly in the field.",
    whenNativeApp:
      "Native apps make sense for technician routing, offline diagnostics notes, or push appointment reminders.",
    solutionExamples: [
      {
        title: "Service booking",
        description:
          "Repair and maintenance request flows designed for urgency and clarity.",
      },
      {
        title: "Membership portals",
        description:
          "Customer areas for plan details, visit history, and renewals.",
      },
      {
        title: "Technician dashboards",
        description:
          "Internal tools that keep schedules, notes, and job status organized.",
      },
      {
        title: "Seasonal automation",
        description:
          "Campaign and reminder systems that keep tune-ups and filter changes on track.",
      },
    ],
    featureCards: [
      {
        title: "Clarity in complex services",
        description:
          "Homeowners understand options without feeling overwhelmed.",
      },
      {
        title: "Urgency-ready conversion",
        description:
          "Fast contact paths for no-heat and no-cool emergencies.",
      },
      {
        title: "Retention built in",
        description:
          "Experiences that support maintenance plans—not just one-time calls.",
      },
    ],
  }),
  withDefaults({
    id: "plumbing",
    title: "Plumbing",
    slug: "plumbing",
    icon: "droplets",
    shortDescription:
      "Dependable plumbing websites that turn urgent searches into booked service calls.",
    challenges: [
      "Emergency customers needing immediate trust and contact options",
      "Service menus that feel unclear or incomplete",
      "Lost leads when phones are busy during peak hours",
      "Weak differentiation from other local plumbers online",
    ],
    howWeHelp:
      "We design plumbing websites and booking tools that communicate reliability, clarify services, and make it easy for customers to request help—especially when the need is urgent.",
    websiteBenefits: [
      "Immediate trust cues and clear emergency contact paths",
      "Service pages that answer common customer questions",
      "Mobile-first request forms for fast lead capture",
      "Improved local search visibility for high-intent queries",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for dispatch, job tracking, customer history, or estimate workflows tailored to your plumbing operations.",
    whenPwa:
      "A PWA helps customers and technicians access status and forms quickly without an app-store install.",
    whenNativeApp:
      "Native apps suit teams that need push dispatch alerts, offline notes, or high-frequency field tools.",
    solutionExamples: [
      {
        title: "Emergency request flows",
        description:
          "Prominent, simple pathways for urgent plumbing issues day or night.",
      },
      {
        title: "Service catalogs",
        description:
          "Clear coverage of repairs, installs, and preventive services.",
      },
      {
        title: "Estimate & scheduling tools",
        description:
          "Digital systems that reduce phone tag and speed up bookings.",
      },
      {
        title: "Customer follow-up automation",
        description:
          "Reminders, reviews, and maintenance outreach after completed jobs.",
      },
    ],
    featureCards: [
      {
        title: "Reliability signal",
        description:
          "Design that instantly communicates competence and responsiveness.",
      },
      {
        title: "Urgent and planned paths",
        description:
          "Separate journeys for emergencies and scheduled work—both conversion-ready.",
      },
      {
        title: "Local lead focus",
        description:
          "Built to capture high-intent searches in your service area.",
      },
    ],
  }),
  withDefaults({
    id: "electrical",
    title: "Electrical",
    slug: "electrical",
    icon: "zap",
    shortDescription:
      "Professional electrical contractor websites that win service and project work.",
    challenges: [
      "Safety and licensing credibility that isn’t clear online",
      "Complex residential and commercial services hard to navigate",
      "Slow quoting processes for upgrades and installations",
      "Competitors capturing local search demand first",
    ],
    howWeHelp:
      "We build electrical contractor websites and digital tools that emphasize safety, expertise, and clarity—helping homeowners and businesses request the right service with confidence.",
    websiteBenefits: [
      "Clear presentation of residential and commercial capabilities",
      "Trust signals around licensing, safety, and professionalism",
      "Streamlined quote and service request pathways",
      "Stronger visibility for high-intent electrical searches",
    ],
    whenCustomWebApp:
      "A custom web app fits project quoting, inspection checklists, client portals, or internal job management systems.",
    whenPwa:
      "A PWA can give field teams and clients fast access to updates, forms, and documentation.",
    whenNativeApp:
      "Native apps are useful for technician workflows, push job alerts, or offline documentation needs.",
    solutionExamples: [
      {
        title: "Service & project request forms",
        description:
          "Structured intake for repairs, panel upgrades, EV chargers, and commercial work.",
      },
      {
        title: "Quote workflows",
        description:
          "Digital estimating experiences that keep opportunities moving.",
      },
      {
        title: "Project documentation portals",
        description:
          "Shared spaces for scopes, photos, and approvals.",
      },
      {
        title: "CRM integrations",
        description:
          "Connected follow-up for residential and commercial pipelines.",
      },
    ],
    featureCards: [
      {
        title: "Safety-forward branding",
        description:
          "Visual and verbal cues that reinforce professionalism and trust.",
      },
      {
        title: "Service navigation that converts",
        description:
          "Customers find the right offering without confusion.",
      },
      {
        title: "Project-ready structure",
        description:
          "Designed for both quick service calls and larger installs.",
      },
    ],
  }),
  withDefaults({
    id: "landscaping",
    title: "Landscaping",
    slug: "landscaping",
    icon: "tree",
    shortDescription:
      "Outdoor-living websites that showcase design work and generate project inquiries.",
    challenges: [
      "Beautiful work that isn’t presented persuasively online",
      "Seasonal inquiry surges without strong conversion systems",
      "Difficulty explaining design, maintenance, and install packages",
      "Leads lost between Instagram interest and actual bookings",
    ],
    howWeHelp:
      "We create landscaping websites and lead systems that elevate your outdoor portfolio, clarify offerings, and convert inspiration into consultations and project requests.",
    websiteBenefits: [
      "Gallery-driven storytelling that sells your aesthetic",
      "Clear pathways for design consults and maintenance plans",
      "Seasonal campaign readiness for peak demand",
      "A brand presence that feels as refined as your finished landscapes",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for project portals, maintenance scheduling, proposal approvals, or client selection workflows.",
    whenPwa:
      "A PWA helps clients browse portfolios and request services quickly on any device.",
    whenNativeApp:
      "Native apps can support crew routing, photo documentation, or high-engagement maintenance clients.",
    solutionExamples: [
      {
        title: "Portfolio showcases",
        description:
          "Curated project stories that highlight design, materials, and transformation.",
      },
      {
        title: "Consultation booking",
        description:
          "Elegant inquiry flows for design visits and estimate requests.",
      },
      {
        title: "Maintenance plan systems",
        description:
          "Recurring service pathways that keep properties looking premium year-round.",
      },
      {
        title: "Proposal portals",
        description:
          "Digital review and approval experiences for landscape packages.",
      },
    ],
    featureCards: [
      {
        title: "Visual storytelling",
        description:
          "Layouts that let craftsmanship and atmosphere do the selling.",
      },
      {
        title: "Offer clarity",
        description:
          "Design, install, and maintenance paths that feel simple to choose.",
      },
      {
        title: "Seasonal conversion",
        description:
          "Built to capture inspiration and urgency when outdoor projects peak.",
      },
    ],
  }),
  withDefaults({
    id: "dentists",
    title: "Dentists",
    slug: "dentists",
    icon: "smile",
    shortDescription:
      "Welcoming dental websites that reduce anxiety and drive new-patient appointments.",
    challenges: [
      "Patients feeling uncertain or anxious before booking",
      "Service pages that don’t explain treatments clearly",
      "Appointment requests lost to outdated contact methods",
      "Competing practices looking more modern online",
    ],
    howWeHelp:
      "We design dental websites and appointment systems that feel calm, credible, and inviting—helping new patients understand care options and book with confidence.",
    websiteBenefits: [
      "A reassuring brand experience that lowers booking hesitation",
      "Clear treatment and provider information",
      "Simple new-patient and appointment request flows",
      "Stronger local visibility for people searching for a dentist",
    ],
    whenCustomWebApp:
      "A custom web app fits patient portals, intake forms, treatment plan presentations, or internal clinic dashboards.",
    whenPwa:
      "A PWA can support appointment access and forms with fast, app-like convenience.",
    whenNativeApp:
      "Native apps are useful for reminder notifications, loyalty/recall programs, or frequent patient engagement.",
    solutionExamples: [
      {
        title: "New-patient onboarding",
        description:
          "Warm, clear pathways that collect essentials before the first visit.",
      },
      {
        title: "Appointment requests",
        description:
          "Booking experiences designed for both urgent needs and routine care.",
      },
      {
        title: "Treatment education pages",
        description:
          "Approachable explanations that prepare patients and build trust.",
      },
      {
        title: "Recall automation",
        description:
          "Reminder systems that support hygiene visits and ongoing care.",
      },
    ],
    featureCards: [
      {
        title: "Calm confidence",
        description:
          "Design that feels clean, modern, and emotionally reassuring.",
      },
      {
        title: "Care made understandable",
        description:
          "Treatments and next steps presented without clinical overwhelm.",
      },
      {
        title: "Appointment-first UX",
        description:
          "Every page supports the decision to book.",
      },
    ],
  }),
  withDefaults({
    id: "veterinary",
    title: "Veterinary Clinics",
    slug: "veterinary-clinics",
    icon: "paw",
    shortDescription:
      "Compassionate veterinary websites that help pet owners find care and book visits.",
    challenges: [
      "Pet owners needing fast answers during stressful moments",
      "Services and specialties that are hard to navigate online",
      "Appointment demand that overwhelms front-desk capacity",
      "Brand experiences that feel generic rather than caring",
    ],
    howWeHelp:
      "We create veterinary clinic websites and digital tools that feel warm and professional—helping pet owners understand services and request appointments or urgent guidance more easily.",
    websiteBenefits: [
      "A caring digital first impression for pet families",
      "Clear service, specialty, and team information",
      "Appointment and contact pathways that reduce phone pressure",
      "Better local discovery for new and transferring clients",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for patient records portals, refill requests, boarding reservations, or staff scheduling tools.",
    whenPwa:
      "A PWA offers quick access to appointments, forms, and updates across phones and tablets.",
    whenNativeApp:
      "Native apps suit clinics that want push reminders, vaccine alerts, or high-frequency client engagement.",
    solutionExamples: [
      {
        title: "Appointment booking",
        description:
          "Pet-owner friendly scheduling for wellness, sick visits, and follow-ups.",
      },
      {
        title: "Client portals",
        description:
          "Spaces for records, reminders, and communication that keep care organized.",
      },
      {
        title: "Boarding & service requests",
        description:
          "Dedicated flows for add-on services beyond standard appointments.",
      },
      {
        title: "Internal clinic dashboards",
        description:
          "Tools that support operations, staffing, and client follow-up.",
      },
    ],
    featureCards: [
      {
        title: "Warm professionalism",
        description:
          "Design that balances compassion with clinical credibility.",
      },
      {
        title: "Stress-aware journeys",
        description:
          "Clear next steps when pet owners need help quickly.",
      },
      {
        title: "Care continuity",
        description:
          "Experiences that support relationships across a pet’s lifetime.",
      },
    ],
  }),
  withDefaults({
    id: "gyms",
    title: "Gyms & Fitness",
    slug: "gyms-fitness",
    icon: "dumbbell",
    shortDescription:
      "Energetic fitness websites that convert visitors into members and class bookings.",
    challenges: [
      "Prospective members needing motivation and clarity before joining",
      "Class schedules and membership options that feel confusing",
      "Drop-off between social interest and actual sign-ups",
      "Limited tools for onboarding, retention, and community",
    ],
    howWeHelp:
      "We design gym and fitness websites that feel motivating and modern—making memberships, classes, and trials easy to understand and act on.",
    websiteBenefits: [
      "A brand experience that sells energy, results, and community",
      "Clear membership and class pathways",
      "Trial and signup conversion built into every key page",
      "Stronger local discovery for people ready to train",
    ],
    whenCustomWebApp:
      "A custom web app fits member portals, class booking, trainer dashboards, or billing and attendance tools.",
    whenPwa:
      "A PWA is excellent for class schedules and check-ins with app-like speed and no store download.",
    whenNativeApp:
      "Native apps are ideal for push class reminders, workouts, access control, or high-engagement member communities.",
    solutionExamples: [
      {
        title: "Membership signup flows",
        description:
          "Conversion-focused journeys for trials, plans, and onboarding.",
      },
      {
        title: "Class booking systems",
        description:
          "Schedules and reservations that keep studios and floors full.",
      },
      {
        title: "Member portals",
        description:
          "Accounts for billing, bookings, and progress communication.",
      },
      {
        title: "Trainer & admin dashboards",
        description:
          "Internal tools that support operations and member success.",
      },
    ],
    featureCards: [
      {
        title: "Motivation in the interface",
        description:
          "Design that feels strong, clean, and ready for action.",
      },
      {
        title: "Offer simplicity",
        description:
          "Memberships and classes presented without decision fatigue.",
      },
      {
        title: "Retention-ready systems",
        description:
          "Built for acquisition and long-term member engagement.",
      },
    ],
  }),
  withDefaults({
    id: "hotels",
    title: "Hotels",
    slug: "hotels",
    icon: "hotel",
    shortDescription:
      "Hospitality websites that elevate brand presence and drive direct bookings.",
    challenges: [
      "Over-reliance on OTAs that reduce margins and brand control",
      "Websites that fail to convey atmosphere and service quality",
      "Booking experiences that feel outdated or confusing",
      "Missed opportunities for packages, events, and upsells",
    ],
    howWeHelp:
      "We create hotel websites and booking experiences that feel luxurious and effortless—encouraging guests to book direct while showcasing the full property story.",
    websiteBenefits: [
      "A refined digital presentation of rooms, amenities, and location",
      "Clearer direct-booking pathways that reduce OTA dependency",
      "Package and experience storytelling that increases average value",
      "A brand presence worthy of premium hospitality",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for booking engines, guest portals, concierge tools, or staff operations dashboards.",
    whenPwa:
      "A PWA can deliver fast booking and guest services without requiring travelers to install an app first.",
    whenNativeApp:
      "Native apps suit properties that want digital keys, push offers, loyalty programs, or on-property guest experiences.",
    solutionExamples: [
      {
        title: "Direct booking experiences",
        description:
          "Elegant reservation flows designed to convert and upsell.",
      },
      {
        title: "Package & event pages",
        description:
          "Persuasive presentations for stays, celebrations, and corporate travel.",
      },
      {
        title: "Guest portals",
        description:
          "Pre-arrival and in-stay experiences for preferences and requests.",
      },
      {
        title: "CRM & loyalty automation",
        description:
          "Systems that encourage repeat stays and personalized offers.",
      },
    ],
    featureCards: [
      {
        title: "Atmosphere first",
        description:
          "Design that sells the feeling of the stay before the reservation.",
      },
      {
        title: "Direct-booking clarity",
        description:
          "Frictionless paths that make booking with you the easy choice.",
      },
      {
        title: "Revenue-minded UX",
        description:
          "Experiences planned for rooms, packages, and ancillary value.",
      },
    ],
  }),
  withDefaults({
    id: "vacation-rentals",
    title: "Vacation Rentals",
    slug: "vacation-rentals",
    icon: "key",
    shortDescription:
      "Stay-ready rental websites that convert browsers into direct bookings.",
    challenges: [
      "Dependence on booking platforms that take significant fees",
      "Property storytelling that doesn’t match the real guest experience",
      "Complicated inquiry and availability communication",
      "Difficulty managing multiple properties with one brand presence",
    ],
    howWeHelp:
      "We design vacation rental websites and booking systems that showcase each property beautifully and make direct reservations feel simple, trustworthy, and premium.",
    websiteBenefits: [
      "Compelling property pages that drive booking confidence",
      "Direct reservation pathways that protect margins",
      "Clear house rules, amenities, and location storytelling",
      "A unified brand for one home or an entire portfolio",
    ],
    whenCustomWebApp:
      "A custom web app fits multi-property booking, owner portals, cleaning schedules, or guest communication tools.",
    whenPwa:
      "A PWA is ideal for travelers checking availability and booking quickly on mobile.",
    whenNativeApp:
      "Native apps can support guest guides, lock codes, upsells, or owner management for larger portfolios.",
    solutionExamples: [
      {
        title: "Direct booking calendars",
        description:
          "Availability and reservation flows tailored to your properties.",
      },
      {
        title: "Property showcase pages",
        description:
          "Immersive galleries and details that sell the stay experience.",
      },
      {
        title: "Guest communication tools",
        description:
          "Pre-arrival messaging, guides, and support pathways.",
      },
      {
        title: "Operations dashboards",
        description:
          "Internal tools for turnovers, cleaning, and owner reporting.",
      },
    ],
    featureCards: [
      {
        title: "Stay storytelling",
        description:
          "Every property feels distinctive, inviting, and bookable.",
      },
      {
        title: "Direct-channel growth",
        description:
          "Experiences designed to win reservations beyond marketplaces.",
      },
      {
        title: "Portfolio scalability",
        description:
          "Structures that work for a single home or many listings.",
      },
    ],
  }),
  withDefaults({
    id: "accounting",
    title: "Accounting & Tax Services",
    slug: "accounting-tax",
    icon: "calculator",
    shortDescription:
      "Precise, professional firm websites that attract clients and streamline intake.",
    challenges: [
      "Looking interchangeable with other local firms online",
      "Complex services that are hard for prospects to navigate",
      "Seasonal inquiry surges without strong intake systems",
      "Security and professionalism concerns affecting trust",
    ],
    howWeHelp:
      "We build accounting and tax websites that feel precise and premium—clarifying your services and guiding prospects toward consultations and client onboarding.",
    websiteBenefits: [
      "A credible brand presence for individuals and businesses",
      "Clear service pathways for tax, bookkeeping, and advisory work",
      "Streamlined consultation and document intake options",
      "Stronger visibility during peak planning and filing seasons",
    ],
    whenCustomWebApp:
      "A custom web app is ideal for client portals, secure uploads, engagement letters, or internal practice workflows.",
    whenPwa:
      "A PWA can provide fast portal access and forms across devices with strong convenience.",
    whenNativeApp:
      "Native apps may fit firms that want push filing reminders or dedicated client communication tools.",
    solutionExamples: [
      {
        title: "Client intake portals",
        description:
          "Secure onboarding experiences that collect documents and essentials efficiently.",
      },
      {
        title: "Consultation booking",
        description:
          "Professional scheduling for discovery calls and planning meetings.",
      },
      {
        title: "Secure document exchange",
        description:
          "Private upload and sharing workflows that reinforce trust.",
      },
      {
        title: "Practice automation",
        description:
          "Reminders, CRM sync, and internal tools that reduce seasonal chaos.",
      },
    ],
    featureCards: [
      {
        title: "Precision branding",
        description:
          "Design that signals accuracy, discretion, and modern expertise.",
      },
      {
        title: "Service clarity",
        description:
          "Prospects quickly understand how you can help—and what to do next.",
      },
      {
        title: "Season-ready systems",
        description:
          "Built for calm intake even when demand spikes.",
      },
    ],
  }),
  withDefaults({
    id: "insurance",
    title: "Insurance Agencies",
    slug: "insurance-agencies",
    icon: "shield",
    shortDescription:
      "Trust-centered agency websites that generate quotes and policy conversations.",
    challenges: [
      "Prospects comparing agencies with little brand differentiation",
      "Quote requests that lack enough detail for efficient follow-up",
      "Complex coverage options that overwhelm visitors",
      "Missed opportunities from weak local search and conversion paths",
    ],
    howWeHelp:
      "We design insurance agency websites and quote systems that build trust quickly, explain coverage clearly, and convert visitors into meaningful conversations with your team.",
    websiteBenefits: [
      "A trustworthy brand presence for personal and commercial lines",
      "Clear coverage pathways without overwhelming jargon",
      "Quote and consultation requests that capture useful details",
      "Stronger local visibility when people are ready to switch or buy",
    ],
    whenCustomWebApp:
      "A custom web app fits quote engines, client portals, claims guidance tools, or agent dashboards connected to your CRM.",
    whenPwa:
      "A PWA is useful for clients checking policy resources or submitting requests quickly on mobile.",
    whenNativeApp:
      "Native apps can support push renewal reminders, ID cards, or high-touch client service experiences.",
    solutionExamples: [
      {
        title: "Quote request systems",
        description:
          "Guided forms that collect the right details for faster, better follow-up.",
      },
      {
        title: "Coverage education pages",
        description:
          "Clear explanations that help prospects feel informed—not confused.",
      },
      {
        title: "Client resource portals",
        description:
          "Helpful spaces for documents, FAQs, and service requests.",
      },
      {
        title: "CRM & automation",
        description:
          "Lead routing, renewals, and nurture sequences that keep pipelines healthy.",
      },
    ],
    featureCards: [
      {
        title: "Trust as the interface",
        description:
          "Design and messaging that make protection feel personal and credible.",
      },
      {
        title: "Coverage without confusion",
        description:
          "Complex options presented with calm structure and clear next steps.",
      },
      {
        title: "Quote-ready conversion",
        description:
          "Every journey is shaped around starting a real conversation.",
      },
    ],
  }),
];

export function getIndustryBySlug(slug: string) {
  return industriesCatalog.find((item) => item.slug === slug);
}

export const industriesIndexContent = {
  eyebrow: "Industries",
  title: "Digital Solutions for",
  titleEmphasis: "Every Kind of Business",
  description:
    "These industries are examples of the businesses we proudly support. Explore how Valgreen Digital Services designs premium websites, custom applications, and modern digital systems tailored to real operational needs.",
  examplesNote:
    "The industries below are a starting point—not a limit. If your business isn’t listed, we can still build a solution designed specifically for you.",
  visionTitle: "Your Industry. Your Vision. Our Expertise.",
  visionDescription:
    "Valgreen Digital Services creates completely custom digital solutions for businesses of every size and every industry. We begin by understanding your goals, workflow, customers, and unique business needs—then recommend the right mix of website, web application, PWA, or native mobile experiences.",
  visionPoints: [
    "Websites that build trust and convert visitors into customers",
    "Custom web applications that streamline how your business runs",
    "Progressive Web Apps for fast, install-free experiences",
    "Native iOS and Android apps when mobile-first engagement matters most",
    "Booking systems, portals, payments, automation, and internal tools",
  ],
  finalCtaTitle: "Don't see your industry?",
  finalCtaEmphasis: "Let's build a solution designed specifically for your business.",
  finalCtaDescription:
    "Share your goals and we’ll help you choose the right digital path—whether that’s a premium website, a custom platform, a PWA, or a native app.",
  finalCta: { label: "Start Your Project", href: "/contact" },
};
