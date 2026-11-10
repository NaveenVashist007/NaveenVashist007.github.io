// EDIT HERE: all business details live in this one file.
export const site = {
  name: "NextGen Infra",
  tagline: "Infrastructure You Can Count On, A Lifestyle You'll Love",
  description:
    "NextGen Infra is a real estate developer in Haryana. Explore NextGen Farms: 37 farmhouse plots on the Bhiwani-Jind Road with site plan, location and documents.",
  url: "https://NaveenVashist007.github.io",
  phone: "+91 90343 53393",
  phoneRaw: "919034353393", // digits only, with country code (used for tel: and WhatsApp)
  email: "info@example.com",
  address: "Office address line, City, Haryana, India",
  hours: "Mon–Sat, 10:00 AM – 7:00 PM",
  // Web3Forms / Formspree key (used in Phase 4 enquiry form)
  formAccessKey: "a0e53a04-a8bb-4df6-b8c2-89c9b8882783",
  whatsappMessage: "Hello NextGen Infra, I would like to know more about your projects.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
export const whatsappUrl = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(msg)}`;
