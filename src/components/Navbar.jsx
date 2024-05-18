import NavLinks from "./NavLinks";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  clearCart, editItem } from "../features/cart/cartSlice";
import { FormatPrice } from "../utils";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/useContextGlobal";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Navbar({ bgimg }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
  const { user} = useContext( GlobalContext );

    const signOutFunc = () => {
        signOut(auth).then(() => {
            console.log("Logout");
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className={`font-custom ${bgimg}`}>
      <div className="navbar align-content border-b-2 border-gray-700 h-24">
        <div className="navbar-start">
          <img
            src="http://localhost:5173/src/assets/home/audiophile.svg"
            alt="logo"
          />
        </div>
        <div className="navbar-center">
          <div className="flex gap-7">
            <NavLinks />
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4 items-center">

          <button
            onClick={() => document.getElementById("my_modal_2").showModal()} className='indicator'
            >
            <img
              src="http://localhost:5173/src/assets/shared/desktop/icon-cart.svg"
              alt=""
              />
              <span className='badge badge-warning indicator-item w-2'>{numItemsInCart}</span>
          </button>
          <div className="dropdown dropdown-end flex items-center gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt={user.displayName ? user.displayName : "user image"} src={user.photoURL} className="w-6 h-6" />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-40">
                    <li><button onClick={signOutFunc} className="btn btn-sm">Logout</button></li>
                </ul>
                </div>
              </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box max-w-[377px]">
              <div>
              {cartTotal !== 0  ? <div className="flex justify-between mb-8">
                   <h1 className="font-bold text-lg">CART ({cartItems.length})</h1>
                  <button
                    onClick={() => dispatch(clearCart())}
                    className="link text-[15px] opacity-80"
                  >
                    Remove all
                  </button>
                </div>: <div></div>}
                {cartTotal !== 0  ? cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-6"
                  >
                    <div className="flex gap-4 items-center">
                      
                    <img
                      src={item.image.desktop}
                      alt={item.cartName}
                      className="w-16 h-16 rounded-xl"
                      />
                    <div>

                      <h2 className="font-bold">{item.cartName}</h2>
                      <p className="font-bold text-sm opacity-75">{FormatPrice(item.price)}</p>
                    </div>
                      </div>
                      <div className="max-w-24 flex justify-center items-center">
                      <button onClick={() =>dispatch(editItem({ id: item.id, amount: item.amount - 1 }))} className='text-center border-none bg-base-300 font-extrabold hover:opacity-65 w-8 h-8'>
                      <span className="opacity-65 hover:opacity-100">-</span>
                      </button>

                      <input type="text" value={item.amount} readOnly className='text-center font-semibold border-none bg-base-300 w-8 h-8'/>
                      <button onClick={() =>dispatch(editItem({ id: item.id, amount: item.amount + 1 }))} className='text-center border-none bg-base-300 font-extrabold hover:opacity-65 w-8 h-8'>
                      <span className="opacity-65 hover:opacity-100">+</span>
                      </button>
                      </div>
                    </div>
                  
                )) : 
                  <div className="flex justify-center items-center">
                    <p className="font-bold text-sm opacity-75 text-black">No items in cart</p>
                  </div>
                }
                {cartTotal !==0 ? 
                <div>
                  <p className="flex justify-between mb-6">
                    <span>TOTAL</span> 
                    <span className="font-bold">{FormatPrice(cartTotal)}</span>
                    </p>
                    <Link to='/checkout' className="bg-orang hover:bg-hoverOrange btn rounded-none w-full border-0 text-white font-semibold text-xs">
                      CHECKOUT
                    </Link>

                </div>: <div></div> }
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
