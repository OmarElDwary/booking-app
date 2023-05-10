import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const style = {
  container: "flex flex-col items-center justify-center h-screen",
  title: "text-4xl font-bold text-[#2f3542] mb-4",
  form: "flex flex-col items-center justify-center gap-4 bg-[#f5f6fa] p-4 rounded-lg shadow-lg shadow-[#dfe4ea]",
  inputs: "flex flex-col items-center justify-center gap-2 w-96",
  input: "border-2 rounded-full p-2 w-96 shadow-lg shadow-[#dfe4ea]",
  btn: "bg-[#1e90ff] text-white rounded-full p-2 w-40 hover:bg-[#70a1ff] w-96 shadow-lg shadow-[#dfe4ea]",
  link: "flex flex-row items-center justify-center gap-2 text-[#2f3542] font-bold",
};
function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev){
    ev.preventDefault();
    try {
        await axios.post('/register', {
            email,
            username,
            number,
            country,
            password,
        });
        alert("User Registered Successfully");
    }
    catch(err){
        alert("User Registration Failed");
    }
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Register</h1>
      <form className={style.form} onSubmit={registerUser}>
        <div className={style.inputs}>
          <label htmlFor="email">Email</label>
          <input
            className={style.input}
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={ev => setEmail(ev.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            className={style.input}
            type="text"
            value={username}
            name="username"
            id="username"
            placeholder="Enter your username"
            onChange={ev => setUsername(ev.target.value)}
          />
          <label htmlFor="number">Phone Number</label>
          <input
            className={style.input}
            type="number"
            value={number}
            name="number"
            id="number"
            placeholder="Enter your phone number"
            onChange={ev => setNumber(ev.target.value)}
          />
          <label htmlFor="country">Country</label>
          <input
            className={style.input}
            type="text"
            value={country}
            name="country"
            id="country"
            placeholder="Enter your country"
            onChange={ev => setCountry(ev.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className={style.input}
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={ev => setPassword(ev.target.value)}
          />
          <button className={style.btn}>Register</button>
          <div className={style.link}>
            <Link to="/login">
                <span>Already have an account?</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterComponent;
