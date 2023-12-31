import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className=' p-4 gap-4 lg:px-20 xl:p-40 h-screen flex flex-col justify-around text-orange-500 md:flex-row md:items-center md:gap-8'>
      {/* image container  */}
      {singleProduct.img && 
      <div className='relative flex-1 md:h-[70%] w-full'> 
        <Image src={singleProduct.img} alt='' fill className='object-contain'/> 
      </div>
      }
        
      {/* text container  */}
      <div className='flex-1 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'> 
        <h1 className='text-3xl font-bold'> {singleProduct.title} </h1>
        <p> {singleProduct.desc} </p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  )
}

export default SingleProduct