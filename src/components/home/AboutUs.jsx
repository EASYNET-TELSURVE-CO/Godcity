// src/components/home/AboutUs.jsx

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark text-black dark:text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        About Us
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Learn more about our mission, vision, and values.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
                    <div className="max-w-lg" data-aos="fade-right">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                            Our Mission
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg font-light">
                            Our mission is to create a welcoming and inclusive community where members can grow in their faith, connect with others, and make a positive impact in the world.
                        </p>
                    </div>
                    <div className="max-w-lg" data-aos="fade-left">
                        <img
                            src="https://images.pexels.com/photos/358508/pexels-photo-358508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Mission"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-around gap-12 mt-12">
                    <div className="max-w-lg order-2 lg:order-1" data-aos="fade-right">
                        <img
                            src="https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Vision"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="max-w-lg order-1 lg:order-2" data-aos="fade-left">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                            Our Vision
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg font-light">
                            Our vision is to be a beacon of hope and inspiration, spreading the love of God to all corners of the earth and transforming lives through the power of faith.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;