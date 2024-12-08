

import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Skills from "../components/skill";




export default function Home() {
  return (
   <>

<NavBar/>
<Portfolio/>
<Skills/>
<About/>
<Contact/>
<Footer/>








  {/* Navbar */}

  {/* <div className="flex bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg fixed w-full z-10 h-14 font-bold ">
    <Image className="bg-transparent bg-opacity-75 bg-white" src={'/images/ahmed.jpg'} alt="" width={60} height={70}/>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-3x3">
      <Link href={"http://localhost:3000"} className="mr-5 hover:text-blue-500 ">Portfolio</Link>
      <Link href={"/Skills"} className="mr-5 hover:text-blue-500  ">Skills</Link>
      <Link href={""} className="mr-5 hover:text-blue-500  ">About</Link>
      <Link href={"/"} className="mr-5 hover:text-blue-500  ">Contact</Link>
            </nav>

            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-slate-300 hover:text-white rounded text-base mt-1 md:mt-o mr-10">Log in</button>
        </div>

{/* content */}

{/* <div>
            <div className= "bg-slate-300 h-screen ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium pt-72 ml-12 "> welcome to my website</h1>
            <p className="ml-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti ad et nulla neque<br/>
             consectetur nisi labore quod! Quisquam est incidunt nulla expedita eligendi facere distinctio,<br/>
             officiis enim quia.</p>
              </div>

             <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 absolute right-0  mr-14 top-48">
              <Image className="rounded-full" src={'/images/otp.jpeg'} alt="logo" width={600} height={200}/>

             </div>
            
            </div> */}

{/* skills */}

{/* <div className="bg-slate-300 h-screen Skills"> 
    <div className=" h-96 w-96 overflow-hidden shadow-lg bg-slate-200 ml-32 rounded-3xl">
  <img className="h-72 ml-14 mt-10" src="/images/logo.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 ml-36">HTML</div>
</div>
</div>

<div className="flex justify-center ml-12 -mt-96"> 
<div className="h-96 w-96  overflow-hidden shadow-lg bg-slate-200 rounded-3xl">
  <img className="h-72 ml-14 mt-10" src="/images/rttt.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 ml-36">CSS</div>
  </div>
</div>
</div>

<div className="flex justify-end -mt-96 mr-20"> 
<div className="h-96 w-96  overflow-hidden shadow-lg bg-slate-200 rounded-3xl">
  <img className="h-72 ml-14 mt-10" src="/images/htt.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 ml-36">TYPESCRIPT</div>
  </div>
</div>
</div>
    </div>   */}

   </>
  );
}
