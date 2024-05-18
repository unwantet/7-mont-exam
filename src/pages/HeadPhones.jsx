import React from "react";
import AdProducts from "../components/AdProducts";
import CategoryList from "../components/CategoryList";
import CategoryReverse from "../components/CategoryReverse";
import { useFetch } from "../hooks/useFetch";

export default function HeadPhones() {
  const { data } = useFetch(
    "http://localhost:3000/products?category=headphones"
  );
  const sortedData = data ? [...data].sort((a, b) => b.new - a.new) : [];

  return (

    <>
      <div className="">
        <div className="bg-black">
            <div className="align-content py-[98px] text-center mb-40">
                <h1 className="text-4xl font-semibold text-white">HEADPHONES</h1>
            </div>

        </div>
        <div className="align-content">

        {data &&
          sortedData.map((product, index) => (
              <div key={product.image}>
             {index == 1 ? (
                 <CategoryReverse product={product}/>
                 ) : (
                     <CategoryList product={product} />
                     )}
            </div>
          ))}
          <AdProducts/>
          </div>
      </div>
    </>
  );
}
