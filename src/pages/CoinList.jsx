import React, { useState, useEffect } from "react";
import { getAssets } from "../api";

const CoinList = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assets = await getAssets();
        setCryptoData(assets);
      } catch (error) {
        // Manejar el error según tus necesidades
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Criptomonedas</h1>
      <ul>
        {cryptoData.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} - {crypto.symbol}: ${crypto.priceUsd}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
