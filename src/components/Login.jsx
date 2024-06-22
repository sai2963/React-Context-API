import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} =useContext(UserContext)
  const handleButton = (e) => {
    e.preventDefault()
    setUser({userName,password})
    // Handle login logic here
    console.log("Username:", userName);
    console.log("Password:", password);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="UserName"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleButton}>Submit</button>
    </div>
  );
};

export default Login;
