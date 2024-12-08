


export default function Contact(){
    return(
        <div>
            <div className="bg-slate-300 h-screen -mt-16 ">
                <h1 className=" flex text-5xl font-bold justify-center">Contact</h1>
                <br/>
                <p className="flex justify-center">You can also fill out a Contact Form or email us at support@textline.com</p>
    
             <div className="absolute left-1/3 -ml-12 pt-10">
              <label htmlFor="name"></label>
              <input className="rounded border focus:border-slate-300 ring-2  w-72 h-10" type="name" id="name" name="text" required  placeholder="Name" />
             </div>

             <div className="absolute left-2/3 -ml-60 pt-10">
              <label htmlFor="name"></label>
              <input className="rounded border focus:border-slate-300 ring-2 w-72 h-10" type="name" id="name" name="text" required  placeholder="Email" />
             </div>

             <div className="flex justify-center pt-24">
              <label htmlFor="Message"></label>
              <textarea className="rounded  border focus:border-slate-300 ring-2 w-2/5 h-44 "  id="text" name="text" required placeholder="Message" />
             </div>
             <button className="flex  mx-auto bg-black text-white  border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-4">Send Me</button>
            </div>
        </div>
    )
}