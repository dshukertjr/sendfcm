import React, { FC } from 'react'

const SimpleLayout: FC = (props) => {
  return (
    <main>
      <div className="max-w-5xl mx-auto px-4 py-8 md:px-0 md:py-16">{props.children}</div>
    </main>
  )
}

export default SimpleLayout
