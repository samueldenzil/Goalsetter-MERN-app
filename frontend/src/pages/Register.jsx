import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  function handleFormChange(event) {
    setRegisterData((prevRegisterData) => {
      return {
        ...prevRegisterData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password, password2 } = registerData;
    console.log("form submitted");
  }

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className=" w-4/6 flex flex-col items-start justify-between md:p-20 py-12 px-4 ">
        <div className="mx-auto text-center">
          <h1 className="flex gap-2 justify-center items-center text-5xl font-bold">
            <FaUser /> Register
          </h1>
          <p className="mt-5 text-3xl font-semibold text-gray-500">
            Please Create an account
          </p>
        </div>
        <div className="mt-10 mx-auto w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={registerData.name}
              placeholder="Enter your name"
              onChange={handleFormChange}
              className="my-2 text-sm w-full px-4 py-2 outline-none rounded-md border focus:border-gray-500"
            />
            <input
              type="email"
              name="email"
              value={registerData.email}
              placeholder="Enter your email"
              onChange={handleFormChange}
              className="my-2 text-sm w-full px-4 py-2 outline-none rounded-md border focus:border-gray-500"
            />
            <input
              type="password"
              name="password"
              value={registerData.password}
              placeholder="Enter password"
              onChange={handleFormChange}
              className="my-2 text-sm w-full px-4 py-2 outline-none rounded-md border focus:border-gray-500"
            />
            <input
              type="password"
              name="password2"
              value={registerData.password2}
              placeholder="Confirm password"
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

export default Register;
