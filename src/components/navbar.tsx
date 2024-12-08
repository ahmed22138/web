import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function NavBar(){
    return(
        <div className="flex bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg fixed w-full z-10 h-14 font-bold ">
    <Image className="bg-transparent bg-opacity-75 bg-white" src={'/images/ahmed.jpg'} alt="" width={60} height={70}/>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-3x3">
      <Link href={"/"} className="mr-5 hover:text-blue-500 ">Portfolio</Link>
      <Link href={"/"} className="mr-5 hover:text-blue-500  ">Skill</Link>
      <Link href={"/"} className="mr-5 hover:text-blue-500  ">About</Link>
      <Link href={"/"} className="mr-5 hover:text-blue-500  ">Contact</Link>
            </nav>

            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-slate-300 hover:text-white rounded text-base mt-1 md:mt-o mr-10">Log in</button>
        </div>
    )
}