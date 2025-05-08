import type { Destination } from '@/types/destination';

export const getAllDestinations = async (): Promise<Destination[]> => {
  return [
    {
      id: '1',
      name: 'Vịnh Hạ Long',
      image: 'https://example.com/halong.jpg',
      type: 'biển',
      price: 3000000,
      rating: 4.8,
    },
    {
      id: '2',
      name: 'Sapa',
      image: 'https://example.com/sapa.jpg',
      type: 'núi',
      price: 2500000,
      rating: 4.6,
    },
    {
      id: '3',
      name: 'TP. Hồ Chí Minh',
      image: 'https://example.com/hcm.jpg',
      type: 'thành phố',
      price: 2000000,
      rating: 4.4,
    },
    // Thêm dữ liệu mẫu tại đây
  ];
};
