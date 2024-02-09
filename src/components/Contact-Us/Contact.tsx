import background from '../../assets/images/contact-background.svg';
import Form from './ContactForm';
const ContactUs = () => {
    return (
        <>
            <title>Contact Us</title>
            <main className="w-full h-full bg-homeBg flex flex-col overflow-y-auto">
                <div className="w-screen max-w-6xl flex flex-col lg:flex-row mx-auto mt-[30px] md:mt-[70px] px-20">
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
                            Need to get in contact with us? Either fill out the form with your inquiry or send
                            us an email on siemens@gmail.com
                        </p>
                    </div>
                    <div className="p-5 box-border rounded-[20px] m-2.5 shadow text-footer flex flex-col gap-5 bg-gray-50 lg:w-1/2 mb-10 md:mb-0">
                        <Form />
                    </div>
                </div>
            </main>
        </>
    );
};

export default ContactUs;
