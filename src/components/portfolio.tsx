import Image from "next/image"
import React from "react"

export default function Portfolio(){
    return(
        <div>
            <div className= "bg-slate-300 h-screen">
            <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold pt-72 ml-24 "> welcome to my website</h1>
            <p className="ml-24">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
             Cumque corrupti ad et nulla neque consectetur nisi <br/>
             incidunt nulla expedita eligendi facere distinctio,<br/>
             officiis enim quia.</p>
              </div>

             <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 absolute right-0  mr-14 top-48">
              <Image className="rounded-full" src={'/images/otp.jpeg'} alt="logo" width={600} height={200}/>

             </div>
            
            </div>
    )
}