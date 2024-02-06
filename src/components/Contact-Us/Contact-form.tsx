import { FormEvent } from 'react';

const ContactForm = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
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
    );
};

export default ContactForm;
