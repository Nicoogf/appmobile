import { categories } from '@/assets/data';
import Link from 'next/link';
import React from 'react'

const Category = () => {
  return (
    <div>
        <ul className='flex items-center gap-x-1 flex-nowrap border border-black/10 p-1 rounded-4xl max-w-full overflow-x-auto'>
            <li>
                <button type='button' className='py-3 px-6 bg-primary rounded-4xl'> Todas </button>
            </li>
            {categories.map((categories)=>(
                <li key={categories.category}> 
                <button type='button' className='py-3 px-6 font-medium rounded-4xl hover:bg-white/30 transition-colors'>
                {categories.category}
                </button> 
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Category ;