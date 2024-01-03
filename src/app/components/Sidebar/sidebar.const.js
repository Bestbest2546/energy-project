import  { useState } from "react";


export default function sidebar_const() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return {
        isSidebarOpen,
        toggleSidebar
    };
};