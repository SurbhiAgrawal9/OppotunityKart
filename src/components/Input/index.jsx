import React, { forwardRef, useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import styles from "./Input.module.css";

const Input = forwardRef(function index({
  type = "text",
  id,
  placeholder,
  register,
  error,
  ...children
}, ref) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles["input-container"]}>
      <div className={styles["input-wrapper"]}>
        <input
          ref={ref}
          type={type === "password" && showPassword ? "text" : type}
          id={id}
          className={`${styles["input"]} peer`}
          {...children}
        />
        <label htmlFor={id} className={styles["label"]}>
          {placeholder}
        </label>
        {type === "password" && (
          <span className={styles["suffix"]} onClick={togglePasswordVisibility}>
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </span>
        )}
      </div>
      {error && <span className={styles["error"]}>{error.message}</span>}
    </div>
  );
});

export default Input;
