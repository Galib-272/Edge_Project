import React from 'react';

const Accordion = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Why Choose Our Hospital?</h2>
            <div className="join join-vertical w-full space-y-4">
                {/* Affordable Healthcare */}
                <div className="collapse collapse-arrow join-item border border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" defaultChecked />
                    <div className="collapse-title text-xl font-semibold text-white flex items-center gap-3">
                        🏥 Affordable Healthcare
                    </div>
                    <div className="collapse-content text-gray-300">
                        <p>Quality medical care at reasonable costs for everyone.</p>
                    </div>
                </div>

                {/* State-of-the-Art Facilities */}
                <div className="collapse collapse-arrow join-item border border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-white flex items-center gap-3">
                        🏥 State-of-the-Art Facilities
                    </div>
                    <div className="collapse-content text-gray-300">
                        <p>Equipped with modern medical technology and advanced treatment options.</p>
                    </div>
                </div>

                {/* Emergency Response */}
                <div className="collapse collapse-arrow join-item border border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-white flex items-center gap-3">
                        🚑 Emergency Response
                    </div>
                    <div className="collapse-content text-gray-300">
                        <p>24/7 emergency services with quick and efficient medical response.</p>
                    </div>
                </div>

                {/* Specialized Treatments */}
                <div className="collapse collapse-arrow join-item border border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-white flex items-center gap-3">
                        🧑‍⚕️ Specialized Treatments
                    </div>
                    <div className="collapse-content text-gray-300">
                        <p>Expert doctors in cardiology, neurology, orthopedics, and more.</p>
                    </div>
                </div>

                {/* 24/7 Patient Support */}
                <div className="collapse collapse-arrow join-item border border-gray-600 bg-gray-700 rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-white flex items-center gap-3">
                        📞 24/7 Patient Support
                    </div>
                    <div className="collapse-content text-gray-300">
                        <p>Always available to assist patients and their families with queries and concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
