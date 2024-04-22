import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"
const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration:1 } }} 
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"> Engineering Student</p>
          <h2 className="text-4xl font-bold">Fresher</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Smart India Hackathon 2023"
            subTitle="Finalist"
            result="Bhopal,India"
            des="Collaborated in a dynamic team to address “recommendations and suggestions using government land information system”.
            Applied problem-solving and innovative thinking to reach the finals of this competitive event."
          />
          <ResumeCard
            title="Project Based Learing"
            subTitle="Bmsit 2023"
            result="Bengaluru,India"
            des="Made an bank management system using data structures and algorithms"
          />
          <ResumeCard
            title="Scouts and guides : Student Coordinator"
            subTitle="KV bolarum - (2014 - 2020)"
            result="Hyderabad,India"
            des="Led and organized scout and guide activities, fostering teamwork and leadership skills among students.
            Coordinated events and initiatives, demonstrating effective communication and organizational abilities.
            Facilitated skill development programs, contributing to the personal and leadership growth of fellow students"
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;