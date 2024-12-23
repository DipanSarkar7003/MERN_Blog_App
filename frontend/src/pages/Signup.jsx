import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
    console.log(copySignupInfo);
  };

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();
    // Send the signup info to the server for processing
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    const signupUrl = "http://localhost:3000/v1/api/user/register";
    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      console.log(result);
      if (!result.status) {
        alert("Error while signup, please try again later");
        return;
      }
      alert("Signup successful");
      // Redirect to the login page after successful signup

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.log("Error while signup", err);
      alert("Error while signup, please try again later");
      return;
    }
  };

  return (
    <div className="signupConatiner ">
      <div className="signupBox">
        <h1 className="text-center text-4xl pb-2">Create an account</h1>

        <p className="text-center">
          To Create your acount fill all the fields with valid information.{" "}
        </p>

        <form
          action=""
          className="signupForm"
          onSubmit={handleSignupFormSubmit}
        >
          <div className="signupFormGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              value={signupInfo.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="signupFormGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              value={signupInfo.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="signupFormGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter a strong Password"
              value={signupInfo.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center mb-3 ">
            <button className="signupButton" type="submit">
              Signup
            </button>
          </div>
          <div className="text-center">
            <p>
              Allready have an account ?{" "}
              <Link className="text-blue-500 mt-3" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
