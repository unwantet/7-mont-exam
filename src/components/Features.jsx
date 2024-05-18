import React from 'react'

export default function Features({product}) {
    

    return (
        <div className='flex gap-[125px]'>
            <div className='max-w-[635px] flex flex-col gap-8'>
                <h1 className='text-[32px] tracking-[1.14px] font-semibold '>FEATURES</h1>
                <p className='p' style={{ whiteSpace: 'pre-wrap' }}>{product.features}</p>
            </div>
            <div>
                <h1 className=' text-[32px] tracking-[1.14px] font-semibold mb-8 '>IN THE BOX</h1>
                {product.includes.map((include) =>{
                    return(
                        <div className='flex gap-6'>
                            <p className='text-orang'>{include.quantity}x</p>
                            <p className='p opacity-80'>{include.item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
