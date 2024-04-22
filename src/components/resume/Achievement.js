import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"
const Achievement = () => {
  return (
    <  motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration:1 } }}
         
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">OVERALL</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Projects"
            subTitle=""
            result="Success"
             des="
            1.A Recommendation system using government land information system

            2.Image steganography using Java Swings
            
            3.Bank Management System
            "
          />
          <ResumeCard
            title="Smart India hackathon 23 : Finalist"
            subTitle=""
            result="Success"
            des=" 
            Finalist in 2023 SIH, a national-level hackathon.
            Collaborated in a dynamic team to address “recommendations and suggestions using government land information system”.
            Applied problem-solving and innovative thinking to reach the finals of this competitive event."
          />
          <ResumeCard
            title="Scouts and guides : Student Coordinator"
            subTitle=""
            result="Success"
            des=" 
            Led and organized scout and guide activities, fostering teamwork and leadership skills among students.
            Coordinated events and initiatives, demonstrating effective communication and organizational abilities.
            Facilitated skill development programs, contributing to the personal and leadership growth of fellow students"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;