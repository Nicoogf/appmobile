import Cart from '@/components/Cart'
import Header from '@/components/Header'
import {ReactNode} from 'react'

const Layout = ( {children}: {children:ReactNode}) => {
  return (
    <div className='h-[100dvh]'>
        <section className='bg-red-200 h-[10dvh] py-4 px-5'>
            <Header />
        </section>
         
         <section className='h-[90dvh] lg:flex lg:gap-x-4'>

            <main className='bg-green-200 basis-4/4 lg:basis-3/4 p-5 lg:pr-2 overflow-y-auto'>
                 {children}
            </main>

            <div className='bg-blue-200  lg:basis-1/4 p-5 lg:pr-2'>
                <Cart />
            </div>
        
         </section>
      
    </div>
  )
}

export default Layout