"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center px-6 py-5 shadow-md">
      <div className="text-4xl font-bold">
        Sporty<span className="text-blue-500">india</span>
      </div>
      <div className="hidden md:flex">
        <nav>
          <ul className="flex space-x-8">
            {["Athletes", "Challenges", "Spotlight", "Blog"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-white hover:text-blue-500 transition duration-200">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden md:flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
          + Join
        </button>
        <button className="border border-white hover:border-blue-500 hover:text-blue-500 text-white py-2 px-4 rounded-lg transition duration-200">
          Sign In or Create Account
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleNav} className="text-white">
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isNavOpen && (
        <div className="md:hidden bg-gray-800 p-4 flex flex-col space-y-4 text-center">
          <nav>
            <ul className="space-y-4">
              {["Athletes", "Challenges", "Spotlight", "Blog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white hover:text-blue-500 transition duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
            + Join
          </button>
          <button className="border border-white hover:border-blue-500 hover:text-blue-500 text-white py-2 px-4 rounded-lg transition duration-200">
            Sign In or Create Account
          </button>
        </div>
      )}
    </header>
  );
}
