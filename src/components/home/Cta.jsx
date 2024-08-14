// src/components/home/Cta.jsx

import React from "react";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Cta = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/login");
    };

    return (
        <section className="bg-primary dark:bg-primary-dark text-white py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
                    Ready to Join Us?
                </h2>
                <p
                    className="text-xl mb-8"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Become a part of our community and start your journey today.
                </p>
                <button
                    onClick={handleGetStarted}
                    className="bg-background-dark text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-9 rounded-full hover:bg-background hover:text-black transition"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Get Started Now
                </button>
            </div>
        </section>
    );
};

export default Cta;
