import React, { FC } from 'react'

const Section: FC<{ title: string; imageUrl: string; isTextLeft: boolean }> = (props) => {
  return (
    <div className="py-12 px-4 md:py-24">
      <div className="m-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-16">{props.title}</h2>
        <img src={props.imageUrl} alt={props.title} />
      </div>
    </div>
  )
}

export default Section
