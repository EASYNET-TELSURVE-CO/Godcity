// src/components/home/Sermon.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sermons from './sermon';

const Sermon = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
                    Latest Sermons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sermons.map((sermon) => (
                        <div
                            key={sermon.id}
                            className="bg-none p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                        >
                            <img
                                src={sermon.image}
                                alt={sermon.title}
                                className="w-full h-40 object-cover rounded-t-2xl"
                            />
                            <h3 className="text-xl font-semibold mt-4">{sermon.title}</h3>
                            <p className="text-lg font-light mt-2">{sermon.description}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{sermon.date}</p>
                            <Link
                                to="/sermons"
                                className="text-primary dark:text-primary-dark hover:underline mt-4 inline-block"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                View More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sermon;