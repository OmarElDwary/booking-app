import React from 'react'
import { Link } from 'react-router-dom'

const style = {
    container: "flex flex-col items-center justify-center p-40",
    title: "text-4xl font-bold text-[#2f3542] mb-4",
    form: "flex flex-col items-center justify-center gap-4 bg-[#f5f6fa] p-4 rounded-lg shadow-lg shadow-[#dfe4ea]",
    inputs: "flex flex-col items-center justify-center gap-2 w-96",
    input: "border-2 rounded-full p-2 w-96 shadow-lg shadow-[#dfe4ea]",
    btn: "bg-[#1e90ff] text-white rounded-full p-2 w-40 hover:bg-[#70a1ff] w-96 shadow-lg shadow-[#dfe4ea]",
    link: "flex flex-row items-center justify-center gap-2 text-[#2f3542] font-bold",
}
function LoginComponent() {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Login</h1>
        <form className={style.form}>
            <div className={style.inputs}>
                <label htmlFor="email">Email</label>
                <input className={style.input} type="email" name="email" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password</label>
                <input className={style.input} type="password" name="password" id="password" placeholder="Enter your password" />
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
  )
}

export default LoginComponent