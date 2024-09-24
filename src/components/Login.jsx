import React, { useState } from "react";
import "./login.css"; // Ensure this path is correct

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
        <h2>Create Account</h2>
        <form>
          <label htmlFor="file" style={{ cursor: "pointer" }}>
            <img src={avatar.url || "./src/assets/user.png"} alt="" />
            Upload a Profile Picture
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
