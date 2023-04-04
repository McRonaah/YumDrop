import React from 'react';

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2" >
      <div className="p-4 bg-blue-400 flex-1"></div>
      <div className="p-4 bg-blue-400 flex-1"></div>
    </div>
  );
}

export default MainContainer;