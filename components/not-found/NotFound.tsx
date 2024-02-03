import CustomButton from '../shared/Button';

const NotFound = () => {
    return (
        <div className=" bg-primary min-h-screen flex flex-grow items-center justify-center">
            <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 className="text-secondary mb-4 text-4xl font-bold">404</h1>
                <p className="mb-5 text-gray-600">Oops! The page you are looking for could not be found.</p>
                <div className="mx-12">
                    <CustomButton className="py-2 px-1">
                        <a href="/">Go back to Home</a>
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
