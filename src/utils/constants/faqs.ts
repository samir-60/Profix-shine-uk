import type { WhyChooseUsItem, HowItWorksStep } from "@/types";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "licensed",
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your complete peace of mind on every job.",
    icon: "ShieldCheck",
  },
  {
    id: "eco",
    title: "Eco-Friendly Products",
    description:
      "We use environmentally responsible products that are safe for your family and pets.",
    icon: "Leaf",
  },
  {
    id: "same-day",
    title: "Same-Day Service",
    description:
      "Need it done today? We offer same-day appointments when our schedule allows.",
    icon: "Clock",
  },
  {
    id: "quotes",
    title: "Free Quotes",
    description:
      "No-obligation free quotes with transparent pricing — no hidden fees ever.",
    icon: "BadgePoundSterling",
  },
  {
    id: "trained",
    title: "Trained Professionals",
    description:
      "Our team is fully trained, vetted, and experienced in all our service areas.",
    icon: "GraduationCap",
  },
  {
    id: "guarantee",
    title: "Satisfaction Guarantee",
    description:
      "Not happy? We will make it right. Your satisfaction is our top priority.",
    icon: "ThumbsUp",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "book",
    step: 1,
    title: "Book Your Service",
    description:
      "Call us, send a WhatsApp message, or fill out our online form for a free quote.",
    icon: "CalendarCheck",
  },
  {
    id: "arrive",
    step: 2,
    title: "We Arrive On Time",
    description:
      "Our professional team arrives punctually with all equipment ready to get started.",
    icon: "Truck",
  },
  {
    id: "enjoy",
    step: 3,
    title: "Enjoy the Results",
    description:
      "Sit back and enjoy your beautifully cleaned property. Guaranteed satisfaction.",
    icon: "CircleCheck",
  },
];
