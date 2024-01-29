import axios from "axios";

const apiUrl = "https://api.coincap.io/v2";

export const getAssets = async () => {
  try {
    const response = await axios.get(`${apiUrl}/assets`);
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener datos de CoinCap:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};

export const getRates = async () => {
  try {
    const response = await axios.get(`${apiUrl}/rates`);
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener tasas de CoinCap:", error);
    throw error;
  }
};
