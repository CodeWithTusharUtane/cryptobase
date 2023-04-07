import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError('')
    try{
      await signUp(email, password)
    }catch(e){
      setError(e.message)
      console.log(e.message)
    }
  }  

  return (
    <div className="font-poppins">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold lg:text-6xl lg:pb-10">Sign Up</h1>
        {error ? <p className="bg-red-300 p-3 my-2 ">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4 ">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="outline-none w-full p-2 bg-primary border border-input rounded-full"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="outline-none w-full p-2 bg-primary border border-input rounded-full"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-full shadow-xl font-bold">
            Sign up
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-accent">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
