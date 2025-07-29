import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PageFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 rounded-xl py-8 mt-auto" style={{width: '100vw', marginLeft: 'calc(-50vw + 50%)'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/members" className="text-gray-600 hover:text-gray-900 transition-colors">
              Members
            </Link>
            <Link href="/supporters" className="text-gray-600 hover:text-gray-900 transition-colors">
              Supporters
            </Link>
            <Link href="/notifications" className="text-gray-600 hover:text-gray-900 transition-colors">
              Notifications
            </Link>
            <Link href="/contacts" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contacts
            </Link>
          </div>

          {/* SNS Links */}
          <div className="flex space-x-4">
            <a 
              href="https://x.com/soara_hpa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/x_logo_w.png"
                alt="X (Twitter)"
                width={24}
                height={24}
                className="invert"
              />
            </a>
            <a 
              href="https://instagram.com/soara.hpa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/instagram_logo.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">© Soara 2025</p>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter