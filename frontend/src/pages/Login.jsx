import React from "react";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleFormChange(event) {
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = loginData;
    console.log("form submitted");
  }

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className=" w-4/6 flex flex-col items-start justify-between md:p-20 py-12 px-4 ">
        <div className="mx-auto text-center">
          <h1 className="flex gap-2 justify-center items-center text-5xl font-bold">
            <FaSignInAlt /> Login
          </h1>
          <p className="mt-5 text-3xl font-semibold text-gray-500">
            Login and start setting goals
          </p>
        </div>
        <div className="mt-10 mx-auto w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={loginData.email}
              placeholder="Enter your email"
              onChange={handleFormChange}
              className="my-2 text-sm w-full px-4 py-2 outline-none rounded-md border focus:border-gray-500"
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              placeholder="Enter password"
              onChange={handleFormChange}
              className="my-2 text-sm w-full px-4 py-2 outline-none rounded-md border focus:border-gray-500"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full font-semibold bg-black text-white rounded-md p-2 mt-6 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
