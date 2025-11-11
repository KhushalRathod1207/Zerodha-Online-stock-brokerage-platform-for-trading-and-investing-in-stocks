import React, { useState } from "react";

const faqs = [
    {
        question: "What is a Zerodha account?",
        answer:
            "A Zerodha account allows you to invest and trade in stocks, commodities, and other financial instruments online.",
    },
    {
        question: "What documents are required to open a demat account?",
        answer:
            "You will need your PAN card, Aadhaar card, bank proof, and a passport-size photograph.",
    },
    {
        question: "Is Zerodha account opening free?",
        answer:
            "No, there are small account opening charges depending on the segments you choose.",
    },
    {
        question: "Are there any maintenance charges for a demat account?",
        answer:
            "Yes, there are annual maintenance charges depending on your account type.",
    },
    {
        question: "Can I open a demat account without a bank account?",
        answer: "No, linking your bank account is mandatory to open a demat account.",
    },
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="max-w-4xl mx-auto my-12 px-4">
            <h4 className="text-xl font-semibold mb-6 text-gray-800">FAQs</h4>
            <div className="divide-y divide-gray-200 border-t border-b">
                {faqs.map((faq, index) => (
                    <div key={index} className="py-4">
                        {/* Question */}
                        <button
                            className="flex justify-between items-center w-full text-left focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-gray-700">{faq.question}</span>
                            <i
                                className={`fa-solid ${openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                                    } text-gray-400`}
                            ></i>
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="mt-2 text-gray-500 text-sm">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
