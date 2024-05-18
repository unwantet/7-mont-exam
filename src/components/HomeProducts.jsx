import React from "react";
import "../style/topography.css";

export default function HomeProducts() {
  return (
    <>
      <div className="pt-32 bg-orang pl-28 pr-[90px] bgimg rounded-xl mt-[168px]">
        <div className="flex gap-[138px] ">
          <img
            src="src/assets/home/desktop/image-speaker-zx9.png"
            alt=""
            className="max-w-[410px]"
          />
          <div className="max-w-[349px]">
            <h1 className="text-white section-title mb-6">ZX9 SPEAKER</h1>
            <p className="opacity-65 font-medium text-base mb-10 ">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="bg-black hover:bg-gray-800 min-w-[160px] btn rounded-none max-w-40 border-0 text-white font-semibold text-xs">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 min-h-[320px] pt-28 pl-24 speaker-bg rounded-xl">
        <div>

            <h1 className="text-black section-tit mb-8">ZX7 SPEAKER</h1>
            <button className="bg-black hover:bg-gray-800 min-w-[160px] btn rounded-none max-w-40 border-0 text-white font-semibold text-xs">
              SEE PRODUCT
            </button>
        </div>
      </div>
      <div className="min-h-[320px] flex gap-8 mt-12">
            <img src="src/assets/home/desktop/image-earphones-yx1.jpg" alt="" className="max-w-[540px] rounded-xl" />
            <div className="bg-base-300 w-full rounded-xl pt-28 pl-24">

            <h1 className="text-black section-tit mb-8">YX1 EARPHONES</h1>
            <button className="bg-black hover:bg-gray-800 min-w-[160px] btn rounded-none max-w-40 border-0 text-white font-semibold text-xs">
              SEE PRODUCT
            </button>
        </div>
            
      </div>
    </>
  );
}
