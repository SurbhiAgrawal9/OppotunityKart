import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { get, post } from "../../../global/services";
import { useAuth } from "../../../contexts/AuthContext";

const index = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitHandler = async (data) => {
    const response = await post("users/register", data);
    console.log(response);
  };

  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full h-full md:w-[80%] md:h-[80%] border shadow-md rounded-md grid grid-cols-1 md:grid-cols-2 gap-6 p-4"
      >
        <Input placeholder="Full Name" {...register("fullname")} />
        <Input placeholder="Gender" {...register("gender")} />
        <Input placeholder="Date Of Birth" {...register("birthDate")} />
        <Input placeholder="Email" {...register("email")} />
        <Input placeholder="Password" {...register("password")} />
        <Input placeholder="Skills" {...register("skills")} />
        <Input placeholder="Experience" {...register("experience")} />
        <Input placeholder="Address" {...register("address")} />
        <Input placeholder="Legal ID" {...register("legalId")} />
        <Input placeholder="Primary Number" {...register("primaryNumber")} />
        <Input
          placeholder="Alternative Number"
          {...register("alternativeNumber")}
        />
        <Input placeholder="Qualification" {...register("qualification")} />
        <button
          type="reset"
          className="bg-blue-500 px-3 py-1 rounded-lg text-white hover:bg-blue-700 hover:scale-105 duration-300 active:100 shadow-md h-12"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 hover:scale-105 duration-300 active:100 px-3 py-1 rounded-lg shadow-md text-white h-12"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default index;
