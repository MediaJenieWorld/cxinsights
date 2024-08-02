import { useForm } from "react-hook-form";
import "@/app/verify/styles.scss";
import { toast } from "react-toastify";
import { useState } from "react";
import { confirmVerifyEmailHandler } from "@/utils/api";

// eslint-disable-next-line react/prop-types
const VerifyEmail_Box = ({ getValues, signInHandler }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    const email = getValues("email")
    const code = data?.code.trim();
    if (code == "" || isLoading) return toast.error("Email is required");
    try {
      setIsLoading(true);
      const response = await confirmVerifyEmailHandler({ code, email });
      const parseData = response.data || { success: false, data: "testing" };
      if (parseData.success) {
        sessionStorage.setItem("isNew", true);
        toast.success("Account Created Successfully. Redirecting...");
        setTimeout(() => {
          window.location = "/dashboard";
          signInHandler(parseData.data, parseData.token);
        }, 500)
      } else {
        toast.error(parseData.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };


  return (
    <div className="NewPassword">
      <h2>Email Verification</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Code sent to your email. Check your inbox</p>
        <div className="flex-column">
          <label htmlFor="code">Code:</label>
          <input
            {...register("code", {
              required: "code is required",
            })}
            id="code"
            type="text"
          />
          {errors.code && (
            <span
              style={{ fontSize: ".7rem", fontWeight: "700", color: "red" }}
            >
              {errors.code.message || "Validation Error"}
            </span>
          )}
        </div>
        <button type="submit">
          {isLoading ? (
            <i className="pi pi-spin pi-spinner"></i>
          ) : (
            "Verify Code"
          )}
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail_Box;
