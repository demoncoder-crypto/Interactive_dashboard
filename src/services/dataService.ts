
import axios from 'axios';

const BASE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary';

export const getEarthquakeData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all_week.geojson`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
