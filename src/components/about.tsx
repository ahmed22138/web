import Image from "next/image"
import React from "react"

export default function About(){
    return(
        <div className="bg-slate-300 h-screen">
            <div className="ml-32  ">
            <Image src={'/images/oop.jpeg'} alt="photo" width={600} height={600}/>
            </div>
            <div>
                <h1 className="flex justify-center -mt-96 font-bold text-5xl ml-44">About</h1>
                <br/>
                <p className="flex justify-end mr-24">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cumque in eum error<br/>
                     deserunt similique nisi assumenda obcaecati aliquid pariatur quisquam, ex doloremque <br/>
                    officia expedita magnam illum, corrupti, quod facilis. Cum ratione est amet excepturi<br/>
                     enim quidem officiis, obcaecati id temporibus consectetur facere nulla cupiditate ad<br/>
                   dolor sapiente commodi, tenetur labore doloribus nam molestiae reprehenderit, accusamu<br/>
                 ipsa fugiat dicta! Ea et necessitatibus eaque officia saepe rerum commodi, eveniet quidem <br/>
                 incidunt. Fuga laboriosam in at voluptatem laborum cupiditate accusamus non repudiandae? <br/>
                 Non temporibus quis, ipsam perferendis laboriosam consectetur similique eos facere magni <br/>
                 harum laudantium quibusdam. Nam iusto sequi exercitationem qui.
                 
                </p>
            </div>
            
        </div>
    )
}