import React from 'react';

const ListComponent = ({ flag,}) => {
  return (
    <div className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}>ListComponent
      <div className="w-full flex items-center justify-between">
        
      </div>
      </div>
  );
};

export default ListComponent;