// constants/index.ts
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Cozy Apartment",
    rating: 4.8,
    image: "https://via.placeholder.com/600x400",
    address: {
      city: "Lagos",
      country: "Nigeria",
    },
    description: "A cozy place to stay in Lagos with great amenities.",
    category: ["Wi-Fi", "Kitchen", "Air Conditioning", "Parking"],
    price: 70,
    reviews: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        comment: "Amazing place and very clean!",
      },
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        comment: "Had a great time, would book again!",
      },
    ],
  },
];
