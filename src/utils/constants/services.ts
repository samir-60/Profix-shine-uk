import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "painting-decorating",
    slug: "painting-decorating",
    title: "Painting & Decorating",
    shortDescription:
      "Professional interior and exterior painting with flawless finishes for homes and businesses in Luton and surrounding areas.",
    fullDescription:
      "Transform your property with our expert painting and decorating services. From single rooms to full property refurbishments, our skilled decorators deliver impeccable finishes using premium paints and meticulous preparation. We handle everything from surface preparation and priming to the final coat, ensuring a durable, beautiful result that lasts for years.",
    heroImage: "/hero/painting-decorating.png",
    serviceImage: "/service/paint.jpg",
    icon: "Paintbrush",
    accentColor: "#156FEA",
    features: [
      "Interior and exterior painting",
      "Wallpaper hanging and removal",
      "Surface preparation and sanding",
      "Woodwork and trim painting",
      "Colour consultation included",
      "Dust sheets and full protection",
      "Premium quality paints used",
      "Clean and tidy finish guaranteed",
    ],
    processSteps: [
      {
        step: 1,
        title: "Free Consultation",
        description:
          "We visit your property to assess the scope, discuss colours, and provide a detailed no-obligation quote.",
      },
      {
        step: 2,
        title: "Preparation",
        description:
          "Surfaces are cleaned, sanded, filled, and primed to ensure the perfect base for a lasting finish.",
      },
      {
        step: 3,
        title: "Painting",
        description:
          "Our decorators apply premium paints with precision, using professional techniques for a flawless result.",
      },
      {
        step: 4,
        title: "Final Inspection",
        description:
          "We conduct a thorough walkthrough with you to ensure every detail meets our high standards.",
      },
    ],
    beforeAfterImages: [
      {
        before: "/before-after/before-paint.png",
        after: "/before-after/after-paint.png",
        alt: "House Painting & Decorating before and after professional painting",
      }
    ],
    faqs: [
      {
        question: "How long does a typical room take to paint?",
        answer:
          "A standard-sized room typically takes 1-2 days including preparation and two coats. Larger rooms or complex surfaces may take longer. We provide accurate timelines during your free consultation.",
      },
      {
        question: "Do you supply the paint?",
        answer:
          "Yes, we can supply premium quality paints from leading brands, or we can work with paint you have already purchased. We recommend professional-grade paints for the best durability and finish.",
      },
      {
        question: "Are you fully insured for decorating work?",
        answer:
          "Absolutely. ProFix & Shine carries full public liability insurance covering all painting and decorating work. Your property is in safe hands with our experienced team.",
      },
      {
        question: "Do you offer colour consultation?",
        answer:
          "Yes, complimentary colour consultation is included with every project. Our decorators can advise on trending colours, lighting considerations, and finishes to achieve your vision.",
      },
    ],
    metaTitle:
      "Painting & Decorating Services UK | ProFix & Shine",
    metaDescription:
      "Professional painting and decorating in Luton and surrounding areas. Interior & exterior painting, wallpaper, woodwork. Free quotes, fully insured. Call ProFix & Shine today.",
    keywords: [
      "painting services UK",
      "decorating UK",
      "house painters near me",
      "interior painting UK",
      "exterior painting services",
    ],
  },
  {
    id: "garden-ground-cleaning",
    slug: "garden-ground-cleaning",
    title: "Garden & Ground Cleaning",
    shortDescription:
      "Comprehensive garden tidying, ground clearing, and outdoor space restoration for pristine UK gardens.",
    fullDescription:
      "Reclaim your outdoor space with our professional garden and ground cleaning services. We tackle overgrown gardens, leaf clearance, hedge trimming, patio cleaning, and general grounds maintenance. Whether you need a one-off deep clean or regular maintenance, our team restores your garden to its full potential with eco-friendly methods and meticulous attention to detail.",
    heroImage: "/hero/garden-ground-cleaning.png",
    serviceImage: "/service/garden-cutting.jpg",
    icon: "Trees",
    accentColor: "#24C7FF",
    features: [
      "Overgrown garden clearance",
      "Leaf and debris removal",
      "Hedge trimming and shaping",
      "Patio and path cleaning",
      "Weed removal and treatment",
      "Green waste disposal included",
      "Eco-friendly products",
      "Regular maintenance plans",
    ],
    processSteps: [
      {
        step: 1,
        title: "Site Assessment",
        description:
          "We evaluate your garden's condition and discuss your goals to create a tailored cleaning plan.",
      },
      {
        step: 2,
        title: "Clearance",
        description:
          "Overgrowth, debris, and unwanted vegetation are removed efficiently and responsibly.",
      },
      {
        step: 3,
        title: "Deep Clean",
        description:
          "Patios, paths, and surfaces are thoroughly cleaned using professional equipment.",
      },
      {
        step: 4,
        title: "Finishing Touches",
        description:
          "Final tidy-up, waste removal, and a walkthrough to ensure your garden looks its best.",
      },
    ],
    beforeAfterImages: [
      {
        before: "/before-after/before-garden.png",
        after: "/before-after/after-garden.png",
        alt: "Overgrown garden before and after professional cleaning",
      }
    ],
    faqs: [
      {
        question: "How much garden waste do you remove?",
        answer:
          "We remove all green waste generated during the clean. Disposal is included in our quoted price. For very large clearances, we will discuss logistics during the initial assessment.",
      },
      {
        question: "Can you maintain my garden regularly?",
        answer:
          "Yes, we offer weekly, fortnightly, and monthly maintenance plans tailored to your garden's needs and budget. Regular clients receive priority booking.",
      },
      {
        question: "Are your garden products eco-friendly?",
        answer:
          "We prioritise eco-friendly and biodegradable products wherever possible. Our team is trained in sustainable gardening practices that protect local wildlife and soil health.",
      },
      {
        question: "Do you work in all weather conditions?",
        answer:
          "Light rain rarely stops us, but severe weather may require rescheduling for safety. We always communicate promptly if conditions affect your appointment.",
      },
    ],
    metaTitle:
      "Garden & Ground Cleaning UK | ProFix & Shine",
    metaDescription:
      "Expert garden cleaning and ground maintenance in Luton and surrounding areas. Clearance, hedge trimming, patio cleaning. Eco-friendly, fully insured. Free quotes available.",
    keywords: [
      "garden cleaning UK",
      "ground clearing services",
      "garden maintenance near me",
      "patio cleaning UK",
      "overgrown garden clearance",
    ],
  },
  {
    id: "window-cleaning",
    slug: "window-cleaning",
    title: "Crystal Clear Window Cleaning",
    shortDescription:
      "Streak-free window cleaning for residential and commercial properties using pure water technology.",
    fullDescription:
      "Experience the difference of truly crystal clear windows with ProFix & Shine. Our professional window cleaners use advanced pure water fed pole systems and traditional methods to deliver streak-free results on homes, offices, and commercial buildings. From ground-floor windows to multi-storey properties, we have the equipment and expertise to make every pane sparkle.",
    heroImage: "/hero/window-clean.png",
    serviceImage: "/service/window.jpg",
    icon: "AppWindow",
    accentColor: "#156FEA",
    features: [
      "Residential window cleaning",
      "Commercial window cleaning",
      "Pure water fed pole system",
      "Frame and sill cleaning",
      "Conservatory and skylight cleaning",
      "Regular cleaning schedules",
      "Hard-to-reach windows",
      "Streak-free guarantee",
    ],
    processSteps: [
      {
        step: 1,
        title: "Booking",
        description:
          "Contact us for a free quote. We assess your property and recommend the best cleaning schedule.",
      },
      {
        step: 2,
        title: "Setup",
        description:
          "Our team arrives with professional equipment and sets up safely around your property.",
      },
      {
        step: 3,
        title: "Cleaning",
        description:
          "Every window is cleaned inside and out (where accessible) using pure water technology.",
      },
      {
        step: 4,
        title: "Quality Check",
        description:
          "We inspect every pane for streaks and spots, ensuring a flawless crystal clear finish.",
      },
    ],
    beforeAfterImages: [
      {
        before: "/before-after/before-window.png",
        after: "/before-after/after-window.png",
        alt: "Dirty windows before and after professional cleaning",
      }
    ],
    faqs: [
      {
        question: "How often should windows be cleaned?",
        answer:
          "We recommend every 4-8 weeks for residential properties and every 2-4 weeks for commercial buildings. Frequency depends on location, weather exposure, and personal preference.",
      },
      {
        question: "What is pure water window cleaning?",
        answer:
          "Pure water cleaning uses deionised water that leaves no mineral deposits when it dries, resulting in a streak-free finish without chemicals. It is safe for the environment and your property.",
      },
      {
        question: "Can you clean windows above ground floor?",
        answer:
          "Yes, our water-fed pole systems reach up to 60 feet safely from the ground. For taller buildings, we have additional access solutions available.",
      },
      {
        question: "Do you clean inside windows too?",
        answer:
          "Interior window cleaning is available on request. We use lint-free cloths and professional solutions for a spotless finish on both sides.",
      },
    ],
    metaTitle:
      "Window Cleaning Services UK | ProFix & Shine",
    metaDescription:
      "Crystal clear window cleaning in Luton and surrounding areas. Residential & commercial, pure water technology, streak-free guarantee. Book your free quote today.",
    keywords: [
      "window cleaning UK",
      "commercial window cleaners",
      "residential window cleaning",
      "pure water window cleaning",
      "window cleaners near me",
    ],
  },
  {
    id: "jet-wash",
    slug: "jet-wash",
    title: "High Pressure Jet Wash",
    shortDescription:
      "Powerful jet washing for driveways, patios, decking, and exterior surfaces — restoring them to like-new condition.",
    fullDescription:
      "Blast away years of dirt, grime, moss, and algae with our professional high-pressure jet washing service. We restore driveways, patios, block paving, decking, walls, and commercial forecourts to their original condition. Using commercial-grade equipment and adjustable pressure settings, we clean thoroughly without damaging your surfaces.",
    heroImage: "/hero/jet-pressure.png",
    serviceImage: "/service/jet.jpg",
    icon: "Droplets",
    accentColor: "#24C7FF",
    features: [
      "Driveway jet washing",
      "Patio and decking cleaning",
      "Block paving restoration",
      "Wall and render cleaning",
      "Commercial forecourt cleaning",
      "Moss and algae removal",
      "Sealing available",
      "Eco-friendly detergents",
    ],
    processSteps: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We inspect your surfaces, identify stains and growth, and determine the optimal pressure settings.",
      },
      {
        step: 2,
        title: "Pre-Treatment",
        description:
          "Stubborn stains and organic growth receive targeted pre-treatment for maximum effectiveness.",
      },
      {
        step: 3,
        title: "Jet Washing",
        description:
          "Commercial-grade equipment removes all dirt, grime, and discolouration with precision pressure control.",
      },
      {
        step: 4,
        title: "Final Rinse",
        description:
          "A thorough rinse and optional sealing leaves your surfaces looking brand new and protected.",
      },
    ],
    beforeAfterImages: [
      {
        before: "/before-after/before-jet.png",
        after: "/before-after/after-jet.png",
        alt: "Driveway before and after jet washing",
      }
    ],
    faqs: [
      {
        question: "Will jet washing damage my driveway?",
        answer:
          "No. We use adjustable pressure settings tailored to each surface type. Block paving, tarmac, concrete, and natural stone are all cleaned safely with the appropriate technique.",
      },
      {
        question: "How long do jet wash results last?",
        answer:
          "Results typically last 12-18 months depending on weather, tree cover, and traffic. We offer sealing services that extend cleanliness and protect against future staining.",
      },
      {
        question: "Can you remove oil stains from driveways?",
        answer:
          "Yes, we use specialist degreasers and pre-treatment products to tackle oil, rust, and stubborn stains before jet washing for the best possible results.",
      },
      {
        question: "Do you offer same-day jet washing?",
        answer:
          "Same-day service is often available depending on our schedule. Contact us early in the day for the best chance of same-day booking.",
      },
    ],
    metaTitle:
      "Jet Wash & Pressure Washing UK | ProFix & Shine",
    metaDescription:
      "Professional jet washing and pressure cleaning in Luton and surrounding areas. Driveways, patios, decking & more. Same-day service available. Free quotes — call today.",
    keywords: [
      "jet wash UK",
      "pressure washing services",
      "driveway cleaning UK",
      "patio jet wash",
      "block paving cleaning near me",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, 3);
}
