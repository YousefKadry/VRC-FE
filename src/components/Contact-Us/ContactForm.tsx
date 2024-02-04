import React, { FormEvent } from 'react';
import background from '../../assets/images/contact-background.svg';
const App: React.FC = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className="w-screen max-w-6xl flex flex-col lg:flex-row mx-auto mt-[70px] px-20">
            <div
                className="py-5 px-8 flex flex-col font-footer text-footer justify-center flex-1"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '5% 23%',
                }}
            >
                <h1 className="text-3xl font-bold tracking-wide mb-5">Contact Us</h1>
                <p className="text-lg">
                    Need to get in contact with us? Either fill out the form with your inquiry or send us an
                    email on siemens@gmail.com
                </p>
            </div>
            <div className="p-5 box-border rounded-[20px] m-2.5 shadow text-footer flex flex-col gap-5 bg-gray-50 lg:w-1/2">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex-1 py-0 px-2.5 flex flex-col lg:flex-row flex-wrap">
                        <div className="mb-3.5 relative lg:mr-2.5 flex-1">
                            <label htmlFor="firstName" className="block mb-1.5 font-bold">
                                First Name
                            </label>
                            <div className="relative w-full py">
                                <input
                                    type="text"
                                    className="p-2 w-full !text-black text-sm box-border rounded-xl border border-gray-300 bg-gray-100 focus:bg-white shadow-inner transition duration-300"
                                />
                            </div>
                        </div>
                        <div className="mb-3.5 relative lg:mr-2.5 flex-1">
                            <label htmlFor="lastName" className="block mb-1.5 font-bold">
                                Last Name
                            </label>
                            <div className="relative w-full py">
                                <input
                                    type="text"
                                    className="p-2 w-full !text-black text-sm box-border rounded-xl border border-gray-300 bg-gray-100 focus:bg-white shadow-inner transition duration-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 px-2.5">
                        <div className="mb-3.5 relative lg:mr-2.5 flex-1">
                            <label htmlFor="email" className="block mb-1.5 font-bold">
                                Email
                            </label>
                            <div className="relative w-full py">
                                <input
                                    type="text"
                                    className="p-2 w-full !text-black text-sm box-border rounded-xl border border-gray-300 bg-gray-100 focus:bg-white shadow-inner transition duration-300"
                                />
                            </div>
                        </div>
                        <div className="mb-3.5 relative flex-1">
                            <label htmlFor="additionalFeedback" className="block mb-1.5 font-bold">
                                Additional Feedback
                            </label>
                            <div className="max-w-full lg:mr-2.5 ">
                                <textarea
                                    id="additionalFeedback"
                                    name="additionalFeedback"
                                    placeholder="If you have any additional feedback, please write it here..."
                                    className="w-full p-2 box-border text-gray-500 font-medium rounded-xl resize-none mt-2 border border-gray-300 bg-gray-100 focus:bg-white shadow-inner transition duration-300"
                                />
                            </div>
                        </div>
                        <button
                            className="bg-secondary text-white py-[10px] px-[15px] border-none w-full lg:w-2/5 cursor-pointer text-base font-bold rounded-2xl"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;
