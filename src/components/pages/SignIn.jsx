import { useState } from "react";
import { Link } from "react-router";
function SignUp() {
  const [formInputs, setformInputs] = useState({ userName: "", password: "" });
  console.log(formInputs);
  return (
    <section>
      <div className="container mx-auto flex justify-center items-center flex-wrap">
        <div className="col lg:w-[70%] pt-8 lg:pt-0">
          <p className="text-center mb-2 font-bold text-xl">Welcome Back!</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-1 p-2 lg:w-[70%] mx-auto">
            <label htmlFor="userName">Username:</label>
            <input className="border border-[#656ED3] rounded-2xl outline-none mb-2 p-1" type="text" id="userName" onChange={(e) => setformInputs({ ...formInputs, userName: e.target.value })} />
            <label htmlFor="password">Password:</label>
            <input
              className="border border-[#656ED3] rounded-2xl outline-none mb-4 p-1"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setformInputs({ ...formInputs, password: e.target.value })}
            />
            <button className="bg-[#656ED3] border border-[#656ED3] rounded-2xl text-white outline-none p-1">Register</button>
          </form>
          <p className="text-center my-2 text-md">
            Dont have and account?
            <Link className="font-bold ml-1" to={"/"}>
              Register
            </Link>
          </p>
          <div className="social-media flex gap-2 justify-center items-center">
            <Link to={"/"}>
              <i className="fa-brands fa-facebook text-xl text-[#656ED3]"></i>
            </Link>
            <Link to={"/"}>
              <i className="fa-brands fa-whatsapp text-xl text-[#656ED3]"></i>
            </Link>
            <Link to={"/"}>
              <i className="fa-brands fa-telegram text-xl text-[#656ED3]"></i>
            </Link>
          </div>
        </div>
        <div className="col bg-[#AFB3FF] h-screen lg:flex justify-center items-center lg:w-[30%] hidden relative">
          <img className="w-[70%] absolute -left-20" src="/images/laptop.webp" alt="laptop" />
        </div>
      </div>
    </section>
  );
}
export default SignUp;
