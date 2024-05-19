import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import { menu } from '@/assets/data'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
        <section> 
         <Logo />    
        </section>
        <section> 
        <nav>
          <ul className='bg-background-foreground flex items-center gap-x-1 p-1 rounded-full'>
            
            {menu.map((menu)=>(
                <li key={menu.href}>
                <Link href={menu.href} className='flex items-center gap-x-2 text-sm py-3 px-6 rounded-full transition-colors'> 
                  <i className={menu.icon}/>
                  <p> {menu.label} </p>
                </Link>
                </li>
            ))}
           
          
          </ul>
        </nav>
        </section>
        <section> User  </section>
    </header>
  )
}

export default Header