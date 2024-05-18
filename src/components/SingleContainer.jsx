import React from "react";
import { FormatPrice } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function SingleContainer({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addItem({ product: { ...product, amount: quantity } }));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));

  };


  return (
    <div className="flex gap-[125px] items-center mb-40 mt-14">
      <img
        src={product.image.desktop}
        alt={product.name}
        className="max-w-[540px] rounded-xl"
      />
      <div>
        {product.new && (
          <span className="text-sm tracking-[10px] text-orang mb-3">
            NEW PRODUCT
          </span>
        )}
        <h1 className="h1 font-bold clear-start mb-8">{product.name}</h1>
        <p className="p opacity-85 mb-8">{product.description}</p>
        <p className="p opacity-85 mb-[47px] font-bold tracking-wider text-lg">
          {FormatPrice(product.price)}
        </p>
        <div className="flex gap-4">
          <div className="flex max-w-[120px]">
            <button
              className="h-12 w-10 text-center border-none bg-base-300 font-extrabold hover:opacity-65"
              onClick={handleDecrement}
            >
              <span className="opacity-65 hover:opacity-100">-</span>
            </button>
            <input
              type="text"
              className="h-12  w-10 text-center border-none bg-base-300"
              value={quantity}
              readOnly
            />
            <button
              className="h-12 w-10 text-center border-none bg-base-300 font-extrabold hover:opacity-65 "
              onClick={handleIncrement}
            >
              <span className="opacity-65 hover:opacity-100">+</span>
            </button>
          </div>
          <button onClick={handleAddToCart} className="bg-orang hover:bg-hoverOrange btn rounded-none min-w-40 border-0 text-white font-semibold text-xs">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
