// src/models/destination.ts
import { useState } from 'react';

export interface DestinationItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  type: string;
}

export default function useDestinationModel() {
  const [list, setList] = useState<DestinationItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAll = async () => {
    setLoading(true);
    try {
      // Giả sử đây là API fetch danh sách điểm đến
      const response = await fetch('/api/destinations');
      const data = await response.json();
      setList(data);
    } catch (err) {
      console.error('Fetch failed', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    list,
    loading,
    fetchAll,
  };
}
