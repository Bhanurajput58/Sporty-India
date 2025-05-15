"use client";
import React, { useState } from "react";
import { FaUsers, FaCheckCircle, FaTasks, FaRocket, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const sportyIndia = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        src="/background.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>

      <header className="flex justify-between items-center px-6 py-5 shadow-md relative z-10">
        <div className="text-4xl font-bold">
          Sporty<span className="text-blue-500">india</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            {["Athletes", "Challenges", "Spotlight", "Blog"].map((item) => (
              <li key={item}>
                <a href="#" className="text-white hover:text-blue-500 transition duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 relative z-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
            + Join
          </button>
          <button className="border border-white hover:border-blue-500 hover:text-blue-500 text-white py-2 px-4 rounded-lg transition duration-200">
            Sign In or Create Account
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-white">
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div className="md:hidden bg-gray-800 p-4 flex flex-col space-y-4 text-center relative z-10">
          <nav>
            <ul className="space-y-4">
              {["Athletes", "Challenges", "Spotlight", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white hover:text-blue-500 transition duration-200">
                    {item}
                  </a>
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

      <main className="text-center mt-16 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center">
            <p className="text-green-400 text-sm mb-4 font-medium flex items-center">
              <FaRocket className="mr-2 text-yellow-100" />
              41 NEW POSTS THIS WEEK!
            </p>
          </div>
          <h1 className="text-6xl font-bold text-gray-300 mb-4">
            The Largest Platform
          </h1>
          <h1 className="text-6xl font-bold text-gray-300 mb-6">
            for Athletes
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-cursive mb-12">
            Community-built platform of Athletes from all over India. Hire as
            Recruiter, Coach, Teacher, and Professionals.
          </p>

          <div className="relative w-full flex justify-center">
            <div className="flex bg-white rounded-full p-1 w-96 items-center shadow-lg transform translate-y-[-25%] transition duration-300 hover:scale-105">
              <input
                type="text"
                placeholder="Search for name, sport, ratings..."
                className="flex-grow bg-transparent outline-none px-4 py-3 text-gray-900 rounded-l-full"
              />
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full transition hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="flex z-1 py-20 px-6 pt-28 items-center justify-center flex-wrap gap-10 relative z-10">
        <StatCard
          icon={<FaUsers className="w-10 h-10 mb-4 text-gray-400" />}
          number="5,227"
          description="Athletes Registered"
        />
        <StatCard
          icon={<FaCheckCircle className="w-10 h-10 mb-4 text-gray-400" />}
          number="100%"
          description="Legit for athletes and recruiters use"
        />
        <StatCard
          icon={<FaTasks className="w-10 h-10 mb-4 text-gray-400" />}
          number="16,191"
          description="Works provided"
        />
      </div>

      <CustomAccordion />
    </div>
  );
};

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is Sporty India?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi accusamus saepe blanditiis facere quos facilis voluptatem ea fugit quidem? Veniam quisquam culpa, dolore in asperiores, similique eveniet expedita vero ullam tenetur molestias pariatur!",
    },
    {
      title: "Why Sporty India?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi accusamus saepe blanditiis facere quos facilis voluptatem ea fugit quidem? Veniam quisquam culpa, dolore in asperiores, similique eveniet expedita vero ullam tenetur molestias pariatur!",
    },
    {
      title: "Is Sporty India Paid?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi accusamus saepe blanditiis facere quos facilis voluptatem ea fugit quidem? Veniam quisquam culpa, dolore in asperiores, similique eveniet expedita vero ullam tenetur molestias pariatur!",
    },
  ];

  return (
    <div className="mt-10 relative z-10">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-800 focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <span
              className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-700">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const StatCard = ({ icon, number, description }) => {
  return (
    <motion.div
      className="text-center max-w-[220px] flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
      <span className="text-5xl font-extrabold md:text-6xl text-white">
        {number}
      </span>
      <p className="mt-2 text-base font-semibold text-gray-400">
      {description}
      </p>
    </motion.div>
  );
};

export default sportyIndia;
