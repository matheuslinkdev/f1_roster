import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <Image
                src="/images/f1roster.png"
                width={60}
                height={60}
                alt="F1Roster Logo"
              />
            </a>
          </div>
              <section className='flex w-full justify-between items-center text-lg font-medium'>
              <span className="">
                F1Roster
              </span>
              <span className="">
                Developed by: Matheus Link
              </span>
              </section>
          </div>
      </div>
    </footer>
  );
}

export default Footer