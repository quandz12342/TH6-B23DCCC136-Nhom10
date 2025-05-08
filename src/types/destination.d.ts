export interface Destination {
    id: string;
    name: string;
    image: string;
    type: 'biển' | 'núi' | 'thành phố';
    price: number;  // VND
    rating: number; // 1 - 5
  }
  