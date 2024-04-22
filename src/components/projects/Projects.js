import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {projectOne,projectTwo,projectThree,sm,glis,bank,img} from '../../assets/index'
const Projects = () => {
  return (
    <section id="projects" class="w-full py-20 border-b-[1px] border-b-black">
        <div class="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP A FEEDBACK"
          des="My Projects"
        /> 
        </div>
        <div class="grid grid-cols-3 gap-14">
        <a href="https://github.com/Visionaries-United/visionaries_unted_SIH_2023" target='_blank'><ProjectCard
          title="A Recommendation system using government land information system"
          des=" A Recommendation System using a Government Land Information System (GLIS) is designed to provide tailored suggestions or guidance regarding land-related matters to users, leveraging the comprehensive data and functionalities of a GLIS."
          src={glis}
        /></a>
        <a href="https://github.com/Pervezshaik165/image-Steganography" target='_blank'><ProjectCard
          title="Image steganography using Java Swings"
          des=" Image steganography using Java Swing is a graphical application that enables users to hide secret messages within digital images seamlessly. With an intuitive user interface built on Java Swing, users can select an image as the carrier, input their confidential message, and optionally encrypt it for added security."
          src={img}
        /></a>
        <a href="https://github.com/Pervezshaik165/Banking-System" target='_blank'><ProjectCard
          title="Bank Management System"
          des=" A Bank Management System is a software solution that automates various banking tasks, including customer and account management, transaction processing, loan management, interest calculation, reporting, security, and compliance.                              "
          src={bank}
        /></a>
        <a href="https://github.com/Pervezshaik165/social-media-clone-" target='_blank'><ProjectCard
          title="SOCIAL MEDIA CLONE"
          des=" A social media clone is a software application that replicates the functionality and features of popular social media platforms like Facebook, Twitter, or Instagram. It typically includes features such as user profiles, posting content, liking and commenting on posts, messaging, notifications, and privacy settings."
          src={sm}
        /></a>
        <ProjectCard
          title="E-commerce Website"
          des=" An e-commerce website is an online platform that allows businesses to sell products or services over the internet. It typically includes features such as product listings, shopping carts, secure payment gateways, and order management systems."
          src={projectOne}
        />
        <ProjectCard
          title="Chatting App"
          des=" A chatting app is a software application that enables users to communicate with each other in real-time through text, voice, or video messages. It typically includes features such as one-on-one and group chat functionalities, multimedia file sharing, emojis and stickers, and notification settings"
          src={projectTwo}
        />
        </div>
   </section>
  )
}

export default Projects