import Logo from '../../assets/icons/home-logo-light.svg';

const Footer = () => {
    return (
        <footer className="flex justify-between items-center px-3 md:px-20 py-2 bg-primary">
            <div className="flex items-center">
                <img className="h-6 w-9" alt="" src={Logo} />
                <div className="ml-2 font-bold">SIEMENS VRC</div>
            </div>
            <div className="text-sm">
                <div>Copyright © 2024 VRC.</div>
                <div>All rights reserved</div>
            </div>
        </footer>
    );
};

export default Footer;
