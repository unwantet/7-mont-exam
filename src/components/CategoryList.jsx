import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryList({product}) {

    return (

        <div className='flex gap-[125px] items-center mb-40'>
            <img src={product.image.desktop} alt={product.name}  className='max-w-[540px] rounded-xl'/>
            <div>
                {product.new && <span className='text-sm tracking-[10px] text-orang mb-3'>NEW PRODUCT</span>}
                <h1 className='h1 font-bold clear-start mb-8'>{product.name}</h1>
                <p className='p opacity-85 mb-10'>{product.description}</p>
                <Link to={`/product/${product.id}`} className="bg-orang hover:bg-hoverOrange btn rounded-none min-w-40 border-0 text-white font-semibold text-xs">
                SEE PRODUCT
                </Link>
            </div>
        </div>
    )
}
