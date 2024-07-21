// src/components/home/Banner.jsx

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router";

const Banner = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    return (
        <section
            className="py-6 relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center text-white dark:text-contrast-dark"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/4849387/pexels-photo-4849387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70"></div>
            <div className="relative z-10 p-4 md:p-8">
                <h2
                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4"
                    data-aos="fade-up"
                >
                    Manage Sermons with Ease
                </h2>
                <p
                    className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-8 font-light"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Both Admin and Members can enjoy seamless sermon management.
                </p>
                <div
                    className="p-7 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <FeatureCard
                        icon={LibraryBooksIcon}
                        title="Library"
                        description="Access a vast library of sermons."
                    />
                    <FeatureCard
                        icon={CloudUploadIcon}
                        title="Upload"
                        description="Upload new sermons easily."
                    />
                    <FeatureCard
                        icon={PlaylistAddCheckIcon}
                        title="Organize"
                        description="Organize sermons into playlists."
                    />
                    <FeatureCard
                        icon={ShareIcon}
                        title="Share"
                        description="Share sermons with your community."
                    />
                </div>
                <button
                    onClick={handleGetStarted}
                    className="bg-primary text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 rounded-2xl hover:bg-primary-dark transition animate-pulse"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Get Started with Sermon Management
                </button>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center max-w-xs p-8 rounded-3xl bg-white dark:bg-gray-800 bg-opacity-45 dark:bg-opacity-45">
            <Icon
                className="text-6xl text-primary dark:text-primary-dark mb-4"
                fontSize="large"
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm font-light">{description}</p>
        </div>
    );
};

export default Banner;