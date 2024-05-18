import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutInputs from '../components/CheckoutInputs'
import Summary from '../components/Summary'
import '../style/components.css'

export default function Chekcout() {
    

    return (
        <div className='checkout-bg'>
            <div className='align-content pt-20 pb-[141px]'>
            <Link to='/' className='link no-underline'>Go Back</Link>
            <div className='flex gap-[30px]  mt-9'>
            <CheckoutInputs/>
            <Summary/>

            </div>
            </div>
                
        </div>
    )
}
