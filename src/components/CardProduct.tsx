import { Product } from '@/types'
import React from 'react'
import defaultImage from "../../public/default.jpg"
import Image from 'next/image'

interface CardProductProps {
  product: Product
}

const CardProduct = ({product}:CardProductProps) => {
 const { name,category,image,discount,stock,price,descripcion} = product
  return (
    <div className='bg-background-foreground rounded-4xl p-6 space-y-5'>
      <div className='flex items-center gap-x-6'>
        <Image src={defaultImage} alt="Imagen" width={50} height={50} className="rounded-4xl w-24 h-24"/>
 
      </div>
      
      <div className='space-y-2'>
        <div className='flex items-center gap-x-2'>
          { discount > 0 && (
            <span> Descuento {discount} % </span>
          )}
           
        </div>

      </div>
    </div>
  )
}

export default CardProduct