import React,{useState}from 'react'
import Title from '../layouts/Title' 
import Education from './Education'
import Skills from './Skills'
import Achievement from './Achievement'
import Experience from './Experiacne'

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);

  return (
    
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black" >
        <div class="flex justify-center items-center text-center">
        <Title
          title="Experiance: Fresher"
          des="My Resume"
        /> 
        </div>
        <div >
            <ul class="w-full grid grid-cols-4" >
                <li onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)}
                class={`${
                  educationData
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}>Education</li>

                <li onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
                class={`${
                  skillData ? "border-designColor rounded-lg" : "border-transparent"
                } resumeLi`}>Professional skills</li>
                
                <li onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
                class={`${
                  experienceData
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}>Experience</li>
                
            <li   onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
                class={`${
                  achievementData
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}>Achievements</li>
            </ul>
        </div>

        {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}    

       {/* <Education/>  */}
       {/* <Skills/> */}
       {/* <Achievement/> */}
       {/* <Experience/> */}
    </section>
  )
}

export default Resume