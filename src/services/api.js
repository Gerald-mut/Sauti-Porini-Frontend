import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

// 1. Fetch Satellite Data Only
export const fetchSatelliteAlerts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/satellite-alerts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching satellite alerts:", error);
    return []; // Return empty array so app doesn't crash
  }
};

// 2. Fetch USSD Reports Only
export const fetchUssdReports = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ussd`);
    return response.data;
  } catch (error) {
    console.error("Error fetching USSD reports:", error);
    return [];
  }
};

// 3. Fetch IoT Events Only
export const fetchIotEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/iot-events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IoT events:", error);
    return [];
  }
};

