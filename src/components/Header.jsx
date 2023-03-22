import React from 'react'

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
        {/* large screen */}
        <div className="hidden md:flex w-full h-full bg-red-600">

        </div>


        {/* small screens */}
        <div className="flex md:hidden w-full h-full  bg-blue-500">

        </div>


    </div>
  )
}

export default Header;