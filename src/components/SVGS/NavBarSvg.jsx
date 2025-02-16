import React from "react";

function NavBarSvg() {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default NavBarSvg;
