import React, { useState } from "react";

const peopleData = [
    {
        name: "Nikhil Kamath",
        role: "Co-founder & CFO",
        image: "/p1.jpg",
        bio: "Nikhil Kamath is the co-founder and CFO of Zerodha, shaping business strategy and driving growth.",
    },
    {
        name: "Dr. Kailash Nadh",
        role: "CTO",
        image: "/p2.jpg",
        bio: "Dr. Kailash Nadh leads Zerodha's technology, focusing on innovation and building robust platforms.",
    },
    {
        name: "Venu Madhav",
        role: "COO",
        image: "/p3.jpg",
        bio: "Venu Madhav is the Chief Operating Officer, ensuring seamless operations and customer satisfaction.",
    },
    {
        name: "Hanan Delvi",
        role: "CCO",
        image: "/p4.jpg",
        bio: "Hanan Delvi oversees compliance, risk management, and corporate governance at Zerodha.",
    },
    {
        name: "Seema Patil",
        role: "Director",
        image: "/p5.jpg",
        bio: "Seema Patil is a Director at Zerodha, spearheading initiatives in operations and compliance.",
    },
    {
        name: "Karthik Rangappa",
        role: "Chief of Education",
        image: "/p6.jpg",
        bio: "Karthik Rangappa heads Zerodha Varsity, creating educational content for traders and investors.",
    },
    {
        name: "Austin Prakesh",
        role: "Director Strategy",
        image: "/p7.jpg",
        bio: "Austin Prakesh drives strategic planning and partnerships for Zerodha’s long-term growth.",
    },
];

export default function MorePeople() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {peopleData.map((person, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden shadow-md">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h5 className="mt-4 text-lg font-semibold text-gray-800">
                            {person.name}
                        </h5>
                        <p className="text-gray-500 text-sm">{person.role}</p>

                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            className="text-gray-600 hover:text-blue-600 text-sm font-medium mt-2 flex items-center gap-1"
                        >
                            Bio{" "}
                            <span>
                                {openIndex === index ? "▲" : "▼"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <p className="mt-2 text-gray-600 text-sm max-w-xs">{person.bio}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
