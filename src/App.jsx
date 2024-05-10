import { useState } from "react";
import Validation from "./Validation";

function App() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

  // console.log(values);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-10 rounded-md">
        <h3 className="text-2xl font-extrabold font-ubuntuB text-MarineBlue">
          Personal info
        </h3>
        <p className="opacity-60 mb-8">
          Please provide your name, email address, and phone number
        </p>
        <form onSubmit={handleValidation}>
          <div className="mt-5">
            <div className="flex justify-between items-center">
              <p>Full name</p>
              {errors.fullName && (
                <p className="text-errorMsg">{errors.fullName}</p>
              )}
            </div>
            <input
              className="border-2 border-zink mt-2 outline-none focus:border-MarineBlue w-full px-3 py-3 rounded-md"
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              onChange={handleInput}
            />
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-center">
              <p>Email</p>
              {errors.email && <p className="text-errorMsg">{errors.email}</p>}
            </div>
            <input
              className="border-2 border-zink mt-2 outline-none focus:border-MarineBlue w-full px-3 py-3 rounded-md"
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleInput}
            />
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-center">
              <p>Password</p>
              {errors.password && (
                <p className="text-errorMsg">{errors.password}</p>
              )}
            </div>
            <input
              className="border-2 border-zink mt-2 outline-none focus:border-MarineBlue w-full px-3 py-3 rounded-md"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInput}
            />
          </div>
          <button className="mt-10 border py-2 px-4 rounded-lg bg-MarineBlue text-white float-end">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
