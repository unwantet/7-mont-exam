import { data } from 'autoprefixer'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AdProducts from '../components/AdProducts'
import HomeEnter from '../components/HomeEnter'
import HomeProducts from '../components/HomeProducts'
import { useFetch } from '../hooks/useFetch'



export default function Home() {
    const { data } = useFetch('http://localhost:3000/products')

    return (
        <div>
            <HomeEnter/>
        <div className='align-content pt-[120px]'>
            <AdProducts/>
            <HomeProducts/>

        </div>
        </div>
    )
}
