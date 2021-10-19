import Link from 'next/link'
import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <header>
      <div className="max-w-5xl mx-auto">
        <Link href="/">
          <a>
            <div className="logo flex items-center py-4">
              <img className="w-9 h-9" src="/images/logo.svg" alt="FCM Hub logo" />
              <span className="text-2xl block pl-2 font-bold">FCM Hub</span>
            </div>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
