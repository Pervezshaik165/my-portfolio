import React from "react"
import {logo} from "../../assets/index"
import {navLinksData} from "../../constants"
import { Link } from "react-scroll";

const Navbar=()=>{
    return(
        <div class="w-full h-25 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-gray-600"> 
            <div >
                <img src={logo} alt="logo" height="25" width="100" />
        
            </div>
            <div >
                <ul class="flex items-center mr-12 gap-10">
                    {
                        navLinksData.map(({_id,title,link})=>(
                        <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={_id}>
                           <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                               >{title}</Link> 
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar