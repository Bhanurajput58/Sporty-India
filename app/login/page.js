"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.div
        className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignUp ? "signup" : "login"}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>

            <form className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm text-gray-400">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {isSignUp && (
                <div>
                  <label className="block text-sm text-gray-400">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition duration-200"
              >
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </form>
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={toggleMode}
              className="text-blue-500 hover:underline ml-2"
            >
              {isSignUp ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginSignup;
