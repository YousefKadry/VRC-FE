import PasswordIcon from "../../assets/Password.svg";
import CustomButton from "../shared/Button";
import CustomInput from "../shared/Input";

const RestPassword = () => {
  return (
    <>
      <title>Reset Password</title>
      <div className="parent-container flex items-center justify-center w-screen h-screen bg-primary">
        <div className="child-element flex items-start flex-col w-[80%] sm:w-[60%] lg:w-[36%] h-[55%] bg-secondary rounded-[10px] px-12 py-8 justify-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl selft-start mb-4">
            Reset Password
          </h1>

          <form className="mt-6 w-full flex gap-3 flex-col self-start px-1">
            {/* New Password Input */}
            <div className="text-white text-[15px] font-bold px-2 mt-3">
              Enter your new password
            </div>
            <div className="relative my-2 -mt-1">
              <CustomInput
                type="text"
                placeholder="Password"
                IconSrc={PasswordIcon}
                IconAlt="Password Icon"
                className="bg-[#3B2063]"
              />
            </div>

            {/* Reset Button */}
            <div className="-mt-1">
              <CustomButton>
                <span className="text-white">Reset</span>
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RestPassword;
