import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthStore } from "@/features/auth/useAuthStore";
import { AuthPageLayout } from "@/features/auth/components/AuthPageLayout";
import loginPageImage from "@/assets/auth/loginpage.webp";
import googleIcon from "@/assets/auth/google.svg";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function RetailerLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((s) => s.login);
  const [showPassword, setShowPassword] = React.useState(false);

  const fromPath =
    (location.state as { from?: Location } | null)?.from?.pathname ?? null;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: true },
  });

  const onSubmit = async (values: LoginFormValues) => {
    login({ id: crypto.randomUUID(), email: values.email, role: "retailer" });
    navigate(fromPath || "/retailer", { replace: true });
  };

  return (
    <AuthPageLayout imageSrc={loginPageImage} imageAlt="Login visual">
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
          Login
        </h1>
        <p
          className="mx-auto mt-3 max-w-[355px] text-center text-[#C9A390D9] text-[15px]"
          style={{ fontFamily: "Roboto, sans-serif", lineHeight: "110%" }}
        >
          Welcome back! Please log in to access your account
        </p>
      </header>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-1"
      >
        <div className="relative pb-6">
          <label
            className="mb-2 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            {...form.register("email")}
            className={`h-[60px] w-full rounded-[18px] border ${form.formState.errors.email ? "border-red-400" : "border-[#CFC4BC]"} bg-white px-4 text-[16px] text-black outline-none placeholder:text-[#CFCFCF]`}
          />
          {form.formState.errors.email && (
            <p className="absolute bottom-1 left-2 text-[12px] text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="relative pb-6">
          <label
            className="mb-2 block text-[15px] text-[#949E96]"
            style={{ fontFamily: '"PT Serif", serif' }}
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              {...form.register("password")}
              className={`h-[60px] w-full rounded-[18px] border ${form.formState.errors.password ? "border-red-400" : "border-[#CFC4BC]"} bg-white px-4 pr-14 text-[16px] text-black outline-none placeholder:text-[#CFCFCF]`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-[#9FA59D]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {form.formState.errors.password ? (
            <p className="absolute bottom-1 left-2 text-[12px] text-red-500">
              {form.formState.errors.password.message}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => navigate("/coming-soon")}
              className="absolute bottom-1 right-2 text-[13px] text-[#B6A092] hover:underline"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Forget Password?
            </button>
          )}
        </div>

        <label
          className="flex cursor-pointer items-center gap-3 text-[15px] text-[#8A8A8A] mb-2"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <input
            type="checkbox"
            {...form.register("remember")}
            className="h-[18px] w-[18px] cursor-pointer rounded border border-[#CFC4BC] accent-[#B6A092]"
          />
          <span>Remember me</span>
        </label>

        <button
          type="submit"
          className="h-[60px] w-full rounded-[18px] bg-[#B6A092] text-[18px] text-white hover:opacity-95 font-bold"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          Login
        </button>

        <div className="flex items-center gap-4 my-3">
          <div className="h-px flex-1 bg-[#DDD3CC]" />
          <span
            className="text-[13px] text-[#C9A390]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            OR
          </span>
          <div className="h-px flex-1 bg-[#DDD3CC]" />
        </div>

        <button
          type="button"
          className="flex h-[60px] w-full items-center justify-center gap-4 rounded-[18px] border border-[#CFC4BC] bg-white text-[18px] font-bold text-[#B6A092] hover:bg-[#faf8f6]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          <img
            src={googleIcon}
            alt="Google"
            className="h-7 w-7 object-contain"
          />
          <span>Login with Google</span>
        </button>

        <div
          className="pt-3 text-center text-[15px] text-[#7F8A7C]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup/retailer"
            className="text-[#7F8A7C] hover:underline"
          >
            Sign Up ↗
          </Link>
        </div>
      </form>
    </AuthPageLayout>
  );
}
