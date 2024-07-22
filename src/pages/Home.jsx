// src/pages/Home.jsx

import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "../components/home/Features";
import Cta from "../components/home/Cta";
import Sermon from "../components/home/Sermon";
import Banner from "../components/home/Banner";
import AboutUs from "../components/home/AboutUs";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <section
                className="flex flex-col bg-hero dark:bg-hero_dark bg-cover min-h-screen dark:text-contrast text-center
                space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 justify-center items-center py-20"
            >
                <div className="bg-white/25 dark:bg-black/25 m-4 p-8 rounded-3xl bg-opacity-25 text-[#000] dark:text-white">
                    <h1
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4"
                        data-aos="fade-up"
                    >
                        Welcome to GodCi†y
                    </h1>
                    <p
                        className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Unify. Serve. Inspire.
                    </p>
                    <p
                        className="p-10 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl italic relative z-10 font-light"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        "For where two or three gather in my name, there am I
                        with them." – Matthew 18:20
                    </p>
                    <button
                        className="bg-primary text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 rounded-full hover:bg-primary-dark transition"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Get Started
                    </button>
                </div>
            </section>

            <Features />
            <Cta />
            <Sermon />
            <Banner />
            <AboutUs />
            <Testimonials />
        </div>
    );
};

export default Home;
