import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { post } from "../../../global/services";
import { useAuth } from "../../../contexts/AuthContext";
import { ROUTES } from "../../../global/routes";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const submitHandler = async (data) => {
    setLoading(true);
    const [response, error] = await post("users/login", data);
    setLoading(false);
    login({ user: response.data.user, token: response.data.token });
    if (!error) {
      if (response.data.user.role === "jobseeker") {
        navigate(ROUTES.PROFILE);
      } else if(response.data.user.role === "admin") {
        navigate(ROUTES.ADMIN_PANEL)
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-xl p-8 grid grid-cols-1 gap-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl"
      >
        {/* Email */}
        <Input
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email}
        />

        {/* Password */}
        <Input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          error={errors.password}
        />

        {/* Reset and Submit Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="reset"
            className="bg-red-500 hover:bg-red-700 text-white hover:scale-105 duration-300 active:100 px-6 py-2 rounded-lg shadow-md"
          >
            Reset
          </button>
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 hover:scale-105 duration-300 active:100 px-6 py-2 rounded-lg shadow-md text-white ${loading && "opacity-50 cursor-not-allowed"
              }`}
            disabled={loading}
          >
            {loading ? <Spin /> : "Login"}
          </button>
        </div>

        <div className="">
          <div className="text-center">
            <Link
              to={ROUTES.FORGOT_PASSWORD}
              className="text-blue-600 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <Link
              to={ROUTES.REGISTER}
              className="text-blue-600 hover:underline"
            >
              Register here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
