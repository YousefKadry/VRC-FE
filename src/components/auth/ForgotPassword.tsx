import EmailIcon from "../../assets/Email.svg";
import CustomInput from "../shared/Input";
import CustomButton from "../shared/Button";

const ForgotPassword = () => {
  return (
    <>
      <title>Forgot Password</title>
      <div className="parent-container flex items-center justify-center w-screen h-screen bg-primary">
        <div className="child-element flex items-start flex-col w-[80%] sm:w-[60%] lg:w-[36%] h-[55%] bg-secondary rounded-[10px] px-12 py-8 justify-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl selft-start mb-4">
            Forgot Password?
          </h1>

          <form className="mt-6 w-full flex flex-col self-start px-1">
            {/* Email Input */}
            <div className="text-white text-[15px] font-bold px-2 mt-3">
              Enter your email address
            </div>
            <div className="relative my-2">
              <CustomInput
                type="text"
                placeholder="yourname@gmail.com"
                IconSrc={EmailIcon}
                IconAlt="Email Icon"
                className="bg-[#3B2063]"
              />
            </div>
            {/* Reset Password button */}
            <div className="mt-2">
              <CustomButton>
                <span className="text-white">Reset Password</span>
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;