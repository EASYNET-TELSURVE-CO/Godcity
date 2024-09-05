import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sermon = () => {
    const [sermons, setSermons] = useState([]);
    const [selectedSermon, setSelectedSermon] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        // Fetch the sermons from the API
        const fetchSermons = async () => {
            try {
                const response = await fetch('http://52.87.197.214:5000/api/resources/all');
                const data = await response.json();
                if (data.responseCode === 200) {
                    setSermons(data.data);
                } else {
                    console.error('Failed to fetch sermons:', data);
                }
            } catch (error) {
                console.error('Error fetching sermons:', error);
            }
        };

        fetchSermons();
    }, []);

    const handleMouseEnter = (event) => {
        const video = event.target;
        video.play();
    };

    const handleMouseLeave = (event) => {
        const video = event.target;
        video.pause();
    };

    const handleVideoClick = (sermon) => {
        setSelectedSermon(sermon);
    };

    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
                    Latest Sermons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sermons.map((sermon) => (
                        <div
                            key={sermon._id}
                            className="bg-white dark:bg-gray-700 p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                        >
                            <video
                                src={sermon.url}
                                className="w-full h-40 object-cover rounded-t-2xl"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleVideoClick(sermon)}
                                muted
                                controls={false}
                            ></video>
                            <h3 className="text-xl font-semibold mt-4">{sermon.title}</h3>
                            <p className="text-lg font-light mt-2">{sermon.description}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{new Date(sermon.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>

                {selectedSermon && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                            <video
                                src={selectedSermon.url}
                                className="w-full h-60 object-cover rounded-t-lg mb-4"
                                controls
                            ></video>
                            <h3 className="text-2xl font-semibold">{selectedSermon.title}</h3>
                            <p className="text-lg mt-2">{selectedSermon.description}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{new Date(selectedSermon.date).toLocaleDateString()}</p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                                onClick={() => setSelectedSermon(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Sermon;
