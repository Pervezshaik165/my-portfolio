import React from 'react'

const Title = ({title,des}) => {
  return (
    <div class="flex flex-col gap-4 font-titleFont mb-14">
        <h3 class="text-sm uppercase font-light text-designColor tracking-wide">{title}</h3>
        <h1 class="text-5xl text-gray-300 font-bold capitalize">{des}</h1>
      </div>
  )
}

export default Title