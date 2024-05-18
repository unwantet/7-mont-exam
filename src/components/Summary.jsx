import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, editItem } from "../features/cart/cartSlice";
import { FormatPrice } from "../utils";
import { Link } from "react-router-dom";
import CartItemList from "./CartItemList";

export default function Summary() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const shipping = useSelector((state) => state.cart.shipping);
  const tax = useSelector((state) => state.cart.tax);
  const orderTotal = useSelector((state) => state.cart.orderTotal);
  console.log(cartItems);


  return (
    <div className="bg-white rounded-lg max-h-[612px] shadow-sm px-[33px] py-8 min-w-[350px] ">
      <h1 className="mb-8 text-lg font-semibold ">SUMMARY</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-6">
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
          <p className="text-[15px] opacity-60 font-bold">x{item.amount}</p>
        </div>
      ))}
      <p className="flex justify-between mb-2">
        <span className="opacity-60 text-sm">TOTAL</span>
        <span className="font-bold text-sm">${cartTotal}</span>
      </p>
      <p className="flex justify-between mb-2">
        <span className="opacity-60 text-sm">SHIPPING</span>
        <span className="font-bold text-sm">${shipping}</span>
      </p>
      <p className="flex justify-between mb-3">
        <span className="opacity-60 text-sm">VAT (INCLUDED)</span>
        <span className="font-bold text-sm">${tax}</span>
      </p>
      <p className="flex justify-between mb-2">
        <span className="opacity-60 text-sm">GRAND TOTAL</span>
        <span className="font-bold text-sm text-orang">${orderTotal}</span>
      </p>
      <button
        className="bg-orang hover:bg-hoverOrange btn mt-8 rounded-none w-full border-0 text-white font-semibold text-xs"
        onClick={() => document.getElementById("my_modal_23").showModal()}
      >
        CONTINUE & PAY
      </button>
      <dialog id="my_modal_23" className="modal">
        <div className="modal-box">
          <div className="max-w-[540px]">
            <div className="max-w-[300px]">
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                  <path
                    stroke="#FFF"
                    stroke-width="4"
                    d="m20.754 33.333 6.751 6.751 15.804-15.803"
                  />
                </g>
              </svg>
              <h1 className="font-semibold text-[32px] mt-8">
                THANK YOU FOR YOUR ORDER
              </h1>
              <p className="p tracking-tight mt-8">
                You will receive an email confirmation shortly.
              </p>
            </div>
            <div className="flex rounded-xl min-h-[140px] mt-8 ">
            <CartItemList item={cartItems[0]} items={cartItems} />
            <div className="bg-black pt-10 pl-8 min-w-[198px] rounded-r-xl">
                <h1 className="font-bold text-white opacity-50">GRAND TOTAL</h1>
                <p className="font-bold text-white">{FormatPrice(orderTotal)}</p>
            </div>
            </div>
          </div>
            <Link to='/' onClick={() => dispatch(clearCart())} className="mt-[46px] bg-orang hover:bg-hoverOrange btn rounded-none w-full border-0 text-white font-semibold text-xs">
                      BACK TO HOME
            </Link>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
