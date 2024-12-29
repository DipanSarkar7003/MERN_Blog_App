import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
    console.log(copyLoginInfo);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Send the signup info to the server for processing
    const { email, password } = loginInfo;
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    const signupUrl = "http://localhost:3000/v1/api/user/login";
    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      const { data, status, token } = result;

      console.log(result);
      if (!status) {
        alert("Invalid email or password");
        return;
      }

      handleLogin(data, token);
      alert("Login successful" + " " + data.name);

      navigate("/home");
    } catch (err) {
      console.log("Error while Login", err);
      alert("Error while Login, please try again later");
      return;
    }
  };

  return (
    <div className="signupConatiner ">
      <div className="signupBox">
        <h1 className="text-center text-4xl pb-2 ">Login to your account</h1>

        <p className="text-center">
          To Login to your acount fill all the fields with valid information.{" "}
        </p>

        <form action="" className="signupForm" onSubmit={handleLoginSubmit}>
          <div className="signupFormGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              value={loginInfo.email}
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
              value={loginInfo.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center mb-3 ">
            <button className="signupButton" type="submit">
              Login
            </button>
          </div>
          <div className="text-center">
            <p>
              Don't have an account ?{" "}
              <Link className="text-blue-500 mt-3" to="/">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
