import Form from './FeedbackForm';

const ReviewSection = () => {
    return (
        <div className="w-screen max-w-5xl flex flex-col lg:flex-row mx-auto mt-[10px] mb-3">
            <div className="py-5 px-8 flex flex-col font-footer text-footer justify-center">
                <h3 className="text-footer font-bold tracking-wide">RATE OUR SERVICE</h3>
                <p>Share Your Thoughts - Fill The Form to Submit Your Feedback.</p>
            </div>
            <Form />
        </div>
    );
};

export default ReviewSection;
