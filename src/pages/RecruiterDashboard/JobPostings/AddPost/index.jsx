import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Space, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styles from "./AddPost.module.css";
import { skillOptions, jobTypes } from "../../../../global/global";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import MultipleSelect from "../../../../components/MultipleSelect";
import { post } from "../../../../global/services";
import { useAuth } from "../../../../contexts/AuthContext";

const { Option } = Select;

const JobPostForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    control,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      type: "full-time",
      salaryMin: null,
      salaryMax: null,
      location: "",
      skills: [],
    },
  });

  const { token } = useAuth();

  const onSubmit = async (data) => {
    try {
      const body = { ...data };
      const [response, error] = await post("recruiter/create-post", {
        ...data,
        role: "jobseeker",
      }, token);
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  // const addPostHandler = async (values, resetForm) => {
  //   try {
  //     console.log({ body });
  //     const res = await postAPIAuth("/recruiter/create-post", body, token);
  //     if (res.data.success) {
  //       toast.success("Job Add Successfull");
  //       resetForm();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <Input
        placeholder="Job Title"
        {...register("title", {
          required: "Job title is required",
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Job title can only contain alphabets and spaces",
          },
        })}
        error={errors.title}
      />

      <Select
        placeholder="Select job type"
        {...register("type", { required: "Select job type" })}
        options={jobTypes}
        error={errors.type?.message}
        style={{ height: "48px" }}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: "Job description is required" }}
        render={({ field }) => <TextArea {...field} rows={4} placeholder="Enter job description" />}
      />

      <Input
        placeholder="Minimum Salary"
        type="number"
        {...register("salaryMin", {
          required: "Minimum salary is required",
          min: {
            value: 0,
            message: "Minimum salary must be at least 0",
          },
          pattern: {
            value: /^[0-9]+$/,
            message: "Salary must be a valid number",
          },
        })}
        error={errors.salaryMin}
      />
      <Input
        placeholder="Maximum Salary"
        type="number"
        {...register("salaryMax", {
          required: "Maximum salary is required",
          min: {
            value: 0,
            message: "Maximum salary must be at least 0",
          },
          validate: (value) => {
            const salaryMinValue = parseFloat(getValues("salaryMin"));
            if (value < salaryMinValue) {
              return `Maximum salary must be greater than or equal to the minimum salary (${salaryMinValue})`;
            }
            return true;
          },
          pattern: {
            value: /^[0-9]+$/,
            message: "Salary must be a valid number",
          },
        })}
        error={errors.salaryMax}
      />

      <Input
        placeholder="Location"
        {...register("location", {
          required: "Job location is required",
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Job location can only contain alphabets and spaces",
          },
        })}
        error={errors.location}
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

      <Space style={{ width: "100%", justifyContent: "center", marginTop: 24 }}>
        <Button type="primary" htmlType="submit">
          Create Job Posting
        </Button>
        <Button htmlType="button" onClick={() => reset()}>
          Reset
        </Button>
      </Space>
    </form>
  );
};

export default JobPostForm;
