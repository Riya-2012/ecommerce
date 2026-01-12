import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
function Footer() {
  return (
    <div className='mt-16 flex flex-col md:flex-row md:items-start gap:8 md:justify-between bg-gray-600 p-8 rounded-lg'>
    <div className='flex gap-4 flex-col gap-4 items-center md:items-start'>
      <Link href='/' className='flex items-center'>
 <Image src="/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
 <p className='hidden md:block  text-md font-medium text-white tracking-wider'>TRENDIES.</p>

 </Link>
 <p className='text-sm text-gray-400'>2025 Trendies</p>
 <p className='text-sm text-gray-400'>All rights reserved.</p>
    </div>
    <div className='flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start'>
      <p className='text-sm text-amber-50'>Links</p>
<Link href="/">HomePage</Link>
<Link href="/">Contact</Link>
<Link href="/">Terms of Services</Link>
<Link href="/">Privacy Policy</Link>
    </div>
     <div className='flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start'>
      <p className='text-sm text-amber-50'>Links</p>
<Link href="/">HomePage</Link>
<Link href="/">Contact</Link>
<Link href="/">Terms of Services</Link>
<Link href="/">Privacy Policy</Link>
    </div>
     <div className='flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start'>
      <p className='text-sm text-amber-50'>Links</p>
<Link href="/">HomePage</Link>
<Link href="/">Contact</Link>
<Link href="/">Terms of Services</Link>
<Link href="/">Privacy Policy</Link>
    </div>
     <div className='flex gap-4 flex-col text-sm text-gray-400 items-center md:items-start'>
      <p className='text-sm text-amber-50'>Links</p>
<Link href="/">HomePage</Link>
<Link href="/">Contact</Link>
<Link href="/">Terms of Services</Link>
<Link href="/">Privacy Policy</Link>
    </div>
    </div>
  )
}

export default Footer
