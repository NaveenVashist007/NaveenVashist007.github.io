// EDIT HERE: About page. Empty lists are hidden automatically. Fill with real details from the client.
export const about = {
  story: [
    "NextGen Infra is a Haryana-based real estate developer. Our first project, NextGen Farms on the Bhiwani-Jind Road, brings together 37 farmhouse plots in a gated community with proper infrastructure and round-the-clock security.",
    "We believe a good property starts with trust: clear plot details, planned infrastructure and honest communication from the first enquiry to the final registry.",
  ],
  vision: "To build well-planned communities that give families and investors infrastructure they can count on and a lifestyle they will love.",
  mission: "To deliver transparent, well-developed projects with dependable infrastructure, strong security and honest dealings with every customer.",
  values: ["Transparency", "Planned infrastructure", "Safety & security", "Customer trust"],
  leadership: [] as { name: string; role: string; photo?: string; bio?: string }[],
  certifications: [] as { label: string; detail?: string }[], // e.g. { label: "HRERA Registration", detail: "No. ..." }
  timeline: [] as { year: string; text: string }[],            // e.g. { year: "2025", text: "NextGen Farms launched" }
};
