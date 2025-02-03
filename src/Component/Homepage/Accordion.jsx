import React from 'react';

const Accordion = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">Why Choose Us?</h2>
            <div className="join join-vertical w-full space-y-4">
                {/* Budget Friendly */}
                <div className="collapse collapse-arrow join-item border border-gray-700 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" defaultChecked />
                    <div className="collapse-title text-xl font-semibold text-gray-200 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Budget Friendly
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>Enjoy quality food and services without breaking the bank.</p>
                    </div>
                </div>

                {/* Eye-Catching Interior */}
                <div className="collapse collapse-arrow join-item border border-gray-700 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-gray-200 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        Eye-Catching Interior
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>Our space combines elegance with comfort for an unforgettable ambiance.</p>
                    </div>
                </div>

                {/* Delivery Options */}
                <div className="collapse collapse-arrow join-item border border-gray-700 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-gray-200 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 10h11M9 21V3m5 4l4 4m0 0l-4 4m4-4H9" />
                        </svg>
                        Delivery Options
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>Fast and reliable delivery within 20 minutes to your doorstep.</p>
                    </div>
                </div>

                {/* Premium Quality */}
                <div className="collapse collapse-arrow join-item border border-gray-700 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-gray-200 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Premium Quality
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>We ensure every dish is prepared with fresh ingredients and utmost care.</p>
                    </div>
                </div>

                {/* Customer Support */}
                <div className="collapse collapse-arrow join-item border border-gray-700 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
                    <input type="radio" name="my-accordion-5" />
                    <div className="collapse-title text-xl font-semibold text-gray-200 flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 10c0-3.866-3.582-7-8-7S2 6.134 2 10c0 3.197 2.356 5.93 5.5 6.722V19a1 1 0 001 1h3a1 1 0 001-1v-2.278A6.999 6.999 0 0018 10z" />
                        </svg>
                        24/7 Customer Support
                    </div>
                    <div className="collapse-content text-gray-400">
                        <p>Our team is available around the clock to assist you with any queries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
