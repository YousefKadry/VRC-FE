import CustomButton from '../../shared/Button';
import CustomInput from '../../shared/Input';

const TextManager = () => {
    return (
        <div className="w-full px-8">
            <CustomInput
                type="text"
                placeholder="Enter your text here"
                className="bg-[#442a68] mt-[95px] pl-[18px] h-[60px] border-[1px] border-[#855EB5] text-center"
            />
            <div className=" flex items-center justify-end">
                <CustomButton className="w-[120px] h-[40px] flex items-center justify-center bg-gradient-to-r from-[#9167C2] to-[#533b78]">
                    Insert
                </CustomButton>
            </div>
        </div>
    );
};

export default TextManager;
