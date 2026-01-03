import { CiLocationArrow1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Hero = ({ onHireClick, onWhatsAppClick }) => {
  return (
    <div>

    <div className="absolute top-18 w-full h-full flex justify-center md:top-0">
      {/* <div className="absolute bg-red-700 w-[80vw] h-[80vw] md:w-[35vw] md:h-[35vw] rounded-full" /> */}

      <h1 className="text-[29vw] relative z-1 font-[font1] text-white md:text-white/50">Developer</h1>
    </div>

    <div className="absolute md:top-150 md:block flex flex-col  items-center w-full justify-center  top-50 mt-5  px-5">

        <div className="   md:block mb-3 ">
            <div className="flex text-white text-center">

          <FaStar className="pt-2" />
          <p className="">MERN STACK DEVELOPER</p>
            </div>
          <p className="hidden md:block ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <button
          onClick={onWhatsAppClick}
          className="border relative z-8 px-4 justify-center items-center text-2xl h-10 uppercase text-center rounded-4xl text-white flex gap-2"
        >
          Hire now <CiLocationArrow1 />
        </button>
      </div>
        <div className="absolute top-75 md:flex flex justify-center md:w-full md:justify-center md:h-[60vw] md:top-20">
            <div className="bg-gray-500  md:justify-center md:items-center overflow-hidden hidden md:flex uppercase relative z-0 md:w-120 md:h-120 md:rounded-full">
                
                <h1 className="text-black text-6xl font-[font2]">developer </h1>
                 
            </div>
            <img className="relative z-2" src="hero2.png" alt="hero img" />
        </div>
      
    </div>
  );
};

export default Hero;
