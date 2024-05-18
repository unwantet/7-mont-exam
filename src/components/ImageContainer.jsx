import React from "react";

export default function ImageContainer({ product }) {



  return (
    <>
        <div className="flex gap-[30px] pt-40">
            <div className="">
                <img src={product.gallery.first.desktop} alt=""  className="rounded-xl mb-8" />
                <img src={product.gallery.second.desktop} alt="" className="rounded-xl"/>
            </div>
            <img src={product.gallery.third.desktop} alt="" className="rounded-xl"/>
        </div>

    </>
  );
}
