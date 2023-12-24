import PasswordIcon from "../../assets/Password.svg";
import AuthTxtField from "../shared/AuthTxtField";
import AuthBtn from "../shared/AuthBtn";

const RestPassword = () => {
  return (
    <div className="parent-container flex items-center justify-center w-screen h-screen bg-[#16042F]">
      <div className="child-element flex items-start flex-col w-[80%] sm:w-[60%] lg:w-[36%] h-[55%] bg-[#260F46] rounded-[10px] px-12 py-8 justify-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl selft-start mb-4">
          Reset Password
        </h1>

        <form className="mt-6 w-full flex gap-3 flex-col self-start px-1">
          {/* New Password Input */}
          <div className="text-white text-[15px] font-bold px-2">
            Enter your new password
          </div>
          <AuthTxtField
            type="password"
            placeholder="password"
            icon={PasswordIcon}
          />

          {/* Reset Button */}
          <div className="mt-6">
            <AuthBtn text="Reset"></AuthBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestPassword;
