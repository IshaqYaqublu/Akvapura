import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#f8f9fa] to-[#e0e0e0] text-gray-800">
      {/* Sol hissə */}
      <div className="flex flex-col justify-between px-6 py-8 md:pl-20 md:pb-12">
        <div className="w-full flex justify-center mb-6 md:mb-0">
          <Image
            src="/Akvapura.png"
            alt="Akvapura distillə su şüşəsi"
            width={207}
            height={40}
            className="lg:w-[509px] lg:h-[266px]"
            priority
          />
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#0f172a] text-center pb-4 flex flex-col gap-2 md:gap-3">
            Əlaqə
          </h3>
          <p className="text-base md:text-xl flex gap-2 md:gap-4 items-center group hover:text-[#0f172a] transition">
            <FaPhoneAlt className="text-gray-600 group-hover:text-green-500 transition duration-300 w-5 h-5 md:w-6 md:h-6" />
            <span>+994 70 300 22 89</span>
          </p>

          <p className="text-base md:text-xl flex gap-2 md:gap-4 items-center group hover:text-[#0f172a] transition mt-2">
            <FaEnvelope className="text-gray-600 group-hover:text-blue-500 transition duration-300 w-5 h-5 md:w-6 md:h-6" />
            <span>vapour_mmc@mail.ru</span>
          </p>
        </div>

        <footer className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-6">
          <p className="text-base md:text-lg font-medium">Bizi izləyin:</p>
          <ul className="flex gap-6 items-center justify-center w-full md:w-auto">
            <li>
              <Link
                href="https://www.instagram.com/akvapura.az/"
                target="_blank"
                className="relative group text-[#E1306C] hover:text-pink-600 transition-all duration-300"
              >
                <FaInstagram className="w-6 h-6 md:w-[25px] md:h-[25px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  Instagram
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61559868737226"
                target="_blank"
                className="relative group text-[#1877F2] hover:text-blue-800 transition-all duration-300"
              >
                <FaFacebook className="w-6 h-6 md:w-[25px] md:h-[25px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  Facebook
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.tiktok.com/@akvapura"
                target="_blank"
                className="relative group text-black hover:text-[#25F4EE] transition-all duration-300"
              >
                <FaTiktok className="w-6 h-6 md:w-[25px] md:h-[25px]" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  TikTok
                </span>
              </Link>
            </li>
          </ul>
        </footer>
      </div>

      {/* Sağ hissə */}
      <div className="w-full h-full relative">
        <Image
          src="/sekil1.jpg"
          alt="Akvapura distillə su şüşəsi"
          
          className="w-full h-auto md:h-screen "
          priority
          fill
        />
      </div>
    </main>
  );
};

export default HomePage;
