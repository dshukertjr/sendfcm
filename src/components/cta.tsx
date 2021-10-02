import React, { FC } from 'react'

const CTA: FC<{ href: string }> = (props) => {
  return (
    <a
      className="bg-blue py-2 px-8 text-white inline-block  text-xl md:text-2xl"
      target="blank"
      href={props.href}
    >
      {props.children}
    </a>
  )
}

export default CTA
