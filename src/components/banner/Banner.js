import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {

    return (
        <section id="home" class="w-full gap-20 py-20 flex  border-b-[1px] border-b-black font-titleFont">
           
           <LeftBanner/>
           <RightBanner/> 

        </section>
    )
}

export default Banner