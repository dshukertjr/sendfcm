import Link from 'next/link'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-blue px-4 py-12 text-white">
      <Link href="/">
        <a className="block my-2 py-2">Home</a>
      </Link>
      <Link href="/terms-of-service">
        <a className="block my-2 py-2">Terms of Service</a>
      </Link>
      <Link href="/privacy-policy">
        <a className="block my-2 py-2">Privacy Policy</a>
      </Link>
    </footer>
  )
}

export default Footer
