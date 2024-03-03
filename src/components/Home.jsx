import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdPeople } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { SlBag } from "react-icons/sl";
import { MdEdit } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full relative ">
      <div className="w-full h-[440px] sm:top-[-30%] relative ">
        <img
          className=" w-full h-[440px] object-cover position-absolute bottom-0"
          src="https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P4vPD5ky0eJlPFRlydVNaMBIR7ZaMZjKyffYgCz4sWb7jqYmFu7tLdeigdyM~7R2eBCHxRloK8MO6j1pHMEylr-40-eWtHZj0sUZbvEzUVMqBd1qAR~DzDc2o~68qp2-h9SO3RhD-5XOIzwXJpHVoI-quX4h3ZLQTjLzSVQ5MhaCs-~QcJE8p8xZFikRKZ2bkofMfrcH7X0cKvYcvj-L86SA7S8om6JuRxiN4RVYgcYBIgWlw~-ubhgK5y5fqGKfuuK1g~ZmO0572Karypqn5Klvd2JjMYPJeONgxYYOQa4DRRIlCa0Z03UFalCDyruQ0Hjwsih7giAvT0x7OhvdAw__"
          alt=""
        />
      </div>
      <div className=" div w-full h-[440px] bg-zinc-800/45 absolute top-0 ">
        <div className="absolute heading z-[100] left-[200px] bottom-[80px] text-white ">
          <h1 className="text-[36px] text-white font-bold  ">
            Computer Engineering
          </h1>
          <p className="text-[18px]">142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className="container flex justify-between items-center max-w-6xl mx-auto p-3">
        <ul className="flex items-center gap-[20px]">
          <Link to="/">
            <li className="hidden sm:inline text-[16px] text-slate-700 ">
              All Posts(32)
            </li>
          </Link>
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 ">Article</li>
          </Link>
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 ">Event</li>
          </Link>
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 ">Education</li>
          </Link>
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 ">Job</li>
          </Link>
        </ul>
        <div className="flex items-center mt-[47px] space-x-4">
          <button className="border-2 flex items-center gap-2 border-zinc-200 bg-zinc-300  text-black p-2 rounded-sm hover:opacity-95  hover:border-blue-500 hover:border-2 hover:shadow-md disabled:opacity-80">
            Write a Post <FaCaretDown />
          </button>
          <button className="border-2 flex items-center gap-2 border-blue-500 bg-blue-700 text-white p-2 rounded-sm   hover:opacity-95 hover:border-blue-500 hover:border-2 hover:shadow-md disabled:opacity-80">
            <IoMdPeople />
            Join Group
          </button>
        </div>
      </div>
      <div className="container mx-auto w-full h-[2px] bg-zinc-200"></div>
      <div className="flex ">
        <div className=" container rounded-lg overflow-hidden border-zinc-300 mx-auto mt-[28px] h-[1751px] w-[692px] ">
          <div className="border-[1.2px] rounded-lg mb-[16px] w-full h-[472px]">
            <div className="w-full h-[220px] ">
              <img
                className="w-full h-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkTMclGesAM~x8asHfhKYVctLf9OOufe~VgHN7L-f0pBk7WNVdQX4eTTGrP11oWCxMoo2pBTFknKWX1A~y~mk1sTUmLuCzDBnF20J45AHRdEdl~AKgcEgERcNbdn0tmXWN0cVvEA7CIDBg2vlc-~UYREaRxaZ-yqkxdF1~EYj-0ijsMFMVfa5ao1-pqeD85bmaNGVHUDoV03WchMBaI23UuWpM~qMRZrn7GAJ0AKL9YuqiONYwRCdFvkhXRV9PADval3ZCxRzd6CgsR0AQWU0Ns6ud1PQhaoIkJ3UrwhngdYl-eFV5vv9IHWIxL6WB1Fy9N5gbsiN66bt2FigGzTNw__"
                alt=""
              />
            </div>
            <div className="mt-[20px] mx-[40px] mb-[10px]">
              <span className="text-[18px] font-semibold">Artical</span>
            </div>
            <div className="mx-[20px] flex items-center">
              <p className="text-[22px] w-[600px] h-[60px] font-semibold">
                What if famous brands had regular fonts? Meet RegulaBrands!
              </p>
              <span className="h-[28px] w-[28px] relative">
                <MdMoreHoriz className="text-[20px]" onClick={openModal} />
                {
                  isModalOpen && (
                    <div className="w-[160px] h-[102px] absolute right-2 bg-slate-200  ">
                      <div className=" rounded-lg">
                        <button className=" hover:text-gray-700" onClick={closeModal}><IoCloseSharp className=" mx-[12px]"/></button>
                      </div>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Edit</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Report</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Option 3</h2>
                    </div>
                  )
                }
              </span>
            </div>
            <div className="mt-[12px] mx-[20px] h-[25px]">
              <p className="text-[19px]">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="mb-[20px] mx-[20px] mt-[40px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-red-600">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inrjLLSVSIUZw6p2~Ag9a3muPfI-AdO~yGgT5A4EDRLRr-b3cX6P0eQGVqZNkQBq1e4pB9S6S9xH-rAqwlLxlHqKGu2TsQ8XntI4dQb3We1PGmo3yBVn~R5a9mLqd-Lz66Q1d7MGuB1FEVH1EAoLrew-Vd8HEwj2sH6XOHO6u-K9BdHAW-PNmlTYRPhcfaWSP~U-6w7caSJer200JDjYnB6cLZZX4AJNEuj2zT9xEfQuyL3MDSPfhS4E22WcNE-EnRwmDo9DzUmnL3kDJ-DzgJhhuAtcdoco9Zm-unKJH19Ns891S4qiNT1NDl6RjWAPKxwharDpSldEIK5EtOITWg__"
                    alt=""
                  />
                </div>
                <h1 className="text-[18px]">Sarthak Kamra</h1>
              </div>
              <div className="flex items-center gap-[40px]">
                <h1 className=" flex items-center gap-[8px] w-[95px] text-[14px]">
                  <IoEyeOutline />
                  1.4k views
                </h1>
                <h1 className="w-[42px] h-[36px] bg-[#FFFFFF] flex items-center justify-center">
                  <IoShareSocial />
                </h1>
              </div>
            </div>
          </div>
          <div className="border-[1.2px] rounded-lg mb-[16px] w-full h-[472px]">
            <div className="w-full h-[220px] ">
              <img
                className="w-full h-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mfVU0f31Ny91ctpadqlgvRGyDcDq1WyC4smR08JBYvstpi-E5WGGhQoeJf-rP1Tn1aDaAUmsLE4tPcHqO-454-0GLr6zHSgvwAVvTHoJWw-86jDwgHQIioWnLwQ~nIMw~l6HPciqq60WrhAxzkt-VKSfz1qqmDuiq2io2eJz3GKaIIg9DqwOdbGrZOs~~1Y~54Jao7epBhiNJisMEvOXBCdTLk0~ZKUtcSKCXk3HVWBv~eYAU0OaJaH9g-YtZd3H4zDfGy7Y9XgotLtpdsa9nSws70s95anqyNrxW9qWBbCO2lcMG3OJBoghHy4swX3~HiSMQ0pfWBc~7ctOaLKt0Q__"
                alt=""
              />
            </div>
            <div className="mt-[20px] mx-[40px] mb-[10px]">
              <span className="text-[18px] font-semibold">Education</span>
            </div>
            <div className="mx-[20px] flex items-center gap-[24px]">
              <p className="text-[22px] w-[600px] h-[60px] font-semibold">
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </p>
              <span className="h-[28px] w-[28px] relative">
                <MdMoreHoriz className="text-[20px] " onClick={openModal} />
                {
                  isModalOpen && (
                    <div className="w-[160px] h-[102px] absolute right-2 bg-slate-200  ">
                      <div className=" rounded-lg">
                        <button className=" hover:text-gray-700" onClick={closeModal}><IoCloseSharp className=" mx-[12px]"/></button>
                      </div>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Edit</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Report</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Option 3</h2>
                    </div>
                  )
                }
              </span>
            </div>
            <div className="mt-[12px] mx-[20px] h-[25px]">
              <p className="text-[19px]">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="mb-[20px] mx-[20px] mt-[40px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-red-600">
                  <img
                    className="w-full h-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgufcVI56dfouV16Rgo21wTTYQ0x4yKD7jeQ8EX2MGVOqgqbgZjegaH5lQbQBI3lDiEquC69LFY3awL53LQn2L4-lDHC-qCk5xsGfBNh3s6u2VJtgX~HmjVSIz36oQmPFJFOPMUJJaHCwL17nknr14zpKyn5us1ctm54aaMii2L5q1evAW7DDhpWwZTE5BVixLC9CTNIfxJwJwYbAoq8KFHOdMmyCltDHEsqVksAiSy8-zbY3f5pgQXYlb~qXlh7mabsRrwgXY99CUyYQULHyPxlZm4hc8EhDbkpKD6syYGYZ7lL6BhvnrV~biKgqUWk1uoyQyinG2qJu19MySb7wg__"
                    alt=""
                  />
                </div>
                <h1 className="text-[18px]">Sarah West</h1>
              </div>
              <div className="flex items-center gap-[40px]">
                <h1 className=" flex items-center gap-[8px] w-[95px] text-[14px]">
                  <IoEyeOutline />
                  1.4k views
                </h1>
                <h1 className="w-[42px] h-[36px] bg-[#FFFFFF] flex items-center justify-center">
                  <IoShareSocial />
                </h1>
              </div>
            </div>
          </div>
          <div className="border-[1.2px] rounded-lg mb-[16px] w-full h-[490px]">
            <div className="w-full h-[220px] ">
              <img
                className="w-full h-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9wQOexENrog7-LiDtCHy58V9TWhCR0Vwwrk1Xbkls3vltSFP4QGLEWu0qBijEZoGj33yMqbcwun1fgvIdhQY3~jU685C3ABgDBJxG92ozITNmkRuLUXGqi4X7UDhfn-egDVDaT062DlogXH2eiH5CbcqtI-b0CBAUdHNmQcopSRq2ltOVa56gqMOZikUTLOI3-D3EQ0WWUCDJPRXKnmAfpoHr-Wcn1nfBuW9u1HaxbSnwlXGlDOjwpyFXrU32YaIlxIqI8iZf2-ASDWYr4lg4rsARPEFt8SrWUI7ga2qZsHh04oeW2AVme0VzorSHnyXxjNuow86rojZWUcSSQpdg__"
                alt=""
              />
            </div>
            <div className="mt-[20px] mx-[40px] mb-[10px]">
              <span className="text-[18px] font-semibold">Meetup</span>
            </div>
            <div className="mx-[20px] flex items-center gap-[19px]">
              <p className="text-[22px] w-[600px] h-[29px] font-semibold">
                Finance & Investment Elite Social Mixer @Lujiazui
              </p>
              <span className="h-[28px] w-[28px] relative">
                <MdMoreHoriz className="text-[20px]" onClick={openModal} />
                {
                  isModalOpen && (
                    <div className="w-[160px] h-[102px] absolute right-2 bg-slate-200  ">
                      <div className=" rounded-lg">
                        <button className=" hover:text-gray-700" onClick={closeModal}><IoCloseSharp className=" mx-[12px]"/></button>
                      </div>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Edit</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Report</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Option 3</h2>
                    </div>
                  )
                }
              </span>
            </div>
            <div className="mt-[12px] mx-[20px] h-[29px] flex items-center gap-[40px]">
              <h1 className="flex items-center gap-[4px]">
                <RiCalendarEventFill />
                Fri, 12 Oct, 2018
              </h1>
              <span className="flex items-center gap-[4px]">
                <MdOutlineLocationOn />
                Ahmedabad, India
              </span>
            </div>
            <div className="mt-[16px] mx-[20px] flex items-center justify-center">
              <button className="w-[652px] h-[38px] border border-zinc-300 rounded-lg text-[#E8754E]">
                Visit Website
              </button>
            </div>
            <div className="mb-[20px] mx-[20px] mt-[26px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-red-600">
                  <img
                    className="w-full h-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Le44pLgUWhAytYYdnqWKpi~zkbd8mm6yZT7-8a9seNdk9pw1-JKu6ARrNb3EKpypdKIdGs9GzPp~RIdVkPzIGAl5PTfAx4A4HD-wnoY5H4SH2whKx1Ojbp2rp8Iv2aztVuuL4aRbpqWPS3y83aX~PUr8ndBN1EhYzg1jGfIu5CuN8NShKpPvKkkogi4mhmUSMt9l~UB9Ls~G6xvvXKVWrhEGafjZV~OHMS2gmMlJWYC-FZRCH5e8TdqSII3xKN9aYK~FG0Wn3Tw4Vrc1DDTR~wIaMZGipOBB-d3SVdWTUd4c7R1be1THLJqhncrjGnQgE6J5n4CFdusT9OxrM3JLsA__"
                    alt=""
                  />
                </div>
                <h1 className="text-[18px]">Ronal Jones</h1>
              </div>
              <div className="flex items-center gap-[40px]">
                <h1 className=" flex items-center gap-[8px] w-[95px] text-[14px]">
                  <IoEyeOutline />
                  1.4k views
                </h1>
                <h1 className="w-[42px] h-[36px] bg-[#FFFFFF] flex items-center justify-center">
                  <IoShareSocial />
                </h1>
              </div>
            </div>
          </div>
          <div className="h-[269px] border-[1.2px] rounded-lg">
            <div className="mt-[20px] mx-[40px] mb-[10px]">
              <span className="text-[18px] font-semibold">Job</span>
            </div>
            <div className="mx-[20px] flex items-center gap-[24px]">
              <p className="text-[22px] w-[600px] h-[60px] font-semibold">
                Software Developer
              </p>
              <span className="h-[28px] w-[28px] relative">
                <MdMoreHoriz className="text-[20px]" onClick={openModal}/>
                {
                  isModalOpen && (
                    <div className="w-[160px] h-[102px] absolute right-2 bg-slate-200  ">
                      <div className=" rounded-lg">
                        <button className=" hover:text-gray-700" onClick={closeModal}><IoCloseSharp className=" mx-[12px]"/></button>
                      </div>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Edit</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Report</h2>
                      <h2 className=" w-[160px] h-[26px] px-[12px] text-[14px] ">Option 3</h2>
                    </div>
                  )
                }
              </span>
            </div>
            <div className="mt-[-14px] mx-[20px] h-[29px] flex items-center gap-[40px]">
              <h1 className="flex items-center gap-[4px]">
                <SlBag />
                Innovaccer Analytics Private Ltd.
              </h1>
              <span className="flex items-center gap-[4px]">
                <MdOutlineLocationOn />
                Noida, India
              </span>
            </div>
            <div className="mt-[16px] mx-[20px] flex items-center justify-center">
              <button className="w-[652px] h-[38px] border border-zinc-300 rounded-lg text-[#02B875]">
                Apply on Timesjobs
              </button>
            </div>
            <div className="mb-[20px] mx-[20px] mt-[26px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden bg-red-600">
                  <img
                    className="w-full h-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4UULEcCpc67Y7b1nU4-3BFPzJfozFrL66ZoHMUwtbqBsvPJtfzzWzK3Ez6QwVkVpCzfP6ZgqB10UowDZXHirbpMNR-RgwkUFSnoLfVTJsLkSWexsUyOsprN-vC64f0x5yP4morFAbXSyQuVYOKZtSMk-j5HGaE5qIepssev2cYA61qsD4xhxahigaxmcqDfOQKZE04iC-3kKv41ydPykNd2VxaKIo6nSn7-uQ28ECXY5FwhOgJ7BO31kklglEGrQmWQ0J-iGlcQuWBnHjz2AWYEFWYQ2VPphNKkFsA3ScxXZlmIzICEHiZibRPTfEhS35wSy~a9KPo6CRABA5xcAg__"
                    alt=""
                  />
                </div>
                <h1 className="text-[18px]">Joseph Gray</h1>
              </div>
              <div className="flex items-center gap-[40px]">
                <h1 className=" flex items-center gap-[8px] w-[95px] text-[14px]">
                  <IoEyeOutline />
                  1.4k views
                </h1>
                <h1 className="w-[42px] h-[36px] bg-[#FFFFFF] flex items-center justify-center">
                  <IoShareSocial />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-[28px] w-[300px] h-[150px] ">
          <div className="mt-[20px] mx-[20px] flex items-start justify-between h-[18px]">
            <h1 className="flex items-center gap-[4px]">
              <MdOutlineLocationOn />
              Noida, India
            </h1>
            <span>
              <MdEdit />
            </span>
          </div>
          <div className="container mt-[11px] mx-auto w-[230px] h-[2px] bg-zinc-200"></div>
          <div className="mt-[32px] w-[243px] mx-[20px] h-[32px] flex gap-[4px] ">
            <span className="mt-[3px]">
              <RiErrorWarningLine />
            </span>
            <p className="text-[12px] ">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};

export default Home;
