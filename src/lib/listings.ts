// Reads every JSON file in src/content/listings automatically (rent / sale properties).
export interface Listing {
  slug: string;
  title: string;
  mode: "rent" | "sale";
  type: string;          // Flat | Room | House | Shop | Plot ...
  bhk?: string;          // "2 BHK", "Single room"
  area?: string;         // "1200 sq ft"
  price: string;         // "₹15,000"
  priceNote?: string;    // "per month"
  city: string;
  address?: string;
  description?: string;
  furnishing?: string;
  cover?: string;
  available?: boolean;   // false hides the listing
  order?: number;
}
const files = import.meta.glob<{ default: Listing }>("../content/listings/*.json", { eager: true });
export const listings: Listing[] = Object.values(files)
  .map((m) => m.default)
  .filter((l) => l.available !== false)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
export const modeLabel = { rent: "For Rent", sale: "For Sale" } as const;
