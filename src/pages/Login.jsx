import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin"); // Admin | Doctor
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let endpoint = "";
      if (state === "Admin") endpoint = "/api/admin/login";
      else if (state === "Doctor") endpoint = "/api/doctor/login";

      const { data } = await axios.post(`${backendUrl}${endpoint}`, {
        email,
        password,
      });

      if (data.success) {
        if (state === "Admin") {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else if (state === "Doctor") {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        }
        toast.success(`${state} Login Successful`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>

        {/* Email Input */}
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded p-2 mt-1 w-full"
            type="email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded p-2 mt-1 w-full"
            type="password"
            required
          />
        </div>

        {/* Login Button */}
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>

        {/* Toggle Options */}
        <div className="text-sm flex flex-col gap-1 mt-2 w-full text-center">
          {state !== "Admin" && (
            <p>
              Admin Login?{" "}
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState("Admin")}
              >
                Click Here
              </span>
            </p>
          )}

          {state !== "Doctor" && (
            <p>
              Doctor Login?{" "}
              <span
                className="text-primary underline cursor-pointer"
                onClick={() => setState("Doctor")}
              >
                Click Here
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
