import React from "react";
import '../style/topography.css'

export default function AudioContainer() {
  return (
    <div className="flex gap-[125px] my-[200px] align-content">
      <div className="max-w-[445px] pt-[147px] ">
        <h1 className="font-custom font-bold text-4xl mb-8">
          BRINGING YOU THE <span className="text-orang">BEST</span> AUDIO GEAR
        </h1>
        <p className="p">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src="http://localhost:5174/src/assets/shared/desktop/image-best-gear.jpg" alt="image-best-gear" className=" rounded-xl" />
    </div>
  );
}
