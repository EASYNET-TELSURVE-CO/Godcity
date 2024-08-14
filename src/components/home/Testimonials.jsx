// src/components/home/Testimonials.jsx

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Avatar } from "@mui/material";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "Community Member",
        testimonial: "This platform has completely transformed my spiritual journey. The sermons are insightful and the community is incredibly supportive.",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Volunteer",
        testimonial: "I love being part of this community. The resources available have helped me grow in my faith and the events are always uplifting.",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 3,
        name: "Michael Johnson",
        position: "Member",
        testimonial: "The ability to access sermons anytime and anywhere has been a game-changer for me. This platform truly makes a difference.",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 4,
        name: "Emily Davis",
        position: "Youth Leader",
        testimonial: "The youth programs are fantastic! They engage the younger members and provide them with meaningful ways to connect with their faith.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
];

const Testimonials = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-20 bg-white dark:bg-black text-black dark:text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Testimonials
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Hear what our members have to say about us.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-8 rounded-3xl shadow-lg bg-background-light dark:bg-background-dark/50" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center mb-4">
                                <Avatar alt={testimonial.name} src={testimonial.image} className="w-16 h-16 mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm font-light">{testimonial.position}</p>
                                </div>
                            </div>
                            <p className="text-base font-light"><span className="text-2xl">
                                &quot;
                            </span>
                            {testimonial.testimonial}
                            <span className="text-2xl">
                                &quot;
                            </span></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;