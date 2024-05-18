import React from "react";
import AdProducts from "../components/AdProducts";
import CategoryList from "../components/CategoryList";
import CategoryReverse from "../components/CategoryReverse";
import { useFetch } from "../hooks/useFetch";

export default function Speakers() {
  const { data,isPending , error } = useFetch(
    "http://localhost:3000/products?category=speakers"
  );
  if (isPending) {
    return <span className="ml-[650px] w-20 h-20 loading loading-spinner loading-lg"></span>;
  }
  if (error) {
    return <Error/>;
  }
  const sortedData = data ? [...data].sort((a, b) => b.new - a.new) : [];

  return (

    <>
      <div className="">
        <div className="bg-black">
            <div className="align-content py-[98px] text-center mb-40">
                <h1 className="text-4xl font-semibold text-white">SPEAKERS</h1>
            </div>

        </div>
        <div className="align-content">

        {data &&
          sortedData.map((product, index) => (
              <div key={product.id}>
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
