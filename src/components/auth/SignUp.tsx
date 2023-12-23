import bg from '../../assets/BgSignup.png';
import EmailIcon from '../../assets/Email.svg';
import PasswordIcon from '../../assets/Password.svg';

function Signup() {
    return (
        <div className="flex h-screen">


            <div className="flex-1 basis-1/3 h-screen bg-[#160430] text-[#FFF] p-6 flex items-center">
                <div className="w-full px-5">
                    <h1 className="font-bold text-6xl text-center my-10">SIGN UP</h1>
                    <form className="mt-6 w-full">
                        {/* Name Input */}
                        <div className="flex justify-between my-6">
                            <input
                                type="text"
                                className="pl-8 pr-4 py-3 rounded-lg w-1/2 bg-[#261046] mr-2"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                className="pl-8 pr-4 py-3 rounded-lg w-1/2 bg-[#261046] ml-2"
                                placeholder="Last Name"
                            />
                        </div>


                        {/* Email Input */}
                        <div className="relative w-full py">
                            <input
                                type="text"
                                className="pl-14 pr-4 py-3 rounded-lg w-full bg-[#261046]"
                                placeholder="Enter your email"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <img src={EmailIcon} alt="Email Icon" />
                            </div>
                        </div>
                        {/* Password Input */}
                        <div className="relative my-6">
                            <input
                                type="password"
                                className="pl-14 pr-4 py-3 rounded-lg w-full bg-[#261046]"
                                placeholder="Password"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <img src={PasswordIcon} alt="Password Icon" />
                            </div>
                        </div>
                        {/* Sign-up Button */}
                        <button
                            className="block w-full mt-4 bg-blue-600 py-3 px-4 rounded-xl font-medium text-lg focus:outline-none bg-gradient-to-r from-[#501794] to-[#3E70A1]"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </form>
                    {/* SignIn */}
                    <div className="flex my-4 items-center justify-between">
                        <p className="text-[#B6B6B6]">
                            Already Registered? <a href="/login" className="text-[#9D5CE9]">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 basis-2/3 w-full bg-[#160430]" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} />
        </div>
    );
}

export default Signup;
