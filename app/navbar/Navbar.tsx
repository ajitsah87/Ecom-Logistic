import Image from "next/image";
import React from "react";
import logo from "@/public/loggo.png"
const Navbar = () => {
  return (
    <>
    <div className="h-24 bg-[#aaaaaa] text-black w-full fixed top-0 ">
    <div className="flex items-center justify-center">
    <div className="w-12 h-12">
        <Image
               
                  className="h-full w-full rounded-md object-cover"
                  src={logo}
                  alt={"404"}
                />
    </div>
    </div>
  </div>
  </>


  )
  
  

}

export default Navbar;
