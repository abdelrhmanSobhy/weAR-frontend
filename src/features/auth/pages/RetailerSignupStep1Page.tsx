import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthPageLayout } from "@/features/auth/components/AuthPageLayout";
import signupPageImage from "@/assets/auth/signupstep1.webp";

const signupStep1Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  brandName: z.string().min(2, "Brand Name is required"),
});

type SignupStep1Values = z.infer<typeof signupStep1Schema>;

export default function RetailerSignupStep1Page() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<SignupStep1Values>({
    resolver: zodResolver(signupStep1Schema),
    defaultValues: { name: "", email: "", password: "", brandName: "" },
  });

  const onSubmit = (values: SignupStep1Values) => {
    navigate("/signup/retailer/step-2", { state: { step1Data: values } });
  };

  return (
    <AuthPageLayout imageSrc={signupPageImage} imageAlt="Signup visual">
      <header className="text-center mb-6">
        <h1
          className="text-[#B6A092]"
          style={{
            fontFamily: '"PT Serif", serif',
            fontWeight: 700,
            fontSize: "52px",
            lineHeight: "100%",
          }}
        >
          Sign-up
        </h1>
        <p
          className="mx-auto mt-2 max-w-[355px] text-center text-[#C9A390D9] text-[15px]"
          style={{ fontFamily: "Roboto, sans-serif", lineHeight: "110%" }}
        >
          Welcome to weAR <br />
          Create your account here!
        </p>
      </header>

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <div className="relative pb-6">
          <label
            className="mb-1 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            {...form.register("name")}
            className={`h-[56px] w-full rounded-[18px] border ${form.formState.errors.name ? "border-red-400" : "border-[#CFC4BC]"} bg-white px-4 text-[15px] outline-none placeholder:text-[#CFCFCF]`}
          />
          {form.formState.errors.name && (
            <p className="absolute bottom-1 left-2 text-[12px] text-red-500">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="relative pb-6">
          <label
            className="mb-1 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            {...form.register("email")}
            className={`h-[56px] w-full rounded-[18px] border ${form.formState.errors.email ? "border-red-400" : "border-[#CFC4BC]"} bg-white px-4 text-[15px] outline-none placeholder:text-[#CFCFCF]`}
          />
          {form.formState.errors.email && (
            <p className="absolute bottom-1 left-2 text-[12px] text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="relative pb-6">
          <label
            className="mb-1 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              {...form.register("password")}
              className={`h-[56px] w-full rounded-[18px] border ${form.formState.errors.password ? "border-red-400" : "border-[#CFC4BC]"} bg-white px-4 pr-14 text-[15px] outline-none placeholder:text-[#CFCFCF]`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-[#9FA59D]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {form.formState.errors.password && (
            <p className="absolute bottom-1 left-2 text-[12px] text-red-500">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <div className="relative pb-4">
          <label
            className="mb-1 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Brand Name
          </label>
          <input
            type="text"
            placeholder="Enter your Legal Brand Name"
            {...form.register("brandName")}
            className={`h-[56px] w-full rounded-[18px] border ${form.formState.errors.brandName ? "border-red-400" : "border-[#CFC4BC]"} bg-white px-4 text-[15px] outline-none placeholder:text-[#CFCFCF]`}
          />
          {form.formState.errors.brandName && (
            <p className="absolute bottom-0 left-2 text-[12px] text-red-500">
              {form.formState.errors.brandName.message}
            </p>
          )}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 pl-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#B6A092]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#DDD3CC]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#DDD3CC]" />
          </div>
          <button
            type="submit"
            className="h-[55px] w-[140px] rounded-[14px] bg-[#B6A092] text-[18px] font-bold text-white hover:opacity-95"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Next
          </button>
        </div>

        <div
          className="pt-4 text-center text-[15px] text-[#7F8A7C]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          Have an account?{" "}
          <Link to="/login/retailer" className="text-[#7F8A7C] hover:underline">
            Login ↗
          </Link>
        </div>
      </form>
    </AuthPageLayout>
  );
}
