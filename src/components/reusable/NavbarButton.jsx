import React from 'react';

const NavbarButton = ({ buttonName, myOnClick, extraClasses }) => {
  return (
    <button onClick={myOnClick} className={`tracking-tighter relative inline-flex items-center justify-center px-2 py-1 overflow-hidden font-bold text-orange-500 hover:text-purple-900 rounded-md shadow-2xl group ${extraClasses}`}>
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-b from-orange-600 via-orange-400 to-orange-600 group-hover:opacity-100"></span>
      <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/90 to-transparent opacity-5 h-1/3"></span>
      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/90 to-transparent opacity-5"></span>
      <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white/90 to-transparent opacity-5"></span>
      <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white/90 to-transparent opacity-5"></span>
      <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
      <span className="relative">{buttonName}</span>
    </button>
  );
}

export default NavbarButton;

