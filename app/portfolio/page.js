"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// API key
const API_KEY = 'l1lG3cfNsOVB7N3W/CZcoQ==3wvBHQkajt4M1vEp';

// API endpoints
const API_ENDPOINTS = {
  exchangerate: `https://api.api-ninjas.com/v1/exchangerate?pair=GBP_AUD`,
  animal: `https://api.api-ninjas.com/v1/animals?name=cheetah`,
  goldprice: `https://api.api-ninjas.com/v1/goldprice`,
  stockprice: `https://api.api-ninjas.com/v1/stockprice?ticker=AAPL`,
};

export default function Portfolio() {
  const [exchangerate, setExchangerate] = useState(null);
  const [animal, setAnimal] = useState(null);
  const [goldprice, setGoldprice] = useState(null);
  const [stockprice, setStockprice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      'X-Api-Key': API_KEY,
    };

    // Fetch Exchange Rate Data
    fetch(API_ENDPOINTS.exchangerate, { headers })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Exchange Rate API error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setExchangerate(data))
      .catch(err => setError(err.message));

    // Fetch Animal Data
    fetch(API_ENDPOINTS.animal, { headers })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Animal API error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        // Check if the data array is not empty
        if (data.length > 0) {
          setAnimal(data[0]);  // Access the first animal in the array
        } else {
          setError('No data available for the animal.');
        }
      })
      .catch(err => setError(err.message));

    // Fetch Gold Price Data
    fetch(API_ENDPOINTS.goldprice, { headers })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Gold Price API error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setGoldprice(data))
      .catch(err => setError(err.message));

    // Fetch Stock Price Data
    fetch(API_ENDPOINTS.stockprice, { headers })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Stock Price API error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setStockprice(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="p-4">
      <header className="bg-gray-800 p-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
            <li><Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
            <li><Link href="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
            <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <h1 className="text-3xl font-bold text-center mb-6">My API-Powered Projects</h1>

      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Exchange Rate App */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Exchange Rate (GBP to AUD)</h2>
          {exchangerate ? (
            <p>1 GBP = {exchangerate.exchange_rate} AUD</p>
          ) : (
            <p>Loading exchange rate data...</p>
          )}
          <a
            href="https://api.api-ninjas.com/v1/exchangerate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mt-4"
          >
            View API Documentation
          </a>
        </div>

        {/* Animal Info */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Animal Info: Cheetah</h2>
          {animal ? (
            <div>
              <p>Name: {animal.name}</p>
              <p>Speed: {animal.characteristics.top_speed} km/h</p>
              <p>Habitat: {animal.characteristics.habitat}</p>
            </div>
          ) : (
            <p>Loading animal data...</p>
          )}
          <a
            href="https://api.api-ninjas.com/v1/animals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mt-4"
          >
            View API Documentation
          </a>
        </div>

        {/* Gold Price Tracker */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Gold Price</h2>
          {goldprice ? (
            <p>The current gold price is ${goldprice.price} per ounce.</p>
          ) : (
            <p>Loading gold price data...</p>
          )}
          <a
            href="https://api.api-ninjas.com/v1/goldprice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mt-4"
          >
            View API Documentation
          </a>
        </div>

        {/* Stock Price Tracker */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Stock Price: AAPL</h2>
          {stockprice ? (
            <p>The current stock price of AAPL is ${stockprice.price}.</p>
          ) : (
            <p>Loading stock price data...</p>
          )}
          <a
            href="https://api.api-ninjas.com/v1/stockprice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mt-4"
          >
            View API Documentation
          </a>
        </div>

      </div>
    </div>
  );
}
