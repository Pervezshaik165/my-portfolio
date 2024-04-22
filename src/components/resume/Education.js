import React from 'react'
import { motion } from "framer-motion"
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration:1} }} 
     class="w-full gap-20 flex">
    <div >
      <div class="py-12 font-titleFont flex flex-col gap-4">
      <p class="text-sm  text-designColor text-deging tracking-[4px]">2022 to 2026</p>
      <h2 class="text-4xl font-bold ">Education Quality</h2>
  </div>
   <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
   <ResumeCard title="BE in Computer Science"
      subTitle="BMS Institute of Technology & Management (2022 - 2026)"
      result="9.51/10"
      des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."/>  
   <ResumeCard
    title="PUC (INTERMEDIATE)"
    subTitle="NARAYANA PU COLLEGE (2020 - 2022)"
    result="93.4%"
    des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."/>
   <ResumeCard
   title=" School Education"
   subTitle="KENDRIYA VIDHYALAYA BOLARUM (2010 - 2020)"
   result="90%"
   des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."/>
   </div>
  </div>

 
  </motion.div>
  )
}

export default Education