// src/components/home/ContactUs.jsx

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="relative py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl font-normal">
                        We're here to help and answer any question you might
                        have.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
                    <div
                        className="w-full lg:w-1/3"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Get in Touch
                        </h3>
                        <p className="text-base font-normal mb-4">
                            Reach out to us using any of the following methods:
                        </p>
                        <div className="px-4">
                            <div className="flex items-center mb-4 italic font-light">
                                <EmailIcon className="text-primary dark:text-primary-dark mr-2" />
                                <span>info@godcity.com</span>
                            </div>
                            <div className="flex items-center mb-4 italic font-light">
                                <PhoneIcon className="text-primary dark:text-primary-dark mr-2" />
                                <span>+123 456 7890</span>
                            </div>
                            <div className="flex items-center mb-4 italic font-light">
                                <LocationOnIcon className="text-primary dark:text-primary-dark mr-2" />
                                <span>123 GodCity Street, Heaven Town</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full lg:w-2/3"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Send Us a Message
                        </h3>
                        <form className="bg-white dark:bg-gray-800 p-6 rounded-3xl text-left shadow-lg">
                            <div className="mb-4">
                                <label
                                    className="block text-sm font-normal mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-sm font-normal mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-sm font-normal mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center w-full py-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition transform hover:scale-105"
                            >
                                <SendIcon className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
