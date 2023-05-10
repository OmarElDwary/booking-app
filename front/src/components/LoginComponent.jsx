import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
const style = {
  container: "flex flex-col items-center justify-center p-40",
  title: "text-4xl font-bold text-[#2f3542] mb-4",
  form: "flex flex-col items-center justify-center gap-4 bg-[#f5f6fa] p-4 rounded-lg shadow-lg shadow-[#dfe4ea]",
  inputs: "flex flex-col items-center justify-center gap-2 w-96",
  input: "border-2 rounded-full p-2 w-96 shadow-lg shadow-[#dfe4ea]",
  btn: "bg-[#1e90ff] text-white rounded-full p-2 w-40 hover:bg-[#70a1ff] w-96 shadow-lg shadow-[#dfe4ea]",
  link: "flex flex-row items-center justify-center gap-2 text-[#2f3542] font-bold",
};
function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const  {setUser} = useContext(UserContext);

  async function handleLoginSubmit (ev){
    ev.preventDefault();
    try{
        const {data} = await axios.post('/login', {email,password});
        setUser(data);
        setRedirect(true);
    } catch (err) {
        alert(err);
    }
};

if(redirect){
    return <Navigate to="/" />
}

  return (
    <div className={style.container}>
      <h1 className={style.title}>Login</h1>
      <form className={style.form} onSubmit={handleLoginSubmit}>
        <div className={style.inputs}>
          <label htmlFor="email">Email</label>
          <input
            className={style.input}
            type="email"
            name="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            className={style.input}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Enter your password"
          />
          <button className={style.btn}>Login</button>
          <div className={style.link}>
            <Link to="/register">
              <span>Don't have an account?</span>
            </Link>
            <span>Forgot Your Password</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
