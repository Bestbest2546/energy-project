"use client";
import Sidebarconst from "./sidebar.const";

const Sidebar = () => {
  const {isSidebarOpen,toggleSidebar} = Sidebarconst();

  return (
    <div
      className="flex flex-row items-center"
      aria-label="Sidebar"
    >
      <div
        className={`transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "w-60" : "w-0"
        } border-2 h-screen`}
      ></div>
      <button
        onClick={toggleSidebar}
        className="w-4 h-10 border-2 hover:bg-blue-500 rounded-r-lg "
      >
        {isSidebarOpen ? "<" : ">"}
      </button>
    </div>
  );
};

export default Sidebar;
