"use client";

// import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
  titles: string;
  link: string;
  icons: string;
}[];

const props: NavbarProps = [
  {
    titles: "Leaderboard",
    link: "/leaderboard",
    icons: "home-icon",
  },
  {
    titles: "Books",
    link: "/books",
    icons: "about-icon",
  },
];

const adminProps: NavbarProps = [
  {
    titles: "Home",
    link: "/",
    icons: "",
  },
  {
    titles: "Book",
    link: "/books",
    icons: "dashboard-icon",
  },
  {
    titles: "Manage",
    link: "/manage",
    icons: "manage-books-icon",
  },
];

const Navbar = () => {
  const [navbarProps, setNavbarProps] = useState<NavbarProps>([]);
  const [user, setUser] = useState<{ photoURL: string | null }>({ photoURL: null });

  useEffect(() => {
    setNavbarProps(props);
  }, []);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-sky-500 font-bold text-xl">
          <Link href="/">Booko</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row items-center space-x-2">
          {navbarProps.map((prop, index) => (
            <div key={index} className="relative group">
              <Link
                href={prop.link || "#"}
                className="px-4 py-2 text-white hover:text-sky-400 transition-colors duration-200 font-medium"
              >
                {prop.titles}
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* User Profile or Login Button */}
        <div>
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-sky-500"
            />
          ) : (
            <Link
              href="/auth/login"
              className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-6 rounded-md transition-colors duration-200 font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
