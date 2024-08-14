// src/components/home/Features.jsx

import React from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import featuresData from "./featuresData";

const Features = () => {
    return (
        <section className="bg-background dark:bg-background-dark py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                    Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            aos="fade-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, description, aos }) => {
    return (
        <div className="bg-none p-8 rounded-2xl shadow-lg text-center flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-white/40" data-aos={aos}>
            <IconButton aria-label={title} className="text-4xl mb-4 mx-auto">
                <Icon fontSize="large" style={{ color: "#c0a700" }} />
            </IconButton>
            <h3 className="text-xl text-contrast dark:text-contrast-dark font-semibold mb-2">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
                {description}
            </p>
            <Link to="#" className="text-primary dark:text-primary-dark hover:underline">Learn More</Link>
        </div>
    );
};

export default Features;