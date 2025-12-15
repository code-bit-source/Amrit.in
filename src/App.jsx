import { CiLocationArrow1, CiMenuFries } from "react-icons/ci"
import { FaStar, FaUser } from "react-icons/fa"
import { GiJewelCrown } from "react-icons/gi"
import { useState } from "react"
import Work from "./component/Work"
import SideBar from "./component/SideBar"
import Footer from "./component/Footer"
import MouseEffect from "./component/MouseEffect"
import PageLoad from "./component/PageLoad"


const App = () => {
  const [first, setfirst] = useState(false)
  const handleHireMeClick = () => {
  const email = "amritmr760@gmail.com"; // <-- tumhara email
  const subject = "Let's Work Together!";
  const body = `Hey Amrit,\n\nI checked out your work and I’m interested in hiring you for a project.\nLet's connect and discuss the details. 🚀\n\nCheers,`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  try {
    window.location.href = mailtoLink;
  } catch (error) {
    console.error("Failed to open email client:", error);
  }
};

const refresh =()=>{
 window.location.reload();
}

  const firstHandler = () => {
    
    setfirst((prev) => !prev)
  }

  const handleClick = () => {
  const phoneNumber = "919315868930"; // <-- with country code, no +
  const message = "Mujhe ek website banwani hai";

  if (!phoneNumber) {
    console.error("WhatsApp phone number is missing!");
    return;
  }

  const encodedMessage = encodeURIComponent(message || "Hello 👋");
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  try {
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("Failed to open WhatsApp:", error);
  }
};

  return (
    <>
    <div className="relative w-screen min-h-screen overflow-hidden bg-zinc-400">
      {/* navbar */}
      
       <div className="flex justify-between overflow-hidden items-center py-5 px-5 text-black">
      {/* Logo */}
      <div>
        <h1 onClick={refresh} className="font-[font1] z-10 relative text-3xl sm:text-4xl md:text-5xl uppercase">
          Amrit<span className="text-white">~</span>
          <span className="text-red-700">kumar.</span>
        </h1>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-10 lg:gap-20 text-sm md:text-md uppercase font-light">
        <h1 className="px-2 py-1 font-normal rounded-4xl underline h-fit hover:text-red-700 transition">home</h1>
        <h1 className="hover:text-red-700 transition">about</h1>
        <h1 className="hover:text-red-700 transition">contact us</h1>
        <h1 className="hover:text-red-700 transition underline cursor-pointer">readme</h1>
        
      </div>

      {/* Right Buttons */}
      <div className="flex items-center  ">
        <h1 onClick={handleHireMeClick} className="hidden z-10 hover:text-black transition-all duration-300 cursor-pointer sm:block text-base sm:text-xl bg-black text-white md:text-2xl uppercase border border-zinc-800 rounded-4xl px-3 py-1 font-light hover:bg-zinc-100 ">
          hire me
        </h1>
        <h1 className="text-xl sm:text-2xl border border-zinc-800 rounded-4xl p-2">
          <FaUser />
        </h1>

        {/* Hamburger Menu (Visible on Mobile Only) */}
        <h1 className="text-2xl md:hidden py-1 z-20 px-2">
          <CiMenuFries onClick={firstHandler} />
        </h1>
      </div>
    </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-zinc-900 text-white shadow-lg transition-all duration-500 z-50
        ${first ? "right-[0]" : "right-[-100%]"}`}
      >
        <div className="p-5 flex flex-col gap-6">
          {/* <button
            onClick={firstHandler}
            className="self-end mx-5 text-4xl text-gray-400 relative z-10 hover:text-white"
          >
            ✕
          </button> */}

            <SideBar close={firstHandler} />

         
        </div>


      </div>

      {/* Hero Section */}
      <div className="absolute top-0 w-full overflow-hidden h-full flex items-center justify-center">


        <div className="absolute  bg-red-700 md:w-[35vw] md:h-[35vw] w-[80vw] h-[80vw]  rounded-full z-10"></div>
        <div className="absolute bg-transparent border-1 border-zinc-800 w-[92vw] h-[92vw] md:w-[42vw] md:h-[42vw] rounded-full z-10"></div>

{/* first  */}
        <div className="absolute md:block flex flex-col uppercase top-[10%] text-white z-[11]">
          <div className="absolute w-full flex justify-between mt-[2vw] text-zinc-800 px-5">
            <div className="md:flex  ">
              <h1 onClick={handleHireMeClick} className="md:text-[1vw] z-10 text-md   uppercase border-1 border-zinc-800 rounded-4xl h-fit px-3 py-1 font-light">
                hire me
              </h1>
              {/* <h1 className="md:text-[1vw] text-md   uppercase md:border-1 md:border-zinc-800 rounded-4xl h-fit px-3 py-1 font-light">
                action
              </h1> */}
              <h1 className="md:text-[1vw] text-md   text-white bg-black uppercase border-1 border-zinc-800 rounded-4xl h-fit px-3 py-1">
                projects
              </h1>
            </div>
            <div>
              <h1 className="md:text-[1vw] text-md   uppercase border-1 border-zinc-800 rounded-4xl h-fit px-3 py-1 font-light">
                latest work
              </h1>
            </div>
          </div>

{/* second  */}
          <div className="md:flex hidden  -rotate-1 justify-between md:mt-[2vw] w-full font-[font1] text-black absolute text-xl top-[10%] md:text-[2vw] px-5">
            <h1>Get</h1>
            <h1>ready</h1>
            <h1 className="-mt-25 hidden md:block text-[5vw]">
              <GiJewelCrown />
            </h1>
            <h1>for</h1>
            <h1>growth</h1>
          </div>


{/* developer  */}
          <h1 className="text-[29vw] font-[font1] md:mt-[2vw] mt-25 -rotate-1 text-black">
            Developer
          </h1>
        </div>


{/* bottom part  */}

        <div className="w-full md:mt-[38vw] md:flex mt-[68vh] justify-between px-5">
          <div className="w-72 hidden md:block mx-3">
            <div className="flex text-center   gap-3 text-xl">
              <h1 className="text-center py-1">
                <FaStar />
              </h1>
              <h1>MERN STACK DEVELOPER</h1>
            </div>
            <p>Turning ideas into functional, responsive websites.</p>
          </div>

          <div className="md:w-80 flex  items-center justify-between">
            <h1 onClick={handleClick} className="border-1 z-20 relative cursor-pointer  border-zinc-800 h-fit px-3 py-1 text-3xl font-[font1] w-fit rounded-4xl flex gap-1">
              book now <CiLocationArrow1 className="text-3xl" />
            </h1>

            <div className="flex items-center">
              <h1 className="px-3 py-2 h-fit border-1 border-zinc-600 text-xl w-fit rounded-full -rotate-12 bg-black text-white">
                01
              </h1>
              <img src="path.png" className="w-25 -ml-5 rotate-12" alt="" />
            </div>
          </div>

        </div>

              
        <img
          className="absolute md:w-[28vw] top-[20%] w-[68vw] md:rounded-none rounded-full z-20 md:top-[20%]"
          src="hero.png"
          alt=""
        />
      </div>


    </div>




<div id="cross" className="bg-zinc-400   w-screen min-h-screen mt-0 md:-mt-1 ">
    <div className="h-32 rotate-2 bg-zinc-900">
    <h1></h1>
    </div>


    <div className="h-32 -mt-30 -rotate-4 flex z-[20] relative justify-center items-center bg-red-600">
    <h1 className=" uppercase md:text-black text-white text-7xl font-[font2]">-feel what you work-</h1>
    </div>

<MouseEffect/>

{/* work section  */}

<Work />
{/* <About /> */}

<section className="relative bg-[#0b0b0b]  pb-20 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Section label */}
    <p className="text-sm uppercase tracking-widest text-red-500 mb-4">
      Project Inquiry
    </p>

    <h2 className="text-4xl md:text-5xl font-[font1] font-semibold text-white mb-6">
      Let’s Discuss Your Project
    </h2>

    <p className="text-gray-400 text-lg font-[font2] leading-relaxed max-w-3xl mx-auto mb-12">
      If you are planning to build a website, web application, or any custom
      digital product, please share your requirements with us. Our team will
      carefully review your submission and contact you to discuss the next
      steps.
    </p>

    <button
      onClick={() =>
        window.open("https://project-form-rosy.vercel.app/", "_blank")
      }
      className="inline-flex items-center gap-3 border border-red-600 text-red-500 px-10 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-[0_8px_24px_rgba(220,38,38,0.35)]"
    >
      Submit Project Details
      <span className="text-lg">→</span>
    </button>

    <p className="mt-10 text-sm text-gray-500">
      Your information is kept confidential. We respond within 24–48 business hours.
    </p>

  </div>
</section>




<Footer />


</div>


<PageLoad />
    </>
  )
}

export default App
