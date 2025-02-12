import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <footer className="footer p-10 container mx-auto">
                {/* About Section */}
                <div className="flex flex-col items-start space-y-4">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current text-yellow-300">
                        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p className="text-lg font-semibold">
                        CITY HOSPITAL
                        <br />
                        <span className="text-sm font-light">
                            Providing reliable healthcare and excellent services since 1992.
                        </span>
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h6 className="footer-title text-lg font-bold mb-4">Quick Links</h6>
                    <nav className="space-y-2">
                        <a href="#" className="hover:text-yellow-300 transition-all">
                            Home
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition-all">
                            Services
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition-all">
                            About Us
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition-all">
                            Contact
                        </a>
                    </nav>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col">
                    <h6 className="footer-title text-lg font-bold mb-4">Contact Us</h6>
                    <p>
                        <strong>Address:</strong> 123 Main Street, Cityville, ABC 45678
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:info@cityhospital.com" className="hover:text-yellow-300">
                            info@cityhospital.com
                        </a>
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col">
                    <h6 className="footer-title text-lg font-bold mb-4">Follow Us</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="#" className="hover:text-yellow-300 transition-all" aria-label="Follow us on Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
            <div className="text-center p-4 bg-indigo-700 text-white">
                © 2024 City Hospital. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
