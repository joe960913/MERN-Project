import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//react-icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { currentUser } = useContext(AuthContext)
  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  //navItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "About", path: "/about" },
    { link: "Blog", path: "/blog" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300" style={{ zIndex: 999 }}>
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 z-50 bg-slate-100/20 backdrop-filter backdrop-blur-[20px]" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/**logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>
          {/**nav links for large devices*/}
          <div className="md:flex space-x-8 hidden">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {item.link}
              </Link>
            ))}
          </div>
          {/**btn for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
            <div>
            {currentUser ? currentUser.email : ""}
            </div>
          </div>
          {/**btn for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-black"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
          {/**nav links for mobile devices */}
          <div
            className={`${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            } space-y-4 px-4 mt-16 py-7 bg-blue-700`}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-base text-white uppercase cursor-pointer"
              >
                {item.link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
