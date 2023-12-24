import bg from '../../assets/BgSignup.png';
import EmailIcon from '../../assets/Email.svg';
import PasswordIcon from '../../assets/Password.svg';
import CustomInput from '../shared/Input';
import CustomButton from '../shared/Button';
import Icon from '../shared/Icon';
function Signup() {
    const handleFNameInputChange = (value: string) => {

    };
    const handleLNameInputChange = (value: string) => {

    };
    const handleEmailInputChange = (value: string) => {

    };
    const handlePasswordInputChange = (value: string) => {

    };
    const handleSignUpClick = () => {

    };
    return (
        <div className="flex h-screen">
            <div className="flex-1 basis-1/3 h-screen bg-[#160430] text-[#FFF] p-6 flex items-center">
                <div className="w-full px-5">
                    <h1 className="font-bold text-6xl text-center my-10">SIGN UP</h1>
                    <form className="mt-6 w-full">
                        {/* Name Input */}
                        <div className="flex flex-col sm:flex-row justify-between my-6">
                            <CustomInput className="pl-8 w-full sm:w-1/2 sm:mr-2 mb-6 sm:mb-0" placeholder="First Name" onInputChange={handleFNameInputChange} />
                            <CustomInput className="pl-8 w-full sm:w-1/2 sm:ml-2" placeholder="Last Name" onInputChange={handleLNameInputChange} />
                        </div>
                        {/* Email Input */}
                        <div className="relative w-full py">
                            <CustomInput placeholder="Enter your email" onInputChange={handleEmailInputChange} />
                            <Icon src={EmailIcon} alt="Email Icon" />
                        </div>
                        {/* Password Input */}
                        <div className="relative my-6">
                            <CustomInput placeholder="Password" onInputChange={handlePasswordInputChange} />
                            <Icon src={PasswordIcon} alt="Password Icon" />
                        </div>
                        {/* Sign-up Button */}
                        <CustomButton onClick={handleSignUpClick}>Sign Up</CustomButton>
                    </form>
                    {/* SignIn */}
                    <div className="flex my-4 items-center justify-between">
                        <p className="text-[#B6B6B6]">
                            Already Registered? <a href="/login" className="text-[#9D5CE9]">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 hidden sm:block sm:basis-1/8 md:basis-1/2 lg:basis-2/3  w-full bg-[#160430]" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} />
        </div>
    );
}

export default Signup;
