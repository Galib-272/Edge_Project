import React from 'react';

const Stat = () => {
    return (
        <div className="p-8 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-100">
            <div className="stats shadow-lg rounded-lg bg-white grid gap-6 lg:grid-cols-3 p-6">
                {/* Consultation Fees */}
                <div className="stat hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="stat-figure text-blue-600 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-10 w-10 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-lg text-gray-600 font-medium">Consultation Fees</div>
                    <div className="stat-value text-2xl font-extrabold text-blue-600">500-5000 TK</div>
                    <div className="stat-desc text-gray-500 mt-2">Affordable and transparent pricing</div>
                </div>

                {/* Emergency Response */}
                <div className="stat hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="stat-figure text-green-600 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-10 w-10 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-lg text-gray-600 font-medium">Emergency Response</div>
                    <div className="stat-value text-2xl font-extrabold text-green-600">Within 10 Minutes</div>
                    <div className="stat-desc text-gray-500 mt-2">Fast and reliable emergency services</div>
                </div>

                {/* Hospital Facilities */}
                <div className="stat hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
                    <div className="stat-figure text-purple-600 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-10 w-10 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-lg text-gray-600 font-medium">Hospital Facilities</div>
                    <div className="stat-value text-2xl font-extrabold text-purple-600">State-of-the-Art</div>
                    <div className="stat-desc text-gray-500 mt-2">Advanced medical equipment and technology</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;
