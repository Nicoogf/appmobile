import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
        <section> 
         <Logo />    
        </section>
        <section> 
        <nav>
          <ul>
            <li>
              <Link href="/"> Inicio </Link>
            </li>
          </ul>
        </nav>
        </section>
        <section> User  </section>
    </header>
  )
}

export default Header