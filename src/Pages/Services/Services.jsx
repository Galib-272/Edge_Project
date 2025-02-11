import React from 'react';

const Services = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-8 flex flex-wrap justify-center gap-6">
            {/* Card 1 - General Checkup */}
            <div className="card bg-gray-800 w-96 shadow-xl rounded-lg hover:bg-gray-700 transition-all duration-300">
                <figure className="px-6 pt-6">
                    <img
                        src="general checkup.jpg"
                        alt="General Checkup"
                        className="rounded-xl shadow-lg object-cover w-64 h-64" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title text-2xl font-semibold text-yellow-400">General Checkup</h2>
                    <p className="text-gray-300">Comprehensive health checkup for early detection of health issues.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-teal-400 hover:bg-teal-500 text-white">Book Now</button>
                    </div>
                </div>
            </div>

            {/* Card 2 - Emergency Care */}
            <div className="card bg-gray-800 w-96 shadow-xl rounded-lg hover:bg-gray-700 transition-all duration-300">
                <figure className="px-6 pt-6">
                    <img
                        src="emergency care.jpg"
                        alt="Emergency Care"
                        className="rounded-xl shadow-lg object-cover w-64 h-64" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title text-2xl font-semibold text-yellow-400">Emergency Care</h2>
                    <p className="text-gray-300">24/7 emergency medical services with expert doctors.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-teal-400 hover:bg-teal-500 text-white">Call Now</button>
                    </div>
                </div>
            </div>

            {/* Card 3 - Specialized Consultation */}
            <div className="card bg-gray-800 w-96 shadow-xl rounded-lg hover:bg-gray-700 transition-all duration-300">
                <figure className="px-6 pt-6">
                    <img
                        src="specialized consultant.webp"
                        alt="Specialized Consultation"
                        className="rounded-xl shadow-lg object-cover w-64 h-64" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title text-2xl font-semibold text-yellow-400">Specialized Consultation</h2>
                    <p className="text-gray-300">Expert consultations with specialists in various medical fields.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-teal-400 hover:bg-teal-500 text-white">Schedule Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
