import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Register = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[736px] h-[513px] bg-slate-100 rounded-lg ">
        <p className="text-center mt-[17px] text-[#1E985B]">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
        <div className="mt-[41px] mx-[36px] flex items-center justify-between">
          <div className="w-[320px] h-[403px] ">
            <h1 className="text-[24px] font-semibold">Create Account</h1>
            <form className="flex flex-col mt-[24px]">
              <div className="flex">
                <input
                  type="text"
                  placeholder="firstname"
                  className="border p-3 h-[46px] w-[160px]"
                  id="firstname"
                />
                <input
                  type="text"
                  placeholder="lastname"
                  className="border p-3 h-[46px] w-[160px]"
                  id="lastname"
                />
              </div>
              <input
                type="email"
                placeholder="email"
                className="border p-3 h-[46px]"
                id="email"
                required
              />
             <div className="flex items-center relative">
             <input
                type="password"
                placeholder="password"
                className="border w-[320px] p-3 h-[46px]"
                id="password"
                required
              />
              <div className="absolute right-[3%]">
              <MdOutlineRemoveRedEye className="text-slate-400" />
              </div>
             </div>
              <input
                type="password"
                placeholder="Confirm password"
                className="border p-3 h-[46px] "
                id="password"
              />

              <button className="bg-blue-600 text-white h-[40px] rounded-full hover:opacity-95 disabled:opacity-80 mt-[19px]">
                Create Account
              </button>
              <div className="flex flex-col gap-[8px] mt-[16px]">
                <button className="border flex items-center justify-center border-slate-300 gap-[3px] h-[38px]">
                  <FaFacebook className="text-blue-600" /> Sign up with Facebook
                </button>
                <button className="border border-slate-300 flex items-center justify-center gap-[3px] h-[38px]">
                  {" "}
                  <FcGoogle />
                  Sign up with Google
                </button>
              </div>
            </form>
          </div>
          <div className="w-[320px] h-[403px] ">
            <div className="flex gap-2 ml-40">
              <p className="text-[14px]">Have an account?</p>
              <Link to={"/sign-in"}>
                <span className="text-blue-700 text-[14px]">Sign In</span>
              </Link>
            </div>
            <div className="h-[320px] w-[320px] mt-[31px]">
                <img src="https://interwiu.com/static/media/group3.1bb6213651fd38d51ded.png" alt="" />
            </div>
            <div className="mt-[12px]">
                <p className="text-[10px]">By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
          </div>
        </div>

        {/**/}
      </div>
    </div>
  );
};

export default Register;
