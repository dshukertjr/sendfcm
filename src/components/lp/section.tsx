import React, { FC } from 'react'

const Section: FC<{ title: string; imageUrl: string; isTextLeft: boolean; patternUrl: string }> = (
  props
) => {
  return (
    <div className="py-12 px-4 md:py-24 relative overflow-hidden">
      <img
        className={`absolute top-36 ${props.isTextLeft ? '-right-4' : '-left-4'}`}
        src={props.patternUrl}
        alt=""
      />
      <div className="m-auto max-w-5xl relative">
        <h2 className="text-4xl font-medium mb-16">{props.title}</h2>
        <img className="shadow" src={props.imageUrl} alt={props.title} />
      </div>
    </div>
  )
}

export default Section
