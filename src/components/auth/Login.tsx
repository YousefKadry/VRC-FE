import React from "react";
import bg from "../../assets/BackgroundImage.png";
import EmailIcon from "../../assets/Email.svg";
import PasswordIcon from "../../assets/Password.svg";
import CustomInput from "../shared/Input";
import CustomButton from "../shared/Button";
import Icon from "../shared/Icon";

function Login() {
  const handleEmailInputChange = (value: string) => {};

  const handlePasswordInputChange = (value: string) => {};

  const handleSignInClick = () => {};

  return (
    <div className="flex h-screen">
      <div
        className="flex-1 hidden sm:block sm:basis-1/8 md:basis-1/2 lg:basis-2/3  w-full bg-primary"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      />
      <div className="flex-1 basis-1/3 h-screen bg-primary text-[#FFF] p-6 flex items-center">
        <div className="w-full px-5">
          <h1 className="font-bold text-6xl text-center my-10">SIGN IN</h1>
          <form className="mt-6 w-full">
            {/* Email Input */}
            <div className="relative w-full py">
              <CustomInput
                placeholder="Enter your email"
                onInputChange={handleEmailInputChange}
              />
              <Icon src={EmailIcon} alt="Email Icon" />
            </div>
            {/* Password Input */}
            <div className="relative my-5">
              <CustomInput
                placeholder="Password"
                onInputChange={handlePasswordInputChange}
              />
              <Icon src={PasswordIcon} alt="Password Icon" />
            </div>
            {/* Sign-in Button */}
            <CustomButton onClick={handleSignInClick}>Sign in</CustomButton>
          </form>
          {/* Recovery */}
          <div className="flex my-4 items-center justify-between">
            <p className="text-[#B6B6B6]">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-tertiary">
                Sign up
              </a>
            </p>
            <p className="">
              <a href="/forgot-password" className="text-[#B6B6B6]">
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
