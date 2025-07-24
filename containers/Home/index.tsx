import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";
import Head from "next/head";

const HomePage = () => {
  return (
    <>

      <Head>
        <title>Akvapura | Distillə Su & MasterCleaner</title>
        <meta name="description" content="Azərbaycanda distillə su və şüşə təmizliyi." />
        <meta property="og:image" content="https://akvapura.az/favicon.png" />
      </Head>

      <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#f8f9fa] to-[#e0e0e0] text-gray-800 font-sans ">
        <div className="flex flex-col px-6 pb-10 pt-4 md:px-20 max-md:pb-16 max-md:pt-8 max-sm:gap-10 max-lg:gap-14 lg:gap-20 bg-white">
          <div className="flex justify-center">
            <Image
              src="/Akvapura.png"
              alt="Akvapura distillə su şüşəsi"
              width={340}
              height={60}
              priority
              className="object-contain"
            />
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Bizimlə Əlaqə
            </h3>

            <div className="flex flex-col gap-3 items-center text-base md:text-lg">
              <div className="flex items-center gap-3 hover:text-green-600 transition duration-300">
                <FaPhoneAlt className="text-gray-500 w-5 h-5" />
                <span>+994 70 300 22 89</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-600 transition duration-300">
                <FaEnvelope className="text-gray-500 w-5 h-5" />
                <span>vapour_mmc@mail.ru</span>
              </div>
            </div>
          </div>

          <footer className="flex flex-col items-center gap-6">
            <p className="text-lg font-medium">Bizi izləyin:</p>
            <ul className="flex gap-8 justify-center items-center">
              <li>
                <Link
                  href="https://www.instagram.com/akvapura.az/"
                  target="_blank"
                  className="group relative text-[#E1306C] hover:text-pink-600 transition-all duration-300"
                >
                  <FaInstagram className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=61559868737226"
                  target="_blank"
                  className="group relative text-[#1877F2] hover:text-blue-800 transition-all duration-300"
                >
                  <FaFacebook className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tiktok.com/@akvapura"
                  target="_blank"
                  className="group relative text-black hover:text-[#25F4EE] transition-all duration-300"
                >
                  <FaTiktok className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                </Link>
              </li>
            </ul>
          </footer>
        </div>

        <div className="relative w-full h-screen ">
          <Image
            src="/sekil1.jpg"
            alt="Akvapura fon şəkli"
            fill
            priority
            className="object-cover blur-xs brightness-75"
          />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-white text-center  ">
            <div className="max-w-md  bg-black/50 p-6 rounded-xl backdrop-blur-sm">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
                Akvapura Distillə Suyu
              </h1>
              <p className="text-lg">
                7 illik təcrübə və incə filtrasiya prosesi ilə hər damlası
                orijinal keyfiyyətin simvoludur. Lazer cihazları, avtomobil
                radiatorları və şüşə təmizliyi üçün ideal seçim!
              </p>
              <p className="text-lg">
                Bazarda yayılan nüsxələnmiş məhsullardan fərqli olaraq, Akvapura
                keyfiyyəti və etibarı ilə seçilir. Orijinal məhsulu seçin – fərqi
                hiss edin.
              </p>
              <div className="grid grid-cols-1 gap-4 text-left text-lg pt-4">
                <div>💎 Lazer cihazları üçün idealdır</div>
                <div>🚗 Radiatorlarda ərp yaratmır</div>
                <div>🧼 Master Cleaner ilə ləkəsiz təmizlik</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
