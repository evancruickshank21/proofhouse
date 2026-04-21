export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  year: string;
  description: string;
  details: {
    medium: string;
    artist?: string;
    category?: string;
    size?: string;
    condition?: string;
  };
};

export const products: Product[] = [
  {
    id: "andy-warhol-card-ph",
    name: "Andy Warhol Limited Edition Calendar 'Cover'",
    price: "$240",
    image: "/prints/andy-warhol-card-ph.jpg",
    year: "Vintage",
    description:
      "Vintage Andy Warhol limited edition calendar cover with strong graphic presence and collectible appeal.",
    details: {
      medium: "Printed card / edition piece",
      artist: "Andy Warhol",
      category: "Collectible print object",
      size: "TBD",
      condition: "Very good vintage condition",
    },
  },
  {
    id: "estridge-sun",
    name: "Christopher Estridge — Black Sun",
    price: "$600",
    image: "/prints/estridge-sun.png",
    year: "Original Work",
    description:
      "Original Christopher Estridge work with a bold circular composition and strong contrast, suited for modern interiors.",
    details: {
      medium: "Original work on paper",
      artist: "Christopher Estridge",
      category: "Original artwork",
      size: "TBD",
      condition: "Excellent condition",
    },
  },
  {
    id: "estridge-abstract",
    name: "Christopher Estridge — Geometric Abstract",
    price: "$600",
    image: "/prints/estridge-abstract.png",
    year: "Original Work",
    description:
      "Original Christopher Estridge piece featuring a geometric abstract composition with a clean, graphic sensibility.",
    details: {
      medium: "Original work on paper",
      artist: "Christopher Estridge",
      category: "Original artwork",
      size: "TBD",
      condition: "Excellent condition",
    },
  },
];