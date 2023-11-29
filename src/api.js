// api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export const getCryptocurrencies = async () => {
  try {
    const response = await apiClient.get("/coins/list");
    const totalCoins = response.data.length;

    // Formatear el total según las reglas especificadas
    let formattedTotal;

    if (totalCoins < 1000) {
      // Menos de 1000, mostrar el número entero
      formattedTotal = totalCoins;
    } else if (totalCoins < 1000000) {
      // Entre 1000 y 999999, mostrar en formato "1.1K" (por ejemplo)
      formattedTotal = (totalCoins / 1000).toFixed(1) + "K";
    } else {
      // Más de 999999, mostrar en formato "2.3M" (por ejemplo)
      formattedTotal = (totalCoins / 1000000).toFixed(1) + "M";
    }

    return formattedTotal;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error; // Puedes manejar el error de la manera que desees
  }
};

export const getCryptoexchanges = async () => {
  try {
    const response = await apiClient.get("/exchanges");
    const totalExchanges = response.data.length;

    // Formatear el total según las reglas especificadas
    let formattedTotal;

    if (totalExchanges < 1000) {
      // Menos de 1000, mostrar el número entero
      formattedTotal = totalExchanges;
    } else if (totalExchanges < 1000000) {
      // Entre 1000 y 999999, mostrar en formato "1.1K" (por ejemplo)
      formattedTotal = (totalExchanges / 1000).toFixed(1) + "K";
    } else {
      // Más de 999999, mostrar en formato "2.3M" (por ejemplo)
      formattedTotal = (totalExchanges / 1000000).toFixed(1) + "M";
    }

    return formattedTotal;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    throw error; // Puedes manejar el error de la manera que desees
  }
};

export const getTopCryptocurrencies = () => {
  // Función para obtener las principales criptomonedas
};

export const getNFTs = () => {
  // Función para obtener lista de NFTs
};

export const getCoinDetails = (id) => {
  // Función para obtener detalles de una moneda específica
};
