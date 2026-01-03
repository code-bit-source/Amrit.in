import { FaUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = ({ onHireClick, onMenuClick }) => {
  return (
    <div className="flex  justify-between items-center py-5 px-5">
      <h1 className="text-4xl font-[font1] uppercase">
        Amrit<span className="text-white">~</span>
        <span className="text-red-700">kumar.</span>
      </h1>

      <div className="hidden md:flex gap-10 uppercase">
        <span>home</span>
        <span>about</span>
        <span>contact</span>
        <span className="underline">readme</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onHireClick}
          className="hidden sm:block relative z-8 uppercase bg-black text-white px-4 py-1 rounded-4xl"
        >
          hire me
        </button>

        <span className="text-xl border p-2 rounded-4xl">
          <FaUser />
        </span>

        <span className="md:hidden text-2xl" onClick={onMenuClick}>
          <CiMenuFries />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
