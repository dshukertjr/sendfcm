import React, { FC } from 'react'

const Section: FC<{ title: string; imageUrl: string; isTextLeft: boolean; patternUrl: string }> = (
  props
) => {
  return (
    <div className="py-12 px-4 md:px-0 md:py-28 relative overflow-hidden">
      <img
        className={`absolute top-36 md:z-10 md:top-auto md:bottom-8 ${
          props.isTextLeft ? '-right-4' : '-left-4'
        }`}
        src={props.patternUrl}
        alt=""
      />
      <div className="m-auto max-w-5xl relative md:flex md:items-center">
        <h2
          className={`text-4xl font-medium mb-16 md:w-1/2 ${
            props.isTextLeft ? 'md:pr-6' : 'md:pl-6 md:order-2'
          }`}
        >
          {props.title}
        </h2>
        <img className="shadow md:w-1/2" src={props.imageUrl} alt={props.title} />
      </div>
    </div>
  )
}

export default Section
