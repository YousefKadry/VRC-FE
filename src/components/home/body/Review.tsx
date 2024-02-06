// App.tsx
import React, { useState, FormEvent } from 'react';
import Phone from '../../../assets/Phone.svg';
import Name from '../../../assets/Name.svg';
import Email from '../../../assets/Email.svg';
import CustomInput from '../../shared/Input';
import { Rating } from 'react-simple-star-rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const App: React.FC = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className="w-screen max-w-5xl flex flex-col lg:flex-row mx-auto mt-[10px]">
            <div className="py-5 px-8 flex flex-col font-footer text-footer justify-center">
                <h3 className="text-footer font-bold tracking-wide">RATE OUR SERVICE</h3>
                <p>Share Your Thoughts - Fill The Form to Submit Your Feedback.</p>
            </div>
            <div className="p-5 box-border rounded-[20px] m-2.5 shadow text-footer flex flex-col gap-5 bg-gray-50">
                <form className="flex" onSubmit={handleSubmit}>
                    <div className="flex-1 py-0 px-2.5 flex flex-wrap">
                        <div className="mb-3.5 relative mr-5">
                            <label htmlFor="name" className="block mb-1.5 font-bold">
                                Name
                            </label>
                            <div className="relative w-full py">
                                <CustomInput
                                    type="text"
                                    placeholder="Name"
                                    IconSrc={Name}
                                    IconAlt="Name Icon"
                                    className="p-2 w-[320px] lg:w-[250px] !text-black text-sm box-border rounded-3xl border border-gray-300 bg-white shadow-inner transition duration-300 focus:shadow-outline focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-3.5 relative mr-5">
                            <label htmlFor="phone" className="block mb-1.5 font-bold">
                                Phone Number
                            </label>
                            <div className="relative w-full py">
                                <CustomInput
                                    type="text"
                                    placeholder="Phone Number"
                                    IconSrc={Phone}
                                    IconAlt="Email Icon"
                                    className="p-2 w-[320px] lg:w-[250px] !text-black text-sm box-border rounded-3xl border border-gray-300 bg-white shadow-inner transition duration-300 focus:shadow-outline focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-3.5 relative">
                            <label htmlFor="email" className="block mb-1.5 font-bold">
                                Email
                            </label>
                            <div className="relative w-full py">
                                <CustomInput
                                    type="text"
                                    placeholder="Enter your email"
                                    IconSrc={Email}
                                    IconAlt="Email Icon"
                                    className="p-2 w-[320px] lg:w-[250px] !text-black text-sm box-border rounded-3xl border border-gray-300 bg-white shadow-inner transition duration-300 focus:shadow-outline focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="ml-5 flex">
                    <p className="m-0 mr-3">Your service rating</p>
                    <Rating size={25} allowFraction SVGstyle={{ display: 'inline' }} onClick={handleRating} />
                </div>
                <div className="ml-5 font-bold">
                    <p>Additional feedback</p>
                    <div className="max-w-full">
                        <textarea
                            id="additionalFeedback"
                            name="additionalFeedback"
                            placeholder="If you have any additional feedback, please write it here..."
                            className="w-full p-2 box-border text-gray-500 font-medium rounded-lg resize-none border-none shadow-lg h-24 mt-2"
                        />
                    </div>
                </div>
                <div className="flex ml-[20] ml-5 mt-2.5 items-center">
                    <FormControlLabel
                        control={<Checkbox color="default" />}
                        label="I have read and accept the privacy policy."
                        color="secondary"
                    />
                    <button
                        className="bg-secondary text-white py-[10px] px-[15px] border-none w-2/5 h-full cursor-pointer text-base font-bold rounded-2xl"
                        type="submit"
                    >
                        Submit feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
