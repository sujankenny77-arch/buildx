export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  checkoutUrl: string;
  icon: "bot" | "sparkles" | "blocks";
  accent: "cyan" | "violet" | "blue";
};

export const COURSES: Course[] = [
  {
    id: "ai-automation",
    title: "AI Automation Mastery",
    category: "AUTOMATION",
    description:
      "Build AI-powered workflows, connect tools, and create intelligent systems that scale productivity.",
    price: 29.99,
    checkoutUrl: "https://whop.com/checkout/plan_9jthKghNKCWWx",
    icon: "bot",
    accent: "cyan",
  },
  {
    id: "ai-prompting",
    title: "AI Prompting",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "Master advanced prompting techniques to get better results and build powerful AI-assisted workflows.",
    price: 29.99,
    checkoutUrl: "https://whop.com/checkout/plan_GFz5zvT3qH23w",
    icon: "sparkles",
    accent: "violet",
  },
  {
    id: "web3-development",
    title: "Web3 Development",
    category: "WEB3",
    description:
      "Learn blockchain fundamentals, smart contracts, dApps, and the technology powering Web3.",
    price: 29.99,
    checkoutUrl: "https://whop.com/checkout/plan_u8HGB1KN6GTlE",
    icon: "blocks",
    accent: "blue",
  },
];

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}