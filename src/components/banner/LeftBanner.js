import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Leftbanner = () => {

    const [text] = useTypewriter({
        words: [" Coder.", "Full Stack Developer.", "UI Designer.", "Student at Bmsit."],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 30,
        delaySpeed: 2000,
    });
    
  return (
    <div class=" gap -20 w-1/2">

                <div class=" flex flex-col gap-3">
                    <h4 class="text-2xl font-normal">WELCOME TO MY WORLD!! </h4>
                    <h1 class="text-6xl text-bold text-white"> Hi! Iam 
                        <span class="text-designColor capitalize">  SHAIK PERVEZ </span></h1>
                    <h2 class="text-4xl text-white text-bold">
                        A <sapn>{text}</sapn><Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#ff014f"
                        /> </h2>
                    <p class="my-8 " >I am a proactive learner eager to acquire new skills, collaborate with teams, and tackle challenges with
a positive outlook. Motivated, dedicated, and always seeking self-improvement.</p>
                </div>
                <div class="flex justify-between">
                    <div>
                    <h2 className="text-base uppercase font-titleFont mb-4" >FIND ME IN</h2>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/pervez_125/" target="_blank"><span className="bannerIcon">
                            <FaInstagram/>
                        </span>
                        </a>
                        <span className="bannerIcon">
                            <FaFacebookF />
                        </span>
                        <span className="bannerIcon">
                            <FaTwitter />
                        </span>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
                 <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiNextdotjs />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                    </div>

                </div>
            </div>
           </div> 
  )
}

export default Leftbanner