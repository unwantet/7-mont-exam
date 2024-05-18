import "../style/components.css";
import "../style/topography.css";
import  '../assets/home/desktop/image-hero.jpg'
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


export default function HomeEnter() {

  return (
    <div className="bg-img w-full font-custom text-white" >
        <Navbar/>

      <div className="align-content h-screen">
        <div className="max-w-96 flex flex-col gap-6 pt-32 pb-40">

        <h4 className="tracking-[10px] text-white opacity-50 text-xs">
          NEW PRODUCT
        </h4>
        <h1 className="text-white section-title ">XX99 Mark II Headphones</h1>
        <p className="opacity-65 font-medium text-base">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to='/product/4' className="bg-orang hover:bg-hoverOrange btn rounded-none max-w-40 border-0 text-white font-semibold text-xs">
          SEE PRODUCT
        </Link>
        </div>
      </div>
    </div>
  );
}
