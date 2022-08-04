import React from 'react'
import delivery from "../img/delivery.png";

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        <div className="flex-1 py-2 flex flex-col items-start justify-center  gap-6">
          <div className="flex items-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery 
          </p>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white justify-center drop-shadow-xl">
              <img src={delivery} alt="delivery" className="w-full h-full object-contain"/>
            </div>
          </div>
          <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">The fastest delivery in <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span></p>
          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus accusamus consequuntur tempore esse blanditiis maiores amet nisi beatae cupiditate?</p>
          <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto">Order now</button>
        </div>



        <div className="bg-blue-400 p-4 flex-1 py-2"></div>
    </div>
  )
}

export default MainContainer;
