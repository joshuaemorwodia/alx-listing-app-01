// interfaces/index.ts
export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  image: string;
  address: Address;
  description: string;
  category: string[];
  price: number;
  reviews: Review[];
}
