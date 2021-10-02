import React, { FC } from 'react'

const Ellipse: FC<{ isOnRight: boolean }> = ({ isOnRight }) => {
  return (
    <img
      className={`absolute top-28 ${isOnRight ? '-right-1/2' : '-left-1/2'}`}
      src="/images/ellipse.svg"
      alt=""
    />
  )
}

export default Ellipse
