'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'


import { menu } from '@/assets/data'
import { cn } from '@/lib/utils'

import { Logo } from './Logo'
import defaultImage from "../../public/default.jpg"

import MenuMobile from './menu-mobile'

const Header = () => {

  const [showMenuMobile , setShowMenuMobile] = useState<boolean>(false)

  return (
    <>
    <header className='flex items-center justify-between'>
        <section> 
         <Logo />    
        </section>

        <section className='hidden lg:block'> 
        <nav>
          <ul className='bg-background-foreground flex items-center gap-x-1 p-1 rounded-4xl'>

            {menu.map((menu)=>(
                <li key={menu.href}>
                <Link href={menu.href} className={cn('flex items-center gap-x-2 text-sm py-3 px-6 rounded-4xl transition-colors' , menu.href === "/menu" ? "bg-primary font-medium" : "hover:bg-red-400")}> 
                  <i className={menu.icon}/>
                  <p> {menu.label} </p>
                </Link>
                </li>
            ))}
           
          
          </ul>
        </nav>
        </section>
        <section> 
        <ul className='flex items-center gap-x-3 bg-background-foreground p-3 rounded-4xl'>
          <li className='flex items-center gapx-2'>
            <Image src={defaultImage} alt="Image" width={100} height={100} className='w-10 h-10 object-cover rounded-4xl' />
            <h5 className='font-medium'> User_default </h5>
          </li>
          <li className='flex items-center gapx-2'>         
            <button className='bg-background text-xl w-10 h-10 flex items-center justify-center rounded-4xl'>
              <i className='fi fi-rr-settings'> </i>
            </button>
          </li>
          <li className='lg:hidden'>
            <button type='button' className='bg-background text-xl w-10 h-10 flex items-center justify-center rounded-4xl' onClick={()=> setShowMenuMobile(true)}> 
            <i className='fi fi-rr-bars-staggered'> </i>
            </button>
          </li>
        </ul>
        </section>
    </header>
    <MenuMobile isOpen={showMenuMobile} onClose={setShowMenuMobile}/> 
    </>
    
  )
}

export default Header