// Reads every JSON file in src/content/projects automatically.
// To add a project: copy one .json file there and edit it. No code changes needed.
export interface Project {
  slug: string;
  title: string;
  status: "ongoing" | "completed" | "upcoming";
  type: string;            // Flats | Plots | Villas | Commercial ...
  city: string;
  address?: string;
  googleMapsLink?: string;       // "Share" link from Google Maps
  googleMapsEmbedUrl?: string;   // optional: src from Google Maps > Share > Embed a map
  shortDescription: string;
  description?: string[];        // paragraphs
  priceRange: string;
  possessionDate?: string;
  totalArea?: string;            // e.g. "5.8 Acres"
  totalUnits?: string;           // e.g. "37 Plots"
  plotSizes?: { plots: string; size: string; area: string }[];
  reraNumber?: string;
  amenities?: string[];
  cover: string;
  gallery?: string[];
  videoUrl?: string;             // YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID
  floorPlans?: { label: string; image: string }[];
  documents?: { label: string; file: string }[];
  featured?: boolean;
  order?: number;
}
const files = import.meta.glob<{ default: Project }>("../content/projects/*.json", { eager: true });
export const projects: Project[] = Object.values(files)
  .map((m) => m.default)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
export const featuredProjects = projects.filter((p) => p.featured);
export const statusLabel = { ongoing: "Ongoing", completed: "Completed", upcoming: "Upcoming" } as const;
export const statusBadge = {
  ongoing: "bg-gold-500 text-navy-950",
  completed: "bg-emerald-600 text-white",
  upcoming: "bg-sky-600 text-white",
} as const;
// Works with or without a Google Maps link / embed URL
export const mapsLink = (p: Project) =>
  p.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address || `${p.title} ${p.city}`)}`;
export const mapsEmbed = (p: Project) =>
  p.googleMapsEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(p.address || `${p.title} ${p.city}`)}&output=embed`;
