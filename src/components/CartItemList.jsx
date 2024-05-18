import React from 'react'
import {FormatPrice} from '../utils'

export default function CartItemList({item,items}) {

    return (
              <div className='bg-base-300 min-w-[267px] p-6 rounded-l-xl'>
                <div
                  className="flex justify-between items-center mb-3 border-b-1"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image.desktop}
                      alt={item.cartName}
                      className="w-16 h-16 rounded-xl"
                    />
                    <div>
                      <h2 className="font-bold">{item.cartName}</h2>
                      <p className="font-bold text-sm opacity-75">
                        {FormatPrice(item.price)}
                      </p>
                    </div>
                  </div>
                  <p className="text-[15px] opacity-60 font-bold">
                    x{item.amount}
                  </p>
                </div>
                <p className='text-center border-t border-gray-500'>and {items.length-1} other items(s)</p>

              </div>
    )
}
