export const PROPERTYLISTINGSAMPLE = [
  {
    name: "Beach-House",
    rating: 4.8,
    address: {
      city: "Lagos",
      country: "Nigeria"
    },
    image: "https://via.placeholder.com/600x400",
    description: "Beautiful beach house with ocean view.",
    category: ["Wi-Fi", "Parking", "Air Conditioning"],
    price: 120,
    reviews: [
      {
        name: "Jane",
        avatar: "https://i.pravatar.cc/100?img=1",
        rating: 5,
        comment: "Amazing place!"
      },
      {
        name: "John",
        avatar: "https://i.pravatar.cc/100?img=2",
        rating: 4,
        comment: "Very nice and clean."
      }
    ]
  }
];

import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Ocean View Villa",
    rating: 4.5,
    address: {
      city: "Lagos",
      country: "Nigeria",
    },
    image: "https://via.placeholder.com/800x400",
    description: "A luxurious ocean-view property perfect for relaxation.",
    category: ["Wi-Fi", "Air Conditioning", "Swimming Pool"],
    price: 100,
    reviews: [
      {
        name: "John Doe",
        avatar: "https://via.placeholder.com/50",
        rating: 5,
        comment: "Fantastic place! Loved it.",
      },
    ],
  },
];
