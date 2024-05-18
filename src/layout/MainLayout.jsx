import { Outlet, useLocation } from "react-router-dom"; // useLocation hook'ini import qilamiz
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AudioContainer from "../components/AudioContainer";

export default function MainLayout() {
  const location = useLocation();
  
  const isHome = location.pathname === "/"; 

  return (
    <>
      {!isHome && <Navbar bgimg='bg-black'/>}
      <main>
        <Outlet />
      </main>
      <footer >
        <AudioContainer/>
        <Footer />
      </footer>
    </>
  );
}
