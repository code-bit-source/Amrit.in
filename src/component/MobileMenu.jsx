import SideBar from "./SideBar";

const MobileMenu = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-zinc-900 z-50 transition-all duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
    >
      <SideBar close={onClose} />
    </div>
  );
};

export default MobileMenu;
