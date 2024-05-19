import React from "react";
import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="align-content pt-[75px] pb-12">
        <div className="flex justify-between">
          <img src="/src/assets/home/audiophile.svg" />
          <div className="flex gap-[34px]">
            <NavLinks />
          </div>
        </div>

        <div className="mt-[36px] flex justify-between items-center">
          <div className="max-w-[540px]">
            <p className="opacity-65 font-medium text-base text-white mb-[56px]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="opacity-65 font-bold text-base text-white ">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-4">
            <img src="/src/assets/shared/desktop/icon-facebook.svg" alt=""  className="cursor-pointer" />
            <img src="/src/assets/shared/desktop/icon-twitter.svg" alt="" className="cursor-pointer" />
            <img src="/src/assets/shared/desktop/icon-instagram.svg" alt="" className="cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
}
