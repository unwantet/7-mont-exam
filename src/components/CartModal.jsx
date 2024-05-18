

<div className="flex max-w-[120px]">
<button 
  className="h-12 w-10 text-center border-none bg-base-300 font-extrabold hover:opacity-65"
  onClick={() => item.amount > 1 && dispatch(editItem({ cartID: item.cartID, amount: item.amount - 1 }))}
>
  <span className="opacity-65 hover:opacity-100">-</span>
</button>
<input
  type="text"
  className="h-12 w-10 text-center border-none bg-base-300"
  value={item.amount}
  readOnly
/>
<button 
  className="h-12 w-10 text-center border-none bg-base-300 font-extrabold hover:opacity-65"
  onClick={() => dispatch(editItem({ cartID: item.cartID, amount: item.amount + 1 }))}
>
  <span className="opacity-65 hover:opacity-100">+</span>
</button>
</div>