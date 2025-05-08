export interface Destination {
    id: string;
    name: string;
    location: string;
    estimatedCost: number;
    durationHours: number;
  }
  
  export interface ItineraryDay {
    date: string;
    destinations: Destination[];
  }
  
  export interface ItineraryState {
    days: ItineraryDay[];
    totalCost: number;
    totalTravelHours: number;
  }
  
  const initialState: ItineraryState = {
    days: [],
    totalCost: 0,
    totalTravelHours: 0,
  };
  
  export default {
    state: initialState,
    reducers: {
      setDays(state: ItineraryState, payload: ItineraryDay[]) {
        const totalCost = payload.reduce(
          (sum, day) =>
            sum +
            day.destinations.reduce((dSum, d) => dSum + d.estimatedCost, 0),
          0,
        );
        const totalTravelHours = payload.reduce(
          (sum, day) =>
            sum +
            day.destinations.reduce((dSum, d) => dSum + d.durationHours, 0),
          0,
        );
        return { ...state, days: payload, totalCost, totalTravelHours };
      },
    },
  };
  