// EDIT HERE: home page text. Facts below come from the NextGen Farms site plan PDF.
export const home = {
  heroVideo: "", // e.g. "/hero.mp4" (under 3 MB). Leave empty to use the image.
  story: {
    eyebrow: "Our Story",
    title: "Spaces built on trust, designed for a better lifestyle.",
    text: [
      "NextGen Infra develops thoughtfully planned real estate in Haryana, starting with NextGen Farms: a gated farmhouse-plot community on the Bhiwani-Jind Road.",
      "We focus on proper infrastructure, clear plot details and a safe, peaceful environment, so that families and investors can buy with confidence.",
    ],
  },
  // decimals is optional. These are real figures from the NextGen Farms site plan.
  stats: [
    { value: 37, suffix: "", label: "Farmhouse Plots" },
    { value: 5.8, decimals: 1, suffix: "", label: "Acres" },
    { value: 35, suffix: " ft", label: "Wide Road" },
    { value: 24, suffix: "x7", label: "Security & CCTV" },
  ],
  why: [
    { title: "Planned Infrastructure", text: "35 ft wide road, water and electricity connections and a sewage treatment plant." },
    { title: "Safe & Gated", text: "Round-the-clock security with guard rooms and CCTV surveillance." },
    { title: "Healthy Lifestyle", text: "A dedicated cycling track and tree-lined avenues in a countryside setting." },
    { title: "Multiple Plot Sizes", text: "Plots from 518 to 685 sq yards to suit your lifestyle and investment goals." },
  ],
  amenities: ["35 ft Wide Road", "Water & Electricity", "Sewage Treatment Plant", "24x7 Security", "CCTV Surveillance", "Guard Rooms", "Cycling Track", "Gated Community"],
  // Add REAL customer reviews here (with permission). While empty, the section is hidden.
  testimonials: [] as { name: string; role: string; text: string }[],
};
