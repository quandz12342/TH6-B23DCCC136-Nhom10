import { request } from 'umi';
import type { ItineraryDay } from '@/models/ItineraryModel';

export async function getDestinations() {
  return request('/api/destinations'); // GET: danh sách điểm đến
}

export async function saveItinerary(data: ItineraryDay[]) {
  return request('/api/itinerary', {
    method: 'POST',
    data,
  });
}

export async function getItinerary() {
  return request('/api/itinerary'); // GET: lịch trình đã lưu
}
