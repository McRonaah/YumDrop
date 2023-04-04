import React from 'react';

import Delivery from '../img/delivery.png';

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2" >
      <div className="py-2 flex-1 flex flex-col items-start justify-center md:items-center">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Motorcycle Delivery </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} 
                 className="w-full h-full object-contain " 
                 alt="bodaboda-delivery" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-blue-400 flex-1"></div>
    </div>
  );
}

export default MainContainer;