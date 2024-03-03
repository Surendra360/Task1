import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const SignIn = () => {
  const navigate = useNavigate();
  const [passhow, setPassShow] = useState(false);
  const [inputData, setInputData] = useState({
    email:"",
    password:"",
  })
  const [data, setData] = useState([]);
  

  const getData = (e) =>{
    const {value,name} = e.target;

    setInputData(()=>{
      return{
        ...inputData,[name]: value
      }
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault();

    const getuserArr = localStorage.getItem("userinfo");
    const {email,password} = inputData;
    if(email===""){
      alert("Enter your Email");
    }else if(!email.includes("@")){
      alert("Enter valid email");
    }else if(password===""){
      alert("Enter your password");
    }else if(password.length < 6){
      alert("Password should be at least 6 characters long.")
    }else{
      
      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        console.log(userdata);
        const userlogin = userdata.filter((elem,k)=>{
            return  elem.email == email && elem.password == password;
        });
        if(userlogin.length === 0){
          alert("Invalid Details");
        }else{
          alert("User login successfully");
          localStorage.setItem("user_login",JSON.stringify(userlogin));
          navigate('/')
        }
      }
    }
  }

  
  return (
    <div className="flex items-center justify-center">
    <div className="w-[736px] h-[513px] bg-slate-100 rounded-lg ">
      <p className="text-center mt-[17px] text-[#1E985B]">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </p>
      <div className="mt-[41px] mx-[36px] flex items-center justify-between">
        <div className="w-[320px] h-[403px] ">
          <h1 className="text-[24px] font-bold">Sign In</h1>
          <form className="flex flex-col mt-[24px]">
            <input
              type="email"
              placeholder="email"
              className="border p-3 h-[46px]"
              name="email"
              onChange={getData}
            />
           <div className="flex items-center relative">
           <input
              type={!passhow ? "password" : "text"}
              placeholder="password"
              className="border w-[320px] p-3 h-[46px]"
              name="password"
              onChange={getData}
            />
            <div onClick={() => setPassShow(!passhow)} className="absolute right-[3%]">
            {!passhow ? <MdOutlineRemoveRedEye className="text-slate-400" /> : <RxCross2 />}
            </div>
           </div>

            <button onClick={submitHandler} className="bg-blue-500 text-white h-[40px] rounded-full hover:opacity-95 disabled:opacity-80 mt-[19px]">
              Sign In
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
            <button className="border text-[12px] font-semibold border-slate-300 flex items-center justify-center mt-[23px] gap-[3px] h-[16px]">
                {" "}
                Forgot Password?
              </button>
          </form>
        </div>
        <div className="w-[320px] h-[403px] ">
          <div className="flex gap-2 ml-4">
            <p className="text-[14px]">Don’t have an account yet?</p>
            <Link to={"/register"}>
              <span className="text-blue-700 text-[14px]"> Create new for free!</span>
            </Link>
          </div>
          <div className="h-[320px] w-[320px] mt-[31px]">
              <img src="https://interwiu.com/static/media/group3.1bb6213651fd38d51ded.png" alt="" />
          </div>
          
        </div>
      </div>

      {/**/}
    </div>
  </div>
  )
}

export default SignIn