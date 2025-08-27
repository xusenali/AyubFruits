import { useEffect, useState } from "react";
import { translations } from "./translations";
import { CiGlobe } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMenu, BiX } from "react-icons/bi";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { IoIosSunny } from "react-icons/io";
import { BsArrowUpRight, BsBoxFill } from "react-icons/bs";


const images = [
  // { img: "/img/arr1.png", title: "Жёлтый виноград" },
  // { img: "/img/arr2.png", title: "Грецкий орех" },
  // { img: "/img/arr3.png", title: "Арахис" },
  // { img: "/img/arr4.png", title: "Фасоль" },
  // { img: "/img/arr5.png", title: "Красная фасоль" },
  // { img: "/img/arr6.png", title: "Маш" },
  // { img: "/img/arr7.png", title: "Сушёная слива" },
  // { img: "/img/arr8.png", title: "Фасоль" },
  // { img: "/img/arr9.png", title: "Чёрный тмин" },
  { img: "/img/arr10.png", title: "Чёрный тмин" },
  { img: "/img/arr11.png", title: "Чёрный тмин" },
  { img: "/img/arr12.png", title: "Чёрный тмин" },
  { img: "/img/arr15.png", title: "Абрикосовые косточки" },
  { img: "/img/arr16.png", title: "Сушёный абрикос" },
  { img: "/img/arr17.jpg", title: "Красный сушёный абрикос" },
  { img: "/img/arr18.jpg", title: "Жёлтый сушёный абрикос" },
  { img: "/img/arr19.jpg", title: "Курага" },
  { img: "/img/arr20.jpg", title: "Курага" },
  { img: "/img/arr21.jpg", title: "Курага" },
  { img: "/img/arr22.webp", title: "Курага" },
];

function App() {
  const [lang, setLang] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenNav, setMenuOpenNav] = useState(false);


  const t = translations[lang];

  return (
    <>
      {menuOpenNav && (
        <div className="fixed inset-0 z-40">
          {/* Orqa fonni xira qilish */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpenNav(false)} // fonni bosganda yopiladi
          />

          {/* Menyu */}
          <div className="bg-white z-50 w-[96%] h-max m-auto lg:hidden p-5 absolute flex flex-col gap-3 rounded-xl shadow-sm mx-2 top-2">
            <div className="flex items-center justify-between gap-10">
              <div className="flex w-max items-center border border-gray-200 rounded-full p-2 xl:p-3  xl:px-5 space-x-2">
                <div className="bg-[#31182E] text-white rounded-full h-6 w-6 xl:w-10 xl:h-10 flex items-center justify-center">
                  <FaPhoneAlt size={15} />
                </div>
                <span className="text-gray-800 font-medium text-sm xl:text-lg">
                  {t.phone}
                </span>
              </div>
              <BiX
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpenNav(false)}
              />
            </div>

            <nav className="flex flex-col gap-5 xl:gap-14 text-gray-600 text-lg">
              {["about", "products", "services", "benefits", "news", "contacts"].map(
                (key) => (
                  <a
                    onClick={() => setMenuOpenNav(false)}
                    key={key}
                    href={`#${key}`}
                    className="relative text-gray-600 hover:text-[#B08984] transition-colors duration-300 group py-2"
                  >
                    {t[key]}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#B08984] transition-all duration-400 group-hover:w-full"></span>
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      )}

      <div className="w-[100%] lg:w-[93%] mx-auto mb-10 ">
        <header className=" sticky top-0 flex flex-row items-center justify-between p-1 md:p-4 border-b border-gray-200 bg-white z-20">
          <img
            src="/logomain.png"
            alt="logo"
            className="w-14 h-14 object-contain"
          />

          <nav className="hidden lg:flex gap-5 xl:gap-14 items-center text-gray-600 text-md lg:text-lg">
            {["about", "products", "services", "benefits", "news", "contacts"].map(
              (key) => (
                <a
                  key={key}
                  href={`#${key}`}   // id ga scroll qiladi
                  className="relative text-gray-600 hover:text-[#B08984] transition-colors duration-300 group py-2"
                >
                  {t[key]}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#B08984] transition-all duration-400 group-hover:w-full"></span>
                </a>
              )
            )}

          </nav>

          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1 cursor-pointer text-gray-600"
              >
                <span className="flex gap-1 items-center border rounded-lg border-gray-300 p-1">
                  <CiGlobe size={20} /> {lang.toUpperCase()}
                </span>
              </button>
              {menuOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {["ar", "en", "uz", "ru"].map((l) => (
                    <li
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setMenuOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-[#f8e9e0] cursor-pointer "
                    >
                      {l.toUpperCase()}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <BiMenu className="text-4xl lg:hidden" onClick={() => setMenuOpenNav(true)} />
            <div className="hidden lg:flex items-center bg-white border border-gray-200 rounded-full p-2 xl:p-3  xl:px-5 space-x-2">
              <div className="bg-[#31182E] text-white rounded-full h-6 w-6 xl:w-10 xl:h-10 flex items-center justify-center">
                <FaPhoneAlt size={15} />
              </div>
              <span className="text-gray-800 font-medium text-sm xl:text-lg">
                {t.phone}
              </span>
            </div>
          </div>
        </header>

        <section className="mg:h-[50vh] lg:h-[65vh] xl:h-[88vh] flex flex-col lg:flex-row items-center gap-3 p-1 md:p-4 mt-8">
          <div className=" w-full h-full lg:w-[55%] p-5 xl:p-[45px] rounded-3xl flex flex-col gap-2 xl:gap-5 items-center justify-center bg-[linear-gradient(120deg,#E4D7CF,#AA807C)]">
            <img
              className="object-contain h-10 w-10 md:w-15 md:h-15"
              src="./sectionlogo.png"
              alt=""
            />
            <h1 className="text-white text-xl md:text-4xl xl:text-5xl">
              {t.brand}
            </h1>
            <ul className="flex flex-wrap justify-center gap-3 md:gap-5 mt-3">
              <li className="p-1 border md:hidden block rounded-full border-white text-white px-4 lg:text-lg font-medium">
                {t.export}
              </li>
              <div className="flex gap-2">
                <li className="p-1 px-4 border rounded-full border-white text-white text-sm lg:text-lg font-medium">
                  {t.organic}
                </li>
                <li className="p-1 px-4 border rounded-full border-white text-white text-sm lg:text-lg font-medium hidden md:block">
                  {t.export}
                </li>
                <li className="p-1 px-4 border rounded-full border-white text-white text-sm lg:text-lg font-medium ">
                  {t.quality}
                </li>
              </div>
            </ul>
            <p className="text-xl md:text-3xl xl:text-[45px] w-[95%] mt-3 max-w-sm md:max-w-3xl text-center leading-5 sm:leading-7 lg:leading-13 text-white">
              {t.heroText}
            </p>
            <a href="#products" className="cursor-pointer text-center rounded-full py-3 md:py-5 w-full md:w-max  md:px-10 bg-white  text-lg font-medium mt-5">
              {t.assortment}
            </a>
          </div>
          <div className="w-full lg:w-[45%] h-full mt-4 md:mt-0">
            <img
              src="./sectionsurat.jpg"
              className="w-full h-full object-cover rounded-3xl"
              alt=""
            />
          </div>
        </section>

        <div className="fade-up grid grid-cols-2 md:grid-cols-3 gap-3 p-1 md:p-4">
          <div className="text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
            <img
              src="./barg.png"
              alt=""
              className="object-contain h-8 w-8 md:h-10 md:w-10"
            />
            <p className="text-center w-35">{t.feature1}</p>
          </div>

          <div className="text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
            <img
              src="./check-4 1.png"
              alt=""
              className="object-contain h-8 w-8 md:h-10 md:w-10"
            />
            <p className="text-center w-35">{t.feature2}</p>
          </div>

          <div className="col-span-2 md:col-span-1 text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
            <img
              src="./web 1.png"
              alt=""
              className="object-contain h-8 w-8 md:h-10 md:w-10"
            />
            <p className="text-center w-35">{t.feature3}</p>
          </div>
        </div>

        <div id="about" className="mt-10 p-1 md:p-4 scroll-mt-25">
          <span className="px-7 p-1 border rounded-full text-sm">{t.benefits}</span>
          <ul className="flex flex-col md:flex-row w-full text-3xl md:text-5xl gap-2 mt-4">
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
          <div className="hidden md:block row-span-2 col-span-2 relative lg:col-span-2 rounded-tr-[40px] rounded-bl-[40px] ">
            <img src="/anim.png" className="w-30 h-30 absolute right-10 -top-16 z-30 animate-spin-slow" alt="" />
            <video
              autoPlay
              muted
              loop
              src="/ayolar.mp4"
              className="w-full h-105 object-cover rounded-tr-[40px] rounded-bl-[40px]"
              alt=""
            />
          </div>
          <div className="rounded-2xl p-3 lg:p-8 bg-[#E6D9D1]">
            <p>{t.grid3}</p>
          </div>
          <div className="col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
            <img
              src="/maizimg1.jpeg"
              className="w-full h-52 object-cover rounded-2xl object-center"
              alt=""
            />
          </div>
          <div className="min-h-45 lg:min-h-max col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
            <img
              src="/maizimg2.jpeg"
              className="w-full h-52 object-cover rounded-2xl"
              alt=""
            />
          </div>
          <div className="col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
            <img
              src="/maizimg3.jpeg"
              className="w-full h-52 object-cover rounded-2xl"
              alt=""
            />
          </div>
        </div>

        <div className=" grid lg:hidden grid-cols-2 gap-3 mt-3 p-1 md:p-4">
          <div className="min-h-40 border border-gray-300 col-span-1 rounded-2xl p-2 md:p-5 lg:p-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium">01</h1>
            <p className=" text-[12px] sm:text-xl mt-1 lg:mt-3">{t.grid1}</p>
          </div>
          <div className="min-h-40 border border-gray-300 col-span-1 rounded-2xl p-2 md:p-5 lg:p-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium">02</h1>
            <p className="text-[12px] sm:text-xl mt-1 lg:mt-3">{t.grid2}</p>
          </div>
          <div className="min-h-40 flex items-center justify-center  md:text-center rounded-2xl p-3 sm:p-5 lg:p-8 bg-[#E6D9D1] col-span-1">
            <p className="text-sm sm:text-3xl">{t.grid3}</p>
          </div>
          <div className=" col-span-1 rounded-2xl overflow-hidden">
            <img
              src="/gulin.jpg"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </div>
          <div className="min-h-40 col-span-1 rounded-2xl overflow-hidden">
            <img
              src="/ooooo2.png"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </div>
          <div className="col-span-1 rounded-2xl overflow-hidden">
            <img
              src="/oooo3.png"
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </div>
          <div className=" col-span-2 rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
            <img
              src="/oooo4.jpg"
              className="w-full h-full object-cover rounded-tr-[40px] rounded-bl-[40px]"
              alt=""
            />
          </div>
        </div>

        <div className="w-full my-10">
          <div className="w-full text-center">
            <span className=" px-7 p-1 border rounded-full text-[12px]">
              {t.catalogTitle}
            </span>
            <h1 id="products" className="text-3xl lg:text-5xl mt-3 lg:mt-6 scroll-mt-40">{t.catalogSubtitle}</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 p-2 lg:p-6">
            {images.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8f5f3] duration-200 ease-in-out border border-[#baa7a6] rounded-2xl  transition py-2 lg:p-4 flex flex-col group"
              >
                <img
                  src={item.img}
                  alt={t.productTitles[index]}
                  className="w-full h-20 lg:h-32 object-contain mb-4 group-hover:scale-110 duration-300 ease-in-out"
                />
                <div className="flex flex-col p-1 sm:p-3">
                  <h2 className="text-[12px] sm:text-sm md:text-lg font-semibold text-[#A77B78] mt-3">
                    {t.productTitles[index]}
                  </h2>
                  <p className="text-xs lg:text-md lg:font-medium text-black my-1 md:my-3">
                    {t.productDesc}
                  </p>
                  <div className="flex gap-1 lg:gap-2 flex-wrap">
                    <span className="flex items-center  lg:gap-2 text-[#A77B78] text-[12px] bg-white border border-[#A77B78] rounded-full p-1 lg:px-3 lg:py-2">
                      <TbRosetteDiscountCheckFilled className="text-md lg:text-xl" />
                      {t.badge1}
                    </span>
                    <span className="flex items-center  lg:gap-2 text-[#A77B78] text-[12px] bg-white border border-[#A77B78] rounded-full p-1 lg:px-3 lg:py-2">
                      <IoIosSunny className="text-md lg:text-xl" />
                      {t.badge2}
                    </span>
                    <span className="flex items-center gap-2 text-[#A77B78] text-[12px] bg-white border border-[#A77B78] rounded-full p-1 lg:px-3 lg:py-2">
                      <BsBoxFill className="text-md lg:text-xl" />
                      {t.badge3}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div id="services" className="w-full p-1 bg-white py-10 lg:px-4 scroll-mt-20">
          <span className=" px-7 p-1 border rounded-full text-sm">
            {t.benefits}
          </span>
          <h2 className="text-2xl md:text-5xl  text-black mb-8 mt-4">
            {t.whyChoose}
          </h2>

          <div className="grid grid-cols-2 lg:flex w-full gap-2 lg:gap-6 ">
            <div className="flex items-center bg-[#e9ddd7] justify-between rounded-xl p-5  shadow lg:w-[70%]">
              <ul className="flex flex-col gap-1">
                <img src="/Vector.png" className="h-15 w-15 object-contain" alt="" />
                <p className="text-black text-sm md:text-2xl font-medium">
                  {t.advantage1}
                </p>
              </ul>
              <video
                src="/maizvideo.mp4"
                className="hidden lg:block h-50 w-60 object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="flex items-center justify-center bg-[#e9ddd7] rounded-xl p-5 shadow lg:w-[30%]">
              <p className="text-sm md:text-2xl">
                {t.advantage2}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:flex gap-2 lg:gap-6 w-full mt-2 lg:mt-6">
            <div className="flex items-center bg-[#e9ddd7] rounded-xl text-2xl lg:text-lg p-5 sm:p-10 lg:p-6 shadow lg:w-[30%]">
              <p className="text-black text-sm md:text-2xl ">
                {t.advantage3}
              </p>
            </div>

            <div className="flex items-center bg-[#e9ddd7] rounded-xl  shadow lg:w-[70%] relative">
              {/* <div className="hidden  absolute top-3 left-5 lg:flex justify-between items-center w-[95%] p-3 backdrop-blur-sm rounded-2xl">
                <p className="text-md xl:text-lg  mb-3 text-white">
                  {t.advantage4}
                </p>
                <ul className="flex items-center gap-3 lg:gap-5">
                  <img src="/iso.png" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" alt="" />
                  <img src="/haccp.png" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" alt="" />
                  <img src="/halal.png" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" alt="" />
                </ul>
              </div> */}
              <img
                src="/imgodamlar.png"
                alt="Контроль качества"
                className="w-[100%] h-60 object-cover rounded-xl"
              />
            </div>

            <img src="/imggulin.png" className="lg:hidden h-60 sm:h-80 md:h-100 w-full object-cover rounded-xl" alt="" />

          </div>

        </div>

        <div id="benefits" className="w-full my-10 p-1 md:p-4 scroll-mt-20">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center">{t.processTitle} </h1>
          <p className="text-md sm:text-xl lg:text-3xl text-center mt-2 text-[#A77B78]">{t.processSubtitle}</p>
          <div className="grid gap-3 md:gap-5 xl:gap-10 grid-cols-2 lg:grid-cols-5 mt-10">
            <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5">
              <span className="sm:text-lg font-medium">01</span>
              <p className="sm:text-lg font-medium">{t.step1} </p>
              <img src="/barg.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
            </div>
            <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5">
              <span className="sm:text-lg font-medium">02</span>
              <p className="sm:text-lg font-medium">{t.step2}</p>
              <img src="/sprout 1.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
            </div>
            <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center rounded-lg sm:py-10 p-5 leading-">
              <span className="sm:text-lg font-medium">03</span>
              <p className="sm:text-lg font-medium text-center">{t.step3}</p>
              <img src="/Group.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
            </div>
            <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5">
              <span className="sm:text-lg font-medium">04</span>
              <p className="sm:text-lg font-medium">{t.step4}</p>
              <img src="/box-5 1.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
            </div>
            <div className="flex  flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5 col-span-2 lg:col-span-1">
              <span className="sm:text-lg font-medium">05</span>
              <p className="sm:text-lg font-medium">{t.step5}</p>
              <img src="/moshin.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
            </div>
          </div>
        </div>

        <section id="contacts" className="bg-[#E9DDD7] mx-1 py-16 px-4 flex flex-col items-center rounded-2xl scroll-mt-30">
          <span className="uppercase text-sm border border-[#9D6F6C] px-4 py-1 rounded-full text-[#9D6F6C]">
            {t.contacts}
          </span>

          <h2 className="text-3xl md:text-4xl font-medium mt-6 text-center">
            {t.leaveRequest}
          </h2>
          <p className="text-lg text-center mt-3 max-w-lg">
            {t.getBestOffer}
          </p>

          <form className="flex flex-col gap-5 mt-10 w-full max-w-xl">
            <input
              type="text"
              placeholder={t.yourName}
              className="w-full bg-white rounded-full px-6 py-4 outline-none border border-transparent focus:border-[#9D6F6C] text-lg"
            />

            <div className="w-full flex items-center gap-2 bg-white rounded-full px-6 py-4 border border-transparent focus-within:border-[#9D6F6C]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" alt="flag" className="w-8 h-6 object-contain" />
              <input
                type="tel"
                placeholder="+998 00-000-0000"
                className="flex-1 outline-none text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9D6F6C] hover:bg-[#855B58] text-white text-lg py-4 rounded-full transition"
            >
              {t.sendRequest}
            </button>
          </form>
        </section>


        <section id="news" className="my-10 w-full text-center p-1 md:p-4 scroll-mt-25">
          <span className="uppercase text-[12px] border text-center px-4 py-1 rounded-full ">
            {t.news}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center max-w-3xl mx-auto mt-3">
            {t.latestNews}
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto text-start mt-10">

            <div className="bg-[#E9DDD7] rounded-2xl shadow-md overflow-hidden flex flex-col p-5">
              <div className=" flex-1">
                <h3 className="md:text-2xl text-lg ">
                  {t.article1}
                </h3>
              </div>
              <div className="relative mt-10">
                <img
                  src="/oooo4.jpg"
                  alt="post1"
                  className="w-full h-56 object-cover rounded-xl"
                />
                <a
                  href="#"
                  className="absolute  border-white border-4 -top-6 right-6 bg-green-700 text-white rounded-full p-3 shadow-lg hover:bg-green-800 transition"
                >
                  <BsArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E9DDD7] rounded-2xl shadow-md overflow-hidden flex flex-col p-5">
              <div className=" flex-1">
                <h3 className="md:text-2xl text-lg ">
                  {t.article2}
                </h3>
              </div>
              <div className="relative">
                <img
                  src="/sectionsurat.jpg"
                  alt="post2"
                  className="w-full h-56 object-cover rounded-xl"
                />
                <a
                  href="#"
                  className="absolute border-white border-4 -top-6 right-6 bg-green-700 text-white rounded-full p-3 shadow-lg hover:bg-green-800 transition"
                >
                  <BsArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#E9DDD7] rounded-2xl shadow-md overflow-hidden flex flex-col p-5">
              <div className=" flex-1">
                <h3 className="md:text-2xl text-lg ">
                  {t.article3}
                </h3>
              </div>
              <div className="relative">
                <img
                  src="/ooo5.jpg"
                  alt="post3"
                  className="w-full h-56 object-cover rounded-xl"
                />
                <a
                  href="#"
                  className="absolute border-white border-4 -top-6 right-6 bg-green-700 text-white rounded-full p-3 shadow-lg hover:bg-green-800 transition"
                >
                  <BsArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          <img src="/bobo.jpg" className="w-full h-80 md:h-90 lg:h-120 xl:h-150 object-cover mt-6 rounded-2xl" alt="" />
        </section>


      </div>
      <footer className="w-full bg-[#A77B78] flex flex-col items-center py-10 p-5">
        <img src="/footer.png" className="w-40 h-40 object-contain" alt="" />
        <div className="flex flex-col md:flex-row  justify-around items-center w-full gap-5">
          <ul className="text-white">
            <li>{t.phoneLabel} </li>
            <li className="text-2xl">+998 91 527 64 67</li>
          </ul>
          <ul className="text-white">
            <li>{t.emailLabel} </li>
            <li className="text-2xl">toshev_1989@bk.ru</li>
          </ul>
          <ul className="text-white">
            <li>{t.addressLabeln} </li>
            <li className="text-2xl">г. Самарканд, р-н Жомбой, улица Холвой</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
