import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    // create nav wrapper
    <nav className="flex bg-[#003580] h-[6rem]  border-gray-200 px-[3rem] md:px-[3rem] sm:px-4 py-2.5  dark:bg-gray-900">
      {/* Navcontainer */}
      <div className="flex flex-1  flex-row justify-between items-center">
        {/* Brand span */}
        <div className="flex-1">
          <img className="h-[50px] cursor-pointer bg-white rounded-lg" src={logo} alt="logo" />
        </div>

        {/* MenuItems */}
        <div className="flex flex-row items-center flex-2">
          <button
            type="button"
            className="p-3 w-[6rem] mr-6 bg-white text-blue-700 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white"
          >
            Register
          </button>
          <button
            type="button"
            className="p-3 w-[6rem] mr-6 bg-white text-blue-700 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white"
            >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
