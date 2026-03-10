import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud } from "lucide-react";

import { AuthPageLayout } from "@/features/auth/components/AuthPageLayout";
import signupPage2Image from "@/assets/auth/signupstep2.webp";

const signupStep2Schema = z.object({
  businessType: z.string().min(1, "Please select a business type"),
  has3DModels: z.enum(["YES", "NO"], {
    required_error: "Please select an option",
  }),
  logo: z.any().optional(),
});

type SignupStep2Values = z.infer<typeof signupStep2Schema>;

export default function RetailerSignupStep2Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const step1Data = location.state?.step1Data || {};

  const form = useForm<SignupStep2Values>({
    resolver: zodResolver(signupStep2Schema),
    defaultValues: { businessType: "", has3DModels: undefined },
  });

  const onSubmit = (values: SignupStep2Values) => {
    navigate("/signup/retailer/pricing", {
      state: { signupData: { ...step1Data, ...values } },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      form.setValue("logo", file);
    }
  };

  return (
    <AuthPageLayout imageSrc={signupPage2Image} imageAlt="Signup step 2 visual">
      <header className="text-center mb-8">
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
        <div className="relative pb-8">
          <label
            className="mb-2 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Business Type
          </label>
          <div className="relative">
            <select
              {...form.register("businessType")}
              className={`h-[60px] w-full appearance-none rounded-[18px] border ${form.formState.errors.businessType ? "border-red-400" : "border-[#CFC4BC]"} bg-white px-4 text-[15px] outline-none`}
            >
              <option value="" disabled>
                Choose your Business Type
              </option>
              <option value="retail">Retail Store</option>
              <option value="brand">Fashion Brand</option>
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#9FA59D]">
              ▼
            </span>
          </div>
          {form.formState.errors.businessType && (
            <p className="absolute bottom-2 left-2 text-[12px] text-red-500">
              {form.formState.errors.businessType.message}
            </p>
          )}
        </div>

        <div className="relative pb-8">
          <label
            className="mb-3 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Do you have 3D models for your products?
          </label>
          <div className="flex items-center gap-8 pl-2">
            <label
              className="flex cursor-pointer items-center gap-2 text-[15px] text-[#8A8A8A]"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <input
                type="radio"
                value="YES"
                {...form.register("has3DModels")}
                className="h-[18px] w-[18px] accent-[#B6A092]"
              />{" "}
              Yes
            </label>
            <label
              className="flex cursor-pointer items-center gap-2 text-[15px] text-[#8A8A8A]"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <input
                type="radio"
                value="NO"
                {...form.register("has3DModels")}
                className="h-[18px] w-[18px] accent-[#B6A092]"
              />{" "}
              NO
            </label>
          </div>
          {form.formState.errors.has3DModels && (
            <p className="absolute bottom-1 left-2 text-[12px] text-red-500">
              {form.formState.errors.has3DModels.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Brand Logo
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex h-[130px] w-full cursor-pointer flex-col items-center justify-center rounded-[18px] border-2 border-dashed border-[#CFC4BC] bg-[#FAFAFA] hover:bg-[#f0f0f0]"
          >
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <UploadCloud className="mb-2 text-[#9FA59D]" size={28} />
            {fileName ? (
              <span className="text-[14px] text-[#B6A092]">{fileName}</span>
            ) : (
              <>
                <span
                  className="text-[14px] text-[#8A8A8A]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Click to upload{" "}
                  <strong className="text-black">or drag and drop</strong>
                </span>
                <span
                  className="mt-1 text-[12px] text-[#BFC7DE]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  JPG, JPEG, PNG less than 1MB
                </span>
              </>
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 pl-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#DDD3CC]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#B6A092]" />
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
          className="pt-3 text-center text-[15px] text-[#7F8A7C]"
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
