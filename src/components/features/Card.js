import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({title,des,icon}) => {
  return (
   <div  className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
     <div class=" h-72 overflow-y-hidden">
      <div class="flex h-full flex-col gap-10 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
      <div>
           <span class="text-5xl text-designColor">{icon}</span> 
      </div>
      <div class="flex flex-col gap-6">
        <h2 class="text-2xl text-gray-300 font-bold font-titleFont">
          {title}
        </h2>
        <p class="base">{des}</p>
        <span class="text-2xl text-designColor">
          <HiArrowRight/>
        </span>
      </div>
      </div>
     </div>
   </div>
  )
}

export default Card