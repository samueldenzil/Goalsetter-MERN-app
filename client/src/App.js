import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  function submitForm(event) {
    event.preventDefault();

    const registered = {
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      password: user.password,
    };

    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((response) => console.log(response.data));

    setUser({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="bg-gray-500 w-screen h-screen flex justify-center items-center">
      <div className="h-2/3 w-96 bg-white rounded-lg">
        <form
          onSubmit={submitForm}
          className="flex flex-col justify-center items-center w-full h-full gap-6 px-12"
        >
          <h1 className="text-xl font-bold">Login Page</h1>
          {/* Full Name input field */}
          <input
            type="text"
            name="fullname"
            placeholder="Enter Full Name"
            value={user.fullName}
            onChange={(event) =>
              setUser((prevUser) => ({
                ...prevUser,
                fullName: event.target.value,
              }))
            }
            className="border-2 w-full py-2 px-4 rounded"
          />
          {/* Username input field */}
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={user.username}
            onChange={(event) =>
              setUser((prevUser) => ({
                ...prevUser,
                username: event.target.value,
              }))
            }
            className="border-2 w-full py-2 px-4 rounded"
          />
          {/* email input field */}
          <input
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={user.email}
            onChange={(event) =>
              setUser((prevUser) => ({
                ...prevUser,
                email: event.target.value,
              }))
            }
            className="border-2 w-full py-2 px-4 rounded"
          />
          {/* password input field */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={(event) =>
              setUser((prevUser) => ({
                ...prevUser,
                password: event.target.value,
              }))
            }
            className="border-2 w-full py-2 px-4 rounded"
          />
          {/* Submit Button */}
          <input
            type="submit"
            className="px-4 py-2 bg-gray-500 hover:bg-gray-400 mt-6 w-full text-white cursor-pointer rounded"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
