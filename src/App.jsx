import React, { useState } from "react";
import { translations } from "./translations";
import { CiGlobe } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { IoIosSunny } from "react-icons/io";
import { BsArrowUpRight, BsBoxFill } from "react-icons/bs";
import name1 from "./src/images/sectionlogo.png"

const images = [
  { img: "/src/images/img/arr1.png", title: "Жёлтый виноград" },
  { img: "/src/images/img/arr2.png", title: "Грецкий орех" },
  { img: "/src/images/img/arr3.png", title: "Арахис" },
  { img: "/src/images/img/arr4.png", title: "Фасоль" },
  { img: "/src/images/img/arr5.png", title: "Красная фасоль" },
  { img: "/src/images/img/arr6.png", title: "Маш" },
  { img: "/src/images/img/arr7.png", title: "Сушёная слива" },
  { img: "/src/images/img/arr8.png", title: "Фасоль" },
  { img: "/src/images/img/arr9.png", title: "Чёрный тмин" },
  { img: "/src/images/img/arr10.png", title: "Чёрный тмин" },
  { img: "/src/images/img/arr11.png", title: "Чёрный тмин" },
  { img: "/src/images/img/arr12.png", title: "Чёрный тмин" },
  { img: "/src/images/img/arr15.png", title: "Абрикосовые косточки" },
  { img: "/src/images/img/arr16.png", title: "Курага" },
];

function App() {
  const [lang, setLang] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang];

  return (
    <div className="w-[100%] lg:w-[93%] mx-auto mb-10">
      <header className="sticky top-0 flex flex-row items-center justify-between p-1 md:p-4 border-b border-gray-200 bg-white z-20">
        <img
          src="./src/images/logomain.png"
          alt="logo"
          className="w-14 h-14 object-contain"
        />

        <nav className="hidden lg:flex gap-5 xl:gap-14 items-center text-gray-600 text-md lg:text-lg">
          {["about", "products", "services", "benefits", "news", "contacts"].map(
            (key) => (
              <a
                key={key}
                href="#"
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

          <BiMenu className="text-4xl lg:hidden" />
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
        <div className="w-full h-full lg:w-[55%] p-5 xl:p-[45px] rounded-3xl flex flex-col gap-2 xl:gap-5 items-center justify-center bg-[linear-gradient(120deg,#E4D7CF,#AA807C)]">
          <img
            className="object-contain h-10 w-10 md:w-15 md:h-15"
            src={name1}
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
          <button className="cursor-pointer rounded-full py-3 md:py-5 w-full md:w-max  md:px-10 bg-white  text-lg font-medium mt-5">
            {t.assortment}
          </button>
        </div>
        <div className="w-full lg:w-[45%] h-full mt-4 md:mt-0">
          <img
            src="./src/images/sectionsurat.jpg"
            className="w-full h-full object-cover rounded-3xl"
            alt=""
          />
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-1 md:p-4">
        <div className="text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
          <img
            src="./src/images/barg.png"
            alt=""
            className="object-contain h-8 w-8 md:h-10 md:w-10"
          />
          <p className="text-center w-35">{t.feature1}</p>
        </div>

        <div className="text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
          <img
            src="./src/images/check-4 1.png"
            alt=""
            className="object-contain h-8 w-8 md:h-10 md:w-10"
          />
          <p className="text-center w-35">{t.feature2}</p>
        </div>

        <div className="col-span-2 md:col-span-1 text-center flex flex-col gap-1 lg:gap-3 items-center justify-center bg-[#E6D9D1] p-3 rounded-2xl min-h-[180px]">
          <img
            src="./src/images/web 1.png"
            alt=""
            className="object-contain h-8 w-8 md:h-10 md:w-10"
          />
          <p className="text-center w-35">{t.feature3}</p>
        </div>
      </div>

      <div className="mt-10 p-1 md:p-4">
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
        <div className="hidden md:block row-span-2 col-span-2 lg:col-span-2 rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
          <img
            src="/src/images/oooo4.jpg"
            className="w-full h-full object-cover rounded-tr-[40px] rounded-bl-[40px]"
            alt=""
          />
        </div>
        <div className="rounded-2xl p-3 lg:p-8 bg-[#E6D9D1]">
          <p>{t.grid3}</p>
        </div>
        <div className="col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/ooo1.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className="min-h-45 lg:min-h-max col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/ooooo2.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className="col-span-1 lg:col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/oooo3.png"
            className="w-full h-full object-cover rounded-2xl"
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
            src="/src/images/ooo1.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className="min-h-40 col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/ooooo2.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className="col-span-1 rounded-2xl overflow-hidden">
          <img
            src="/src/images/oooo3.png"
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className=" col-span-2 rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
          <img
            src="/src/images/oooo4.jpg"
            className="w-full h-full object-cover rounded-tr-[40px] rounded-bl-[40px]"
            alt=""
          />
        </div>
      </div>

      <div className="w-full my-10">
        <div className="w-full text-center">
          <span className=" px-7 p-1 border rounded-full text-sm">
            {t.catalogTitle}
          </span>
          <h1 className="text-3xl lg:text-5xl mt-6">{t.catalogSubtitle}</h1>
        </div>
        <div className="grid grid-cols-2 mt-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 p-2 lg:p-6">
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
              <div className="flex flex-col p-1">
                <h2 className="text-sm md:text-lg font-semibold text-[#A77B78]">
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

      <div className="w-full p-1 bg-white py-10 lg:px-4 ">
        <span className=" px-7 p-1 border rounded-full text-sm">
          Преимущества
        </span>
        <h2 className="text-2xl md:text-5xl  text-black mb-8 mt-4">
          Почему вы должны выбрать <br /> именно нас:
        </h2>

        <div className="grid grid-cols-2 lg:flex w-full gap-2 lg:gap-6 ">
          <div className="flex items-center bg-[#e9ddd7] justify-between rounded-xl p-5  shadow lg:w-[70%]">
            <ul className="flex flex-col gap-1">
              <img src="/src/images/Vector.png" className="h-15 w-15 object-contain" alt="" />
              <p className="text-black text-sm md:text-2xl font-medium">
                100% натуральный <br /> продукт без добавок
              </p>
            </ul>
            <img src="/src/images/imggulin.png" className="hidden lg:block h-50 w-60 object-cover rounded-xl" alt="" />
          </div>

          <div className="flex items-center justify-center bg-[#e9ddd7] rounded-xl p-5 shadow lg:w-[30%]">
            <p className="text-sm md:text-2xl">
              Прямые поставки от производителя без посредников
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:flex gap-2 lg:gap-6 w-full mt-2 lg:mt-6">
          <div className="flex items-center bg-[#e9ddd7] rounded-xl text-2xl lg:text-lg p-5 sm:p-10 lg:p-6 shadow lg:w-[30%]">
            <p className="text-black text-sm md:text-2xl ">
              Гибкие условия заказа – фасовка от 100 г до 25 кг
            </p>
          </div>

          <div className="flex items-center bg-[#e9ddd7] rounded-xl  shadow lg:w-[70%] relative">
            <div className="hidden  absolute top-3 left-5 lg:flex justify-between items-center w-[95%] p-3 backdrop-blur-sm rounded-2xl">
              <p className="text-md xl:text-lg  mb-3 text-white">
                Контроль качества на каждом этапе <br /> (HACCP, ISO, Halal)
              </p>
              <ul className="flex items-center gap-3 lg:gap-5">
                <img src="/src/images/iso.png" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" alt="" />
                <img src="/src/images/haccp.png" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" alt="" />
                <img src="/src/images/halal.png" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" alt="" />
              </ul>
            </div>
            <img
              src="/src/images/imgodamlar.png"
              alt="Контроль качества"
              className="w-[100%] h-60 object-cover rounded-xl"
            />
          </div>

          <img src="/src/images/imggulin.png" className="lg:hidden h-60 sm:h-80 md:h-100 w-full object-cover rounded-xl" alt="" />

        </div>

      </div>

      <div className="w-full my-10 p-1 md:p-4">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center">Простой и надежный процесс:</h1>
        <p className="text-md sm:text-xl lg:text-3xl text-center mt-2 text-[#A77B78]">Мы заботимся о каждом шаге!</p>
        <div className="grid gap-3 md:gap-5 xl:gap-10 grid-cols-2 lg:grid-cols-5 mt-10">
          <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5">
            <span className="sm:text-lg font-medium">01</span>
            <p className="sm:text-lg font-medium">Выращивание</p>
            <img src="/src/images/barg.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
          </div>
          <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5">
            <span className="sm:text-lg font-medium">02</span>
            <p className="sm:text-lg font-medium">Сбор урожая</p>
            <img src="/src/images/sprout 1.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
          </div>
          <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center rounded-lg sm:py-10 p-5 leading-">
            <span className="sm:text-lg font-medium">03</span>
            <p className="sm:text-lg font-medium text-center">Обработка продукции</p>
            <img src="/src/images/Group.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
          </div>
          <div className="flex flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5">
            <span className="sm:text-lg font-medium">04</span>
            <p className="sm:text-lg font-medium">Упаковка</p>
            <img src="/src/images/box-5 1.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
          </div>
          <div className="flex  flex-col gap-1 bg-[#E9DDD7] items-center  rounded-lg sm:py-10 p-5 col-span-2 lg:col-span-1">
            <span className="sm:text-lg font-medium">05</span>
            <p className="sm:text-lg font-medium">Доставка</p>
            <img src="/src/images/moshin.png" className="object-contain w-10 h-10 sm:h-15 sm:w-15 mt-5" alt="" />
          </div>
        </div>
      </div>

      <section className="bg-[#E9DDD7] mx-1 py-16 px-4 flex flex-col items-center rounded-2xl">
        <span className="uppercase text-sm border border-[#9D6F6C] px-4 py-1 rounded-full text-[#9D6F6C]">
          контакты
        </span>

        <h2 className="text-3xl md:text-4xl font-medium mt-6 text-center">
          Оставьте заявку
        </h2>
        <p className="text-lg text-center mt-3 max-w-lg">
          Получите лучшие продукты по выгодным условиям
        </p>

        <form className="flex flex-col gap-5 mt-10 w-full max-w-xl">
          <input
            type="text"
            placeholder="Ваше имя"
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
            Оставить заявку
          </button>
        </form>
      </section>

      
      <section className="bg-[#E9DDD7] py-16 px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          {/* Card 1 */}
          <div className="bg-[#E9DDD7] rounded-2xl shadow-md overflow-hidden flex flex-col p-5">
            <div className=" flex-1">
              <h3 className="text-lg md:text-xl font-medium leading-snug">
                Как выбрать качественные сухофрукты для бизнеса?
              </h3>
            </div>
            <div className="relative">
              <img
                src="/src/images/post1.jpg"
                alt="post1"
                className="w-full h-56 object-cover"
              />
              <a
                href="#"
                className="absolute -top-6 -right-6 bg-green-700 text-white rounded-full p-3 shadow-lg hover:bg-green-800 transition"
              >
                <BsArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E9DDD7] rounded-2xl shadow-md overflow-hidden flex flex-col p-5">
            <div className=" flex-1">
              <h3 className="text-lg md:text-xl font-medium leading-snug">
                Преимущества узбекских сухофруктов перед другими странами
              </h3>
            </div>
            <div className="relative">
              <img
                src="/src/images/sectionsurat.jpg"
                alt="post2"
                className="w-full h-56 object-cover"
              />
              <a
                href="#"
                className="absolute -top-6 -right-6 bg-green-700 text-white rounded-full p-3 shadow-lg hover:bg-green-800 transition"
              >
                <BsArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E9DDD7] rounded-2xl shadow-md overflow-hidden flex flex-col p-5">
            <div className=" flex-1">
              <h3 className="text-lg md:text-xl font-medium leading-snug">
                5 главных трендов в сфере здорового питания
              </h3>
            </div>
            <div className="relative">
              <img
                src="/src/images/post3.jpg"
                alt="post3"
                className="w-full h-56 object-cover"
              />
              <a
                href="#"
                className="absolute -top-6 -right-6 bg-green-700 text-white rounded-full p-3 shadow-lg hover:bg-green-800 transition"
              >
                <BsArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;
