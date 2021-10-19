import Link from 'next/link'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-blue px-4 py-12 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="logo flex items-center py-4">
          <img className="w-9 h-9" src="/images/logo.svg" alt="FCM Hub logo" />
          <span className="text-2xl block pl-2 font-bold text-white">FCM Hub</span>
        </div>

        <Link href="/">
          <a className="block my-2 py-2">Home</a>
        </Link>
        <Link href="/terms-of-service">
          <a className="block my-2 py-2">Terms of Service</a>
        </Link>
        <Link href="/privacy-policy">
          <a className="block my-2 py-2">Privacy Policy</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
