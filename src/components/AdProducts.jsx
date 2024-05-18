import React from 'react'
import "../style/adproduct.css"
import { useNavigate } from 'react-router-dom';

export default function AdProducts() {


    const navigate = useNavigate();

    const clickNavigate = (link) => {
        navigate(link);
    }
    const adProducts = [
        {
            id:1,
            size:'h-[284px]',
            name:"HEADPHONES",
            image:"http://localhost:5173/src/assets/home/product/Group%2015.png",
            link:'/headphones'
        },
        {
            id:2,
            size:'h-[276px]',
            name:"SPEAKERS",
            link:'/speakers',
            image:"http://localhost:5173/src/assets/home/product/Group%2014.png"
        },
        {
            id:3,
            size:'h-[263px]',
            name:"EARPHONES",
            link:'/earphones',
            image:"http://localhost:5173/src/assets/home/product/Group%206%20(1).png"
        }
    ]
    

    return (
        <div className='flex gap-[30px]'>
            {adProducts.map((adProduct) => {
                return (
                    <div className={`flex cursor-pointer items-end img`} onClick={()=>clickNavigate(adProduct.link)}>
                        
                            <img src={adProduct.image} alt={adProduct.name} className={`${adProduct.size}`}  />

                    </div>
                    
                )
            })}
        </div>
    )
}
