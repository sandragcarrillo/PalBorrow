import React from 'react';
import { ConnectKitButton } from 'connectkit'; // Asegúrate de importar ConnectKitButton desde el paquete correcto

const Navbar = () => {
  return (
    <div className="top-0 w-full backdrop-blur z-30  bg-gradient-to-r from-indigo-700 to-indigo-900 h-20 px-4 md:px-8 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="flex gap-2 cursor-pointer items-center">
        <img src="/PalBorrow.png" alt="Logo" className="w-24 h-24" />
        <h1 className="text-md font-Inter leading-6 text-[#FFF] font-semibold">PalBorrow</h1>
      </div>
    </div>
    <ConnectKitButton />
    </div>
  );
};

export default Navbar;
