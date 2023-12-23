import PasswordIcon from "../../assets/Password.svg";
const RestPassword = () => {
  return (
    <div className="w-screen h-screen relative bg-[#16042F]">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-[#260F46] rounded-[10px]">
        <h1 className="text-white font-bold text-4xl text-[30px] w-[300px] h-[60px] left-[50px] top-[70px] absolute">
          Reset Password
        </h1>

        <form className="mt-6 left-[50px] top-[130px] w-[450px] absolute">
          {/* New Password Input */}
          <div className="text-white text-[15px] w-[190px] h-[25px] font-bold left-[7px]  absolute">
            Enter your new password
          </div>
          <div className="top-[35px] w-full py absolute">
            <input
              type="password"
              className="pl-14 pr-4 py-3 rounded-lg w-full text-white bg-[#3B2063] "
              placeholder="password"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={PasswordIcon} alt="Email Icon" />
            </div>
          </div>
          {/* Reset Button */}
          <button
            className="py-3 px-4 rounded-xl  font-medium text-lg text-white
             bg-gradient-to-r from-[#501794] to-[#3E70A1]  hover:bg-[#16042F] top-[115px] w-full py absolute"
            type="submit"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestPassword;
