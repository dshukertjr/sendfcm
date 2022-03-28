import React, { FC } from 'react'
import InstallButton from '../install-button'

const Pricing: FC = () => {
  const sellingPoints: string[] = [
    '100,000 messages/month included',
    '¥1/10 messages beyond 100,000',
    'Individual messages from CRM',
  ]
  return (
    <div className="px-4 pt-4 pb-24 relative overflow-hidden">
      <img
        className="absolute z-0 top-0 -left-2 md:left-auto md:-right-2"
        src="/images/patterns/circles.svg"
        alt=""
      />
      <img
        className="absolute z-0 -bottom-4 -right-4 md:right-auto md:-left-4"
        src="/images/patterns/half-circles.svg"
        alt=""
      />
      <div className="relative md:text-center">
        <h2 className="text-5xl text-center md:font-bold">Pricing</h2>
        <p className="py-8 text-lg text-center">
          We provide simple pricing model for business all sizes and shapes.
        </p>
        <div className="p-4 shadow-yellow bg-white mx-auto md:inline-block md:text-left md:py-8 md:px-16">
          <h3 className="md:text-lg">Professional</h3>
          <div className="text-4xl py-2 md:font-bold">
            ¥20,000
            <span className="text-xl">/month</span>
          </div>
          {sellingPoints.map((sellingPoint) => {
            return (
              <div key={sellingPoint} className="flex items-center py-2">
                <img className="w-8 h-8" src="/images/check.svg" alt="" />
                <div className="pl-2 md:text-xl">{sellingPoint}</div>
              </div>
            )
          })}
          <div className="text-center pt-4">
            <InstallButton></InstallButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
