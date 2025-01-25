import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import MultipleSelect from "../../../components/MultipleSelect";
import { post } from "../../../global/services";
import {
  genderOptions,
  experienceOptions,
  skillOptions,
} from "../../../global/global";
import { ROUTES } from "../../../global/routes";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import style from "./Register.module.css";

const index = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    setLoading(true);
    const [response, error] = await post("users/register", {
      ...data,
      role: "jobseeker",
    });
    setLoading(false);
    if (!error) navigate(ROUTES.LOGIN);
  };

  return (
    <div className={style["main-container"]}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={style["form-container"]}
      >
        <Input
          placeholder="Full Name"
          {...register("fullname", {
            required: "Full Name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Full Name can only contain alphabets and spaces",
            },
          })}
          error={errors.fullname}
        />

        <Select
          placeholder="Select your gender"
          {...register("gender", { required: "Select your gender" })}
          options={genderOptions}
          error={errors.gender?.message}
          style={{ height: "48px" }}
        />

        <Input
          type="date"
          placeholder="Date Of Birth"
          {...register("birthDate", { required: "Date Of Birth is required" })}
          error={errors.birthDate}
        />

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

        <MultipleSelect
          name="skills"
          placeholder="Select your skills"
          {...register("skills", {
            required: "At least one skill is required",
          })}
          control={control}
          options={skillOptions}
          error={errors.skills}
          style={{ height: "48px" }}
        />

        <Select
          placeholder="Select your experience"
          {...register("experience", { required: "Experience is required" })}
          options={experienceOptions}
          error={errors.experience?.message}
        />

        <Input
          placeholder="Address"
          {...register("address", { required: "Address is required" })}
          error={errors.address}
        />

        <Input
          placeholder="Legal ID"
          {...register("legalId", { required: "Legal ID is required" })}
          error={errors.legalId}
        />

        <Input
          type="number"
          placeholder="Primary Number"
          {...register("primaryNumber", {
            required: "Primary Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
          error={errors.primaryNumber}
        />

        <Input
          type="number"
          placeholder="Alternative Number"
          {...register("alternativeNumber", {
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
          error={errors.alternativeNumber}
        />

        <Input
          placeholder="Qualification"
          {...register("qualification", {
            required: "Qualification is required",
          })}
          error={errors.qualification}
        />

        <div className={style["button-container"]}>
          <button type="reset" className={style["reset-button"]}>
            Reset
          </button>
          <button
            type="submit"
            className={`${style["submit-button"]} ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? <Spin /> : "Submit"}
          </button>
        </div>
        <div className="col-span-3">
          <div className="text-center">
            <Link
              to={ROUTES.FORGOT_PASSWORD}
              className="text-blue-600 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="text-center mt-4">
            <span>Already have an account? </span>
            <Link
              to={ROUTES.LOGIN}
              className="text-blue-600 hover:underline"
            >
              Login here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default index;
