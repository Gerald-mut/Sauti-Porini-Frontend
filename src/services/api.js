import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

// 1. Fetch Satellite Data Only
export const fetchSatelliteAlerts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/satellite-alerts`);
    // Normalize data: ensure lat/lon are numbers and handle latitude/longitude keys
    return response.data.map(item => ({
      ...item,
      lat: parseFloat(item.lat ?? item.latitude),
      lon: parseFloat(item.lon ?? item.longitude)
    }));
  } catch (error) {
    console.error("Error fetching satellite alerts:", error);
    return []; // Return empty array so app doesn't crash
  }
};

// 2. Fetch USSD Reports Only
export const fetchUssdReports = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ussd`);
    // Normalize data
    return response.data.map(item => ({
      ...item,
      lat: parseFloat(item.lat ?? item.latitude),
      lon: parseFloat(item.lon ?? item.longitude)
    }));
  } catch (error) {
    console.error("Error fetching USSD reports:", error);
    return [];
  }
};

// 3. Fetch IoT Events Only
export const fetchIotEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/iot-events`);
    // Normalize data
    return response.data.map(item => ({
      ...item,
      lat: parseFloat(item.lat ?? item.latitude),
      lon: parseFloat(item.lon ?? item.longitude)
    }));
  } catch (error) {
    console.error("Error fetching IoT events:", error);
    return [];
  }
};

