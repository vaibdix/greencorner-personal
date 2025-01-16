import React from 'react';

const InfiniteScrollText = () => {
  return (
    <div>
      <div className="stock-ticker bg-[#1C3035] text-white">
        <ul>
          <li className="minus">
            <span className="company">Outdoor Plants</span>
          </li>

          <li className="plus">
            <span className="company">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-leaf"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </span>
          </li>

          <li className="plus">
            <span className="company">Office Desk Plants</span>
          </li>

          <li className="plus">
            <span className="company">
              <img src="src/assets/yellowleaf.png" alt="leaf" />
            </span>
          </li>

          <li className="plus">
            <span className="company">Posts & Accessories</span>
          </li>

          <li className="plus">
            <span className="company">
              <img src="src/assets/yellowleaf.png" alt="leaf" />
            </span>
          </li>

          <li className="minus">
            <span className="company">Gift pots & combos</span>
          </li>

          <li className="plus">
            <span className="company">
              <img src="src/assets/yellowleaf.png" alt="leaf" />
            </span>
          </li>
        </ul>

        <ul aria-hidden="true">
          <li className="minus ml-14">
            <span className="company">Outdoor Plants</span>
          </li>

          <li className="plus">
            <span className="company">
              <img src="src/assets/yellowleaf.png" alt="leaf" />
            </span>
          </li>

          <li className="plus">
            <span className="company">Office Desk Plants</span>
          </li>

          <li className="plus">
            <span className="company">
              <img src="src/assets/yellowleaf.png" alt="leaf" />
            </span>
          </li>

          <li className="plus">
            <span className="company">Posts & Accessories</span>
          </li>

          <li className="plus">
            <span className="company">
              <img src="src/assets/yellowleaf.png" alt="leaf" />
            </span>
          </li>

          <li className="minus">
            <span className="company">Gift pots & combos</span>
          </li>

          <li className="plus">
            <span className="company">
              <img src="src/assets/yellowleaf.png" alt="leaf" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default InfiniteScrollText;
