import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div className="flex flex-col items-start">
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-sm">
                        A software engineer with 4 years of experience.
                    </p>
                </div>
                {/* Quick Links Section */}
                <div className="flex flex-col items-start">
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-sm hover:text-gray-400">Home</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-sm hover:text-gray-400">Projects</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-sm hover:text-gray-400">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* Contact Section */}
                <div className="flex flex-col items-start">
                    <h2 className="text-xl font-bold mb-4">Contact Me</h2>
                    <p className="text-sm mb-2">
                        Email: worldoffictionrwgmail.com
                    </p>
                    <p className="text-sm mb-2">
                        Phone: +250780902232
                    </p>
                   
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm">
                        &copy; 2024 Your Company. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
