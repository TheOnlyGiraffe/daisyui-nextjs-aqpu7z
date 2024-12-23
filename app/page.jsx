"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link href="/about">About</Link>
              <ul className="p-2">
                <li>
                  <Link href="/about#submenu1">Submenu 1</Link>
                </li>
                <li>
                  <Link href="/about#submenu2">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          HyperThread
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Store</summary>
              <ul className="p-2">
                <li>
                  <Link href="/about#submenu1">Apex Legends</li>
                <li>
                  <Link href="/about#submenu2">Fortnite</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Dashboard</a>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [ratings, setRatings] = useState(Array(9).fill(null));

  const handleRating = (index, rating) => {
    if (ratings[index] === null) {
      const newRatings = [...ratings];
      newRatings[index] = rating;
      setRatings(newRatings);
    }
  };

  const renderProductCards = () => {
    const cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push(
        <div key={i} className="card w-96 bg-base-100 shadow-xl image-full m-2">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="indicator">
              <span className="indicator-item badge badge-primary">new</span> 
              <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
            </div>
            <div className="rating mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name={`rating-${i}`}
                  className="mask mask-star-2 bg-orange-400"
                  checked={ratings[i] === star}
                  onChange={() => handleRating(i, star)}
                  disabled={ratings[i] !== null}
                />
              ))}
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      );
    }
    return cards;
  };

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to HyperThread</h1>
            <p className="py-6">
              This is a sample landing page using Next.js and DaisyUI.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {renderProductCards()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
