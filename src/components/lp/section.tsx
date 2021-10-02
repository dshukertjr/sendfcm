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
      <div className="m-auto relative md:flex md:items-center">
        {props.isTextLeft ? <div className="md:flex-grow md:order-1"></div> : null}
        <h2
          className={`text-4xl font-medium mb-16 md:w-1/2 md:max-w-lg md:order-2 ${
            props.isTextLeft ? 'md:pr-6' : 'md:pl-6'
          }`}
        >
          {props.title}
        </h2>
        <img
          className={`shadow md:w-1/2  ${props.isTextLeft ? 'md:order-3' : 'md:order-1'}`}
          src={props.imageUrl}
          alt={props.title}
        />
        {props.isTextLeft ? null : <div className="md:flex-grow md:order-3"></div>}
      </div>
    </div>
  )
}

export default Section
