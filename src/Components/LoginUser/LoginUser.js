import React, { useState } from "react";
import styles from './LoginUser.module.css'


const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "JohnDoe1", password: "1234567" },
  ]);

  const userExists = (user, pass) => {
    for (const account of accounts) {
      if (account.username === user && account.password === pass) {
        return true;
      }
    }
    return false;
  };

  const onSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    if (userExists(username, password)) {
      alert("Logged in successfully! Hi, " + username + ".");
    } else if (username.length > 6 && password.length > 6) {
      setAccounts([...accounts, { username, password }]);
      alert("Signed up successfully! Welcome, " + username + ".");
    } else {
      alert("Username and password must be more than 6 characters.");
      return;
    }
    setUsername("");
    setPassword("");
  };

  return (
    <form  onSubmit={onSubmit}>
      <h3>Login</h3>
      <input
        value={username}
        type="text"
        onChange={(e) =>
          e.target.value.length < 20
            ? setUsername(e.target.value)
            : alert("Username cannot exceed 20 characters.")
        }
        style={{ marginBottom: 5 }}
      />
      <input
        value={password}
        type="password"
        onChange={(e) =>
          e.target.value.length < 20
            ? setPassword(e.target.value)
            : alert("Password cannot exceed 20 characters.")
        }
        style={{ marginBottom: 10 }}
      />
      <button style={{ alignSelf: "center" }} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default LoginUser;