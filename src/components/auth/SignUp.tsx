import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import bg from "../../assets/BgSignup.png";
import EmailIcon from "../../assets/Email.svg";
import PasswordIcon from "../../assets/Password.svg";
import CustomInput from "../shared/Input";
import CustomButton from "../shared/Button";
import handelEmailInput from "./hooks/handleEmailInput";
import handlePasswordInput from "./hooks/handelPasswordInput";
import handelButtonClick from "./hooks/handelButtonClick";
import handleRequriedInput from "./hooks/handelRequiredInput";

import { signUpThunk } from "../../store/slices/auth/auth-actions";
import { TAppDispatch } from "../../store/app-store";

function Signup() {
  const firstNameHandeler = handleRequriedInput("First name");
  const secondNameHandeler = handleRequriedInput("Second name");
  const emailHandeler = handelEmailInput();
  const passwordHundeler = handlePasswordInput();
  
  const dispatch = useDispatch<TAppDispatch>();

  const handleSignUp = handelButtonClick(
    [firstNameHandeler, secondNameHandeler, emailHandeler, passwordHundeler],
    () => {
        dispatch(signUpThunk({
          firstName: firstNameHandeler.value,
          lastName: secondNameHandeler.value,
          email: emailHandeler.email,
          password: passwordHundeler.password,
        }))
    }
  );

  const handleFormSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSignUp();
  };

  return (
    <>
      <title>Sign Up</title>
      <div className="flex h-screen">
        <div className="flex-1 basis-1/3 h-screen bg-primary text-[#FFF] p-6 flex items-center">
          <div className="w-full px-5">
            <h1 className="font-bold text-6xl text-center my-10">SIGN UP</h1>
            <form className="mt-6 w-full" onSubmit={handleFormSubmitting}>
              {/* Name Input */}
              <div className="flex flex-col sm:flex-row justify-between my-6">
                <CustomInput
                  type="text"
                  className="pl-8 w-full sm:w-1/2 sm:mr-2 mb-6 sm:mb-0  bg-secondary"
                  placeholder="First Name"
                  value={firstNameHandeler.value}
                  handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                    firstNameHandeler.handlevalueChange(e.target.value)
                  }
                />
                <CustomInput
                  type="text"
                  className="pl-8 w-full sm:w-1/2 sm:ml-2  bg-secondary"
                  placeholder="Last Name"
                  value={secondNameHandeler.value}
                  handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                    secondNameHandeler.handlevalueChange(e.target.value)
                  }
                />
              </div>
              {(firstNameHandeler.error || secondNameHandeler.error) && (
                <p className="text-red-500 -mt-6 ml-2 mb-1">
                  {firstNameHandeler.error || secondNameHandeler.error}
                </p>
              )}
              {/* Email Input */}
              <div className="relative w-full py">
                <CustomInput
                  type="text"
                  placeholder="Enter your email"
                  IconSrc={EmailIcon}
                  IconAlt="Email Icon"
                  className=" bg-secondary"
                  value={emailHandeler.email}
                  handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                    emailHandeler.handleEmailChange(e.target.value)
                  }
                />
              </div>
              {emailHandeler.emailError && (
                <p className="text-red-500 -mb-5 ml-2">
                  {emailHandeler.emailError}
                </p>
              )}
              {/* Password Input */}
              <div className="relative my-6  bg-secondary">
                <CustomInput
                  type="password"
                  placeholder="Password"
                  IconSrc={PasswordIcon}
                  IconAlt="Password Icon"
                  className=" bg-secondary"
                  value={passwordHundeler.password}
                  handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                    passwordHundeler.handlePasswordChange(e.target.value)
                  }
                />
              </div>
              {passwordHundeler.passwordError && (
                <p className="text-red-500 -mt-6 -mb-3 ml-2">
                  {passwordHundeler.passwordError}
                </p>
              )}
              {/* Sign-up Button */}
              <CustomButton type="submit">Sign Up</CustomButton>
            </form>
            {/* SignIn */}
            <div className="flex my-4 items-center justify-between">
              <p className="text-[#B6B6B6]">
                Already Registered?{" "}
                <a href="/login" className="text-tertiary">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex-1 hidden sm:block sm:basis-1/8 md:basis-1/2 lg:basis-2/3  w-full bg-primary"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        />
      </div>
    </>
  );
}

export default Signup;
