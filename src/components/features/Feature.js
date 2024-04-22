import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Feature = () => {
  return (
    <section id="features" class="w-full  py-20  border-b-[1px] border-b-black">
      <Title title="feature" des="What I do" />
      <div class="grid grid-cols-3 gap-20">
        <Card icon={<FaBars />}
          title="business strategy"
          des="Technological advantage. Having a technological advantage can lead to more sales, increased productivity, and a competitive edge in your market.
"              />
        <Card
          icon={<AiFillAppstore />}
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <Card icon={<SiProgress />}
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <Card
          icon={<FaMobile />}
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
        <Card
          icon={<SiAntdesign />}
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />
      </div>

    </section>
  )
}

export default Feature