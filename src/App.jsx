import React, { useState } from "react";
import { translations } from "./translations";
import { CiGlobe } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

function App() {
  const [lang, setLang] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang];

  return (
    <div className="w-[96%] lg:w-[93%] mx-auto mb-10">
      <header className="sticky top-0 flex flex-row items-center justify-between p-1 md:p-4 border-b border-gray-200 bg-white z-20">
        <img src="./src/images/logomain.png" alt="logo" className="w-14 h-14 object-contain" />

        <nav className="hidden lg:flex gap-5 xl:gap-14 items-center text-gray-600 text-md lg:text-lg">
          {["about", "products", "services", "benefits", "news", "contacts"].map((key) => (
            <a
              key={key}
              href="#"
              className="relative text-gray-600 hover:text-[#B08984] transition-colors duration-300 group py-2"
            >
              {t[key]}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#B08984] transition-all duration-400 group-hover:w-full"></span>
            </a>
          ))}
        </nav>



        <div className="flex items-center gap-4 mt-2 md:mt-0">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1 cursor-pointer text-gray-600"
            >
              <span className="flex gap-1 items-center border rounded-lg border-gray-300 p-1"><CiGlobe size={20} /> {lang.toUpperCase()}</span>
            </button>
            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {["ar", "en", "uz", "ru"].map((l) => (
                  <li
                    key={l}
                    onClick={() => { setLang(l); setMenuOpen(false); }}
                    className="px-4 py-2 hover:bg-[#f8e9e0] cursor-pointer "
                  >
                    {l.toUpperCase()}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <BiMenu className="text-4xl lg:hidden" />
          <div className="hidden lg:flex items-center bg-white border border-gray-200 rounded-full p-2 xl:p-3  xl:px-5 space-x-2">
            <div className="bg-[#31182E] text-white rounded-full h-6 w-6 xl:w-10 xl:h-10 flex items-center justify-center">
              <FaPhoneAlt size={15} />
            </div>
            <span className="text-gray-800 font-medium text-sm xl:text-lg">{t.phone}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mg:h-[50vh] lg:h-[65vh] xl:h-[88vh] flex flex-col lg:flex-row items-center gap-3 p-1 md:p-4 mt-8">
        <div className="w-full h-full lg:w-[55%] p-5 xl:p-[45px] rounded-3xl flex flex-col gap-2 xl:gap-5 items-center justify-center bg-gradient-to-b from-[#E4D7CF] to-[#AA807C]">
          <img className="object-contain h-10 w-10 md:w-15 md:h-15" src="./src/images/sectionlogo.png" alt="" />
          <h1 className="text-white text-xl md:text-4xl xl:text-5xl">{t.brand}</h1>
          <ul className="flex flex-wrap justify-center gap-3 md:gap-5 mt-3">
            <li className="p-1 border md:hidden block rounded-full border-white text-white px-4 lg:text-lg font-medium">{t.export}</li>
            <div className="flex gap-2">
              <li className="p-1 px-4 border rounded-full border-white text-white text-sm lg:text-lg font-medium">{t.organic}</li>
              <li className="p-1 px-4 border rounded-full border-white text-white text-sm lg:text-lg font-medium hidden md:block">{t.export}</li>
              <li className="p-1 px-4 border rounded-full border-white text-white text-sm lg:text-lg font-medium ">{t.quality}</li>
            </div>
          </ul>
          <p className="text-xl md:text-3xl xl:text-[45px] w-[95%] mt-3 max-w-sm md:max-w-3xl text-center leading-5 sm:leading-7 lg:leading-10 text-white">{t.heroText}</p>
          <button className="cursor-pointer rounded-full py-3 md:py-5 w-full md:w-max  md:px-10 bg-white  text-lg font-medium mt-5">{t.assortment}</button>
        </div>
        <div className="w-full lg:w-[45%] h-full mt-4 md:mt-0">
          <img src="./src/images/sectionsurat.jpg" className="w-full h-full object-cover rounded-3xl" alt="" />
        </div>
      </section>

      {/* Features */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-1 md:p-4">
        <div className="text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
          <img src="./src/images/barg.png" alt="" className="object-contain h-8 w-8 md:h-10 md:w-10" />
          <p className="text-center w-35">{t.feature1}</p>
        </div>

        <div className="text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
          <img src="./src/images/check-4 1.png" alt="" className="object-contain h-8 w-8 md:h-10 md:w-10" />
          <p className="text-center w-35">{t.feature2}</p>
        </div>

        <div className="col-span-2 md:col-span-1 text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
          <img src="./src/images/web 1.png" alt="" className="object-contain h-8 w-8 md:h-10 md:w-10" />
          <p className="text-center w-35">{t.feature3}</p>
        </div>
      </div>

      <div className="mt-10 p-1 md:p-4">
        <ul className="flex flex-col w-full text-3xl gap-2">
          <li>{t.about}</li>
          <li className="text-[#A77B78]">Ayyub natural dry fruits</li>
        </ul>

        <ul className="list-disc pl-5 mt-5">
          <li>{t.info1}</li>
          <li>{t.info2}</li>
          <li>{t.info3}</li>
        </ul>
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-6 gap-3 mt-3 p-1 md:p-4">
        <div className="grid-cols-1 border border-gray-300 col-span-2 lg:col-span-2 rounded-2xl p-8">
          <h1 className="text-5xl font-medium">01</h1>
          <p className="text-md mt-3">{t.grid1}</p>
        </div>
        <div className="border border-gray-300 col-span-2 lg:col-span-2 rounded-2xl p-8">
          <h1 className="text-5xl font-medium">02</h1>
          <p className="text-md mt-3">{t.grid2}</p>
        </div>
        <div className="hidden md:block row-span-2 col-span-2 lg:col-span-2 rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
          <img src="/src/images/oooo4.jpg" className="w-full h-full object-cover rounded-tr-[40px] rounded-bl-[40px]" alt="" />
        </div>
        <div className="rounded-2xl p-3 lg:p-8 bg-[#E6D9D1]">
          <p>{t.grid3}</p>
        </div>
        <div className="col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
          <img src="/src/images/ooo1.png" className="w-full h-full object-cover rounded-2xl" alt="" />
        </div>
        <div className="min-h-45 lg:min-h-max col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
          <img src="/src/images/ooooo2.png" className="w-full h-full object-cover rounded-2xl" alt="" />
        </div>
        <div className="col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
          <img src="/src/images/oooo3.png" className="w-full h-full object-cover rounded-2xl" alt="" />
        </div>
      </div>

      <div className=" grid lg:hidden grid-cols-2 gap-3 mt-3 p-1 md:p-4">
        {/* 01 */}
        <div className="min-h-40 border border-gray-300 col-span-1 rounded-2xl p-2 md:p-5 lg:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium">01</h1>
          <p className=" text-[12px] sm:text-xl mt-1 lg:mt-3">{t.grid1}</p>
        </div>

        {/* 02 */}
        <div className="min-h-40 border border-gray-300 col-span-1 rounded-2xl p-2 md:p-5 lg:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium">02</h1>
          <p className="text-[12px] sm:text-xl mt-1 lg:mt-3">{t.grid2}</p>
        </div>

        {/* 03 */}
        <div className="min-h-40 flex items-center justify-center  md:text-center rounded-2xl p-3 sm:p-5 lg:p-8 bg-[#E6D9D1] col-span-1">
          <p className="text-sm sm:text-3xl">{t.grid3}</p>
        </div>

        {/* Rasm 1 */}
        <div className=" col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/ooo1.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        {/* Rasm 2 */}
        <div className="min-h-40 col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/ooooo2.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        {/* Rasm 3 */}
        <div className="col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/oooo3.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        {/* FULL WIDTH (pastda turadigan) */}
        <div className=" col-span-2 rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
          <img
            src="/src/images/oooo4.jpg"
            className="w-full h-full object-cover rounded-tr-[40px] rounded-bl-[40px]"
            alt=""
          />
        </div>
      </div>


    </div>
  );
}

export default App;
