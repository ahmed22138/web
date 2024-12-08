import React from 'react'
import Image from 'next/image'

export default function Skills(){
    return(
      <>
      <div className="bg-slate-300 h-screen "> 
    <div className=" h-96 w-96 overflow-hidden shadow-lg bg-slate-200 ml-32 rounded-3xl">
  <Image className="h-72 ml-14 mt-10" src={"/images/logo.png"} alt="Sunset in the mountains" width={300}  height={72} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 ml-36">HTML</div>
</div>
</div>

<div className="flex justify-center ml-12 -mt-96"> 
<div className="h-96 w-96  overflow-hidden shadow-lg bg-slate-200 rounded-3xl">
  <Image className="h-72 ml-14 mt-10" src={"/images/rttt.png"} alt="Sunset in the mountains"  width={300} height={72} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 ml-36">CSS</div>
  </div>
</div>
</div>

<div className="flex justify-end -mt-96 mr-20"> 
<div className="h-96 w-96  overflow-hidden shadow-lg bg-slate-200 rounded-3xl">
  <Image className="h-72 ml-14 mt-10" src={"/images/htt.png"} alt="Sunset in the mountains" width={300} height={72} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 ml-36">TYPESCRIPT</div>
  </div>
</div>
</div>
    </div> 
    </>
    )
}