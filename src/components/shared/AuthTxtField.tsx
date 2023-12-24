interface AuthTxtFieldProp {
  type: string;
  placeholder: string;
  icon: string;
}

const AuthTxtField = ({ type, placeholder, icon }: AuthTxtFieldProp) => {
  return (
    <div className="relative">
      <input
        type={type}
        className="pl-14 pr-4 py-3 rounded-lg w-full text-white bg-[#3B2063] "
        placeholder={placeholder}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src={icon} alt="Icon" />
      </div>
    </div>
  );
};

export default AuthTxtField;
