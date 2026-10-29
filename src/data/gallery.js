/**
 * ARTIST ID — Gallery Configuration
 * Replace src values with actual licensed artist photography.
 * All images below are Unsplash placeholders demonstrating the visual direction.
 * Categories: portrait | studio | live | backstage | editorial
 */

export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=70&fit=crop",
    alt: "Artist portrait — editorial",
    caption: "Between songs",
    category: "portrait",
    span: "tall", // tall | wide | normal
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=70&fit=crop",
    alt: "Studio session",
    caption: "Studio — late night",
    category: "studio",
    span: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=70&fit=crop",
    alt: "Live performance",
    caption: "On stage",
    category: "live",
    span: "wide",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&q=70&fit=crop",
    alt: "Editorial portrait",
    caption: "Press shoot 2023",
    category: "editorial",
    span: "normal",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400&q=70&fit=crop",
    alt: "Backstage moment",
    caption: "Before the show",
    category: "backstage",
    span: "normal",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=70&fit=crop",
    alt: "Concert photography",
    caption: "Manila — 2023",
    category: "live",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=70&fit=crop",
    alt: "Piano in studio",
    caption: "Writing session",
    category: "studio",
    span: "wide",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=70&fit=crop",
    alt: "Artist on the road",
    caption: "In between",
    category: "backstage",
    span: "normal",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&fit=crop",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=70&fit=crop",
    alt: "Editorial fashion portrait",
    caption: "Editorial 2024",
    category: "editorial",
    span: "normal",
  },
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "portrait", label: "Portraits" },
  { id: "studio", label: "Studio" },
  { id: "live", label: "Live" },
  { id: "backstage", label: "Backstage" },
  { id: "editorial", label: "Editorial" },
];
