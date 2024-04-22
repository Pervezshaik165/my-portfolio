import React from 'react'
import { bannerImg } from '../../assets';
const RightBanner = () => {
  return (
    <div class= "w-1/2 flex justify-center items-center relative">
                <img className="w-[500px] h-[550px] lgl:w-[500px] lgl:h-[680px] z-10" src={bannerImg} alt='bannerimg'></img>
                <div className="absolute bottom-0 w-[500px] h-[450px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
  )
}

export default RightBanner