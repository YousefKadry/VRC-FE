import EmailIcon from "../../assets/Email.svg";
import AuthBtn from "../shared/AuthBtn";
import AuthTxtField from "../shared/AuthTxtField";

const ForgotPassword = () => {
  return (
    <div className="parent-container flex items-center justify-center w-screen h-screen bg-[#16042F]">
      <div className="child-element flex items-start flex-col w-[80%] sm:w-[60%] lg:w-[36%] h-[55%] bg-[#260F46] rounded-[10px] px-12 py-8 justify-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl selft-start mb-4">
          Forgot Password?
        </h1>

        <form className="mt-6 w-full flex gap-3 flex-col self-start px-1">
          {/* Email Input */}
          <div className="text-white text-[15px] font-bold px-2">
            Enter your email address
          </div>
          <AuthTxtField
            type="text"
            placeholder="yourname@gmail.com"
            icon={EmailIcon}
          />
          {/* Reset Password button */}
          <div className="mt-6">
            <AuthBtn text="Reset Password"></AuthBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
