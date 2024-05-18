import NavLinks from "./NavLinks";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart, editItem } from '../features/cart/cartSlice';
import { FormatPrice } from "../utils";

export default function Navbar({ bgimg }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const shipping = useSelector((state) => state.cart.shipping);
  const tax = useSelector((state) => state.cart.tax);
  const orderTotal = useSelector((state) => state.cart.orderTotal);




  return (
    <div className={`font-custom ${bgimg}`}>
      <div className="navbar align-content border-b-2 border-gray-700 h-24">
        <div className="navbar-start">
          <img
            src="http://localhost:5174/src/assets/home/audiophile.svg"
            alt="logo"
          />
        </div>
        <div className="navbar-center">
          <div className="flex gap-7">
            <NavLinks />
          </div>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
           <img
            src="http://localhost:5174/src/assets/shared/desktop/icon-cart.svg"
            alt=""
          />
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                      <div>
          <h1>Your Cart</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <img src={item.image.desktop} alt={item.name} className="w-20 h-20" />
              <div>
                <button onClick={() => dispatch(editItem({ id: item.id, amount: item.amount + 1 }))}>+</button>
                <input type="text" value={item.amount} readOnly />
                <button onClick={() => dispatch(editItem({ id: item.id, amount: item.amount - 1 }))}>-</button>
                <h2>{item.name}</h2>
                <p>{FormatPrice(item.price)}</p>
                <p>Quantity: {item.amount}</p>
                <button onClick={() => dispatch(removeItem({ id: item.id }))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div>
            <p>Subtotal: {FormatPrice(cartTotal)}</p>
            <p>Shipping: {FormatPrice(shipping)}</p>
            <p>Tax: {FormatPrice(tax)}</p>
            <p>Total: {FormatPrice(orderTotal)}</p>
          </div>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>

            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          
        </div>
      </div>
    </div>
  );
}
