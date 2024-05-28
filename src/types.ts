export interface Product {
  id: number;
  type: string;
  title: string;
  description: string;
  availability: string;
  original_price: number;
  discounted_price: number;
  main_image: string;
  other_images: string[];
  offer?: string;
  new_arrival?: boolean;
  rating?: number;
}

export interface cartItem {
  id: number;
  qty: number;
}
