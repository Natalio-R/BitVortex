import React, { useState, useEffect } from "react";
import { getAssets } from "../api";

const Menu = () => {
  const [totalCoins, setTotalCoins] = useState(0);
  const [totalExchanges, setTotalExchanges] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [volume24h, setVolume24h] = useState(0);
  const [dominantCurrency, setDominantCurrency] = useState("");
  const [dominantCurrencyPercentage, setDominantCurrencyPercentage] =
    useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assets = await getAssets();

        // Total de monedas
        const coinsCount = assets.length;
        setTotalCoins(coinsCount);

        // Total de intercambios
        const exchangesCount = new Set(assets.map((asset) => asset.exchangeId))
          .size;
        setTotalExchanges(exchangesCount);

        // Capitalización de mercado total
        const totalMarketCap = assets.reduce(
          (acc, asset) => acc + parseFloat(asset.marketCapUsd || 0),
          0
        );
        setMarketCap(totalMarketCap.toFixed(4));

        // Volumen en las últimas 24 horas
        const totalVolume24h = assets.reduce(
          (acc, asset) => acc + parseFloat(asset.volumeUsd24Hr || 0),
          0
        );
        setVolume24h(formatVolume(totalVolume24h));

        // Moneda que más predomina
        const dominantCurrencyInfo = assets.reduce((prev, curr) => {
          return parseFloat(curr.priceUsd || 0) > parseFloat(prev.priceUsd || 0)
            ? curr
            : prev;
        }, {});
        setDominantCurrency(
          `${
            dominantCurrencyInfo.symbol
          } ${dominantCurrencyInfo.percentTotalVolume.toFixed(2)}%`
        );
        setDominantCurrencyPercentage(
          dominantCurrencyInfo.percentTotalVolume.toFixed(2)
        );
      } catch (error) {
        console.error("No se ha encontrado datos.", error);
      }
    };

    const formatVolume = (volume) => {
      if (volume >= 1e9) {
        return `${(volume / 1e9).toFixed(3)} bill $`;
      } else if (volume >= 1e6) {
        return `${(volume / 1e6).toFixed(3)} mill $`;
      } else {
        return `${volume.toFixed(2)} $`;
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="menu">
        <div className="menu__container">
          <div className="menu__info-list">
            <p className="menu__data-info">
              Monedas: <span className="menu__data-number">{totalCoins}</span>
            </p>
            <p className="menu__data-info">
              Intercambios:{" "}
              <span className="menu__data-number">{totalExchanges}</span>
            </p>
            <p className="menu__data-info">
              Cap. de mercado:{" "}
              <span className="menu__data-number">{marketCap}</span>
            </p>
            <p className="menu__data-info">
              Volumen en 24h:{" "}
              <span className="menu__data-number">{volume24h}</span>
            </p>
            <p className="menu__data-info">
              Dominio:{" "}
              <span className="menu__data-number">{dominantCurrency}</span>
              <span className="menu__data-number2">
                {dominantCurrencyPercentage}%
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
