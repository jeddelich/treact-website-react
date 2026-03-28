export type Plan = {
  title: string;
  price: string;
  subscription: string;
  targetAudience: string;
  highlights: string[];
};

const plans: Plan[] = [
  {
    title: "Personal",
    price: "$17.99",
    subscription: "Monthly",
    targetAudience: "For Individuals",
    highlights: [
      "30 Templates",
      "7 Landing Pages",
      "12 Internal Pages",
      "Basic Assistance",
    ],
  },
  {
    title: "Business",
    price: "$29.99",
    subscription: "Monthly",
    targetAudience: "For Small Teams",
    highlights: [
      "50 Templates",
      "10 Landing Pages",
      "20 Internal Pages",
      "Priority Assistance",
    ],
  },
  {
    title: "Enterprise",
    price: "$49.99",
    subscription: "Monthly",
    targetAudience: "For Large Organizations",
    highlights: [
      "100 Templates",
      "20 Landing Pages",
      "50 Internal Pages",
      "Dedicated Assistance",
    ],
  },
];

export default plans;
