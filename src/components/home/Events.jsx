// src/components/home/Events.jsx

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EventIcon from "@mui/icons-material/Event";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import gcLogo from "/GC.png"; // Adjust the path as necessary
import events from "./events";

const Events = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="relative py-20 bg-background-light dark:bg-background-dark text-black dark:text-white max-w-screen">
            <img src={gcLogo} alt="GodCity Logo" className="absolute inset-0 w-full h-full object-cover opacity-5" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Upcoming Events
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Stay updated with our latest events and activities.
                    </p>
                    <button
                        className="mt-4 px-6 py-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition transform hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <AddIcon /> Add New Event
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="relative p-6 rounded-3xl shadow-lg bg-white dark:bg-gray-800 transform transition duration-300 hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <EventIcon className="text-primary dark:text-primary-dark" />
                            </div>
                            <p className="text-sm font-light mb-4">{event.date}</p>
                            <p className="text-base font-light mb-4">{event.description}</p>
                            <div className="flex justify-between items-center opacity-75">
                                <div className="flex items-center">
                                    <EditIcon className="mr-2 text-gray-500 dark:text-gray-300" />
                                    <p className="text-sm">Edit</p>
                                </div>
                                <div className="flex items-center">
                                    <DeleteIcon className="mr-2 text-gray-500 dark:text-gray-300" />
                                    <p className="text-sm">Delete</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex justify-center items-center">
                                <div className="text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                    <p className="text-sm font-light">{event.date}</p>
                                    <p className="text-base font-light mb-4">{event.description}</p>
                                    <p className="text-sm">
                                        Click to learn more about how you can edit and manage events seamlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;