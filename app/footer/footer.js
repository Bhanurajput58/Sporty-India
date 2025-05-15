"use client";

import React, { useState,useEffect } from "react";
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaDiscord, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  useEffect(() => {
    fetch("/api/logs", {
      method: "POST",
    });
  }, []);
  return (
    <footer className="bg-gray-900 shadow w-full py-8 relative z-100">
      <div className="w-full mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © 2023 <a href="/lol" className="hover:underline text-blue-500">Itachi™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/licensing" className="hover:underline me-4 md:me-6">Licensing</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
            <FaYoutube size={20} />
          </Link>
          <Link href="https://discord.com" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
            <FaDiscord size={20} />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
