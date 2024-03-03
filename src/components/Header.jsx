import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'} className="font-bold text-sm sm:text-xl">
          <img
            className="w-[162.58px]"
            src="https://atghelp.files.wordpress.com/2017/02/logo-in.png?w=774&h=178&crop=1"
            alt=""
          />
        </Link>
        <form className="bg-slate-100 p-3 w-[360px] gap-3 px-7 rounded-full flex items-center">
          <button>
            <FaSearch className="text-slate-600 " />
          </button>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="bg-transparent focus:outline-none w-[242px] sm:w-64"
          />
        </form>
        <div className="flex items-center gap-2 hover:underline">
          <p>Create account.</p>
          <Link to={"/register"}>
            <span className="text-blue-700"> It’s free!</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
