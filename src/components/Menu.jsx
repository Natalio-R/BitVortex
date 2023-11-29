import React, { useEffect, useState } from "react";
import { getCryptocurrencies, getCryptoexchanges } from "../api";

const Menu = () => {
  const [totalCoins, setTotalCoins] = useState(null);
  const [totalExchanges, setTotalExchanges] = useState(null);

  useEffect(() => {
    const fetchTotalCoins = async () => {
      try {
        const total = await getCryptocurrencies();
        setTotalCoins(total);
      } catch (error) {
        console.error("Error fetching total coins:", error);
      }
    };

    fetchTotalCoins();
  }, []);

  useEffect(() => {
    const fetchTotalExchanges = async () => {
      try {
        const total = await getCryptoexchanges();
        setTotalExchanges(total);
      } catch (error) {
        console.error("Error fetching total coins:", error);
      }
    };

    fetchTotalExchanges();
  }, []);

  return (
    <>
      <div className="container-fluid bg-white py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="whitespace-nowrap">
            <div className="inline-block text-xs font-medium me-3">
              <span className="text-gray-600">
                Criptomonedas:{" "}
                {totalCoins !== null ? (
                  <a
                    href="/"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                  >
                    {`+${totalCoins}`}
                  </a>
                ) : (
                  <a
                    href="/"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                  >
                    {`N/A`}
                  </a>
                )}
              </span>
            </div>
            <div className="inline-block text-xs font-medium me-3">
              <span className="text-gray-600">
                Intercambios:{" "}
                {totalExchanges !== null ? (
                  <a
                    href="/"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                  >
                    {`${totalExchanges}`}
                  </a>
                ) : (
                  <a
                    href="/"
                    className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                  >
                    {`N/A`}
                  </a>
                )}
              </span>
            </div>
            <div className="inline-block text-xs font-medium me-3">
              <span className="text-gray-600">
                Cap. de Mercado:{" "}
                <a
                  href="/"
                  className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                >
                  €1.3T
                </a>
              </span>
            </div>
            <div className="inline-block text-xs font-medium me-3">
              <span className="text-gray-600">
                Volumen de 24 horas:{" "}
                <a
                  href="/"
                  className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                >
                  €46.2B
                </a>
              </span>
            </div>
            <div className="inline-block text-xs font-medium me-3">
              <span className="text-gray-600">
                Dominio:{" "}
                <a
                  href="/"
                  className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                >
                  BTC: 52.0%
                </a>{" "}
                <a
                  href="/"
                  className="text-blue-600 dark:text-blue-500 hover:text-blue-500"
                >
                  ETH: 17.3%
                </a>
              </span>
            </div>
          </div>
          <div className="whitespace-nowrap">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-gray-800 bg-gray-100 focus:outline-none focus:bg-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center me-2"
              type="button"
            >
              Idioma{" "}
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="#808A9D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/*Dropdown menu */}
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-32"
            >
              <ul
                class="p-2 text-sm text-gray-700 font-medium"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="/" class="block p-2 hover:bg-gray-100 rounded-md">
                    Inglés
                  </a>
                </li>
                <li>
                  <a href="/" class="block p-2 hover:bg-gray-100 rounded-md">
                    Español
                  </a>
                </li>
              </ul>
            </div>

            <button
              id="apiButton"
              className="text-gray-800 bg-gray-100 focus:outline-none focus:bg-gray-200 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center"
              type="button"
            >
              API
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
