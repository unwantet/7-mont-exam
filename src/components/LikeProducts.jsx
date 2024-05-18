import React from 'react'
import { Link } from 'react-router-dom'

export default function LikeProducts({product}) {
    const random = Math.floor(Math.random() * 6)
    if(random === 0) {
        random = 1
    }
    return (
        <div className='my-40 '>
            <h1 className='font-semibold text-3xl tracking-[1.14px] text-center pb-16 '>YOU MAY ALSO LIKE</h1>
            <div className='flex gap-[30px]'>

            {product.map((other) => {
                return(
                    <div key={other.slug} className='flex flex-col items-center gap-8'>
                            <img src={other.image.desktop} alt="" className='max-w-[350px] rounded-xl' />
                            <h1 className='text-2xl font-semibold'>{other.name}</h1>
                            <Link to={`/product/${random}`} className="bg-orang hover:bg-hoverOrange btn rounded-none min-w-40 border-0 text-white font-semibold text-xs">
                            SEE PRODUCT
                            </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
