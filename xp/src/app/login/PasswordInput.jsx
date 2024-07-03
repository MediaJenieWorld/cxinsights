import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PasswordInput = ({ register }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-area">
      <i
        onClick={() => setShowPassword((pre) => !pre)}
        className={showPassword ? "pi pi-eye" : "pi pi-eye-slash"}
      ></i>
      <input
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^[A-Z][a-z\d]{4,}$/,
            message:
              "Password must start with an uppercase letter and contain at least 5 characters with lowercase letters or digits only",
          },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
          maxLength: {
            value: 30,
            message: "Password length cannot exceed 30 characters",
          },
        })}
        id="password"
        type={showPassword ? "text" : "password"}
      />
    </div>
  );
};

export default PasswordInput;
