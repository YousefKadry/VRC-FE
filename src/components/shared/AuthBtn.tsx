interface AuthBtnProp {
  text: string;
}

const AuthBtn = ({ text }: AuthBtnProp) => {
  return (
    <button
      className="py-3 px-4 rounded-xl  font-medium text-lg text-white
         bg-gradient-to-r from-[#501794] to-[#3E70A1]  hover:bg-[#16042F] w-full"
      type="submit"
    >
      {text}
    </button>
  );
};

export default AuthBtn;
