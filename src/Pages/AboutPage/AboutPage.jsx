import React from 'react';

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">About Our Hospital</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Welcome to <span className="font-semibold">HopeCare Hospital</span>, where we are dedicated to providing world-class healthcare services with compassion and excellence. Our team of experienced doctors, nurses, and healthcare professionals strive to ensure the best medical care for all our patients.
                </p>
                <h3 className="text-2xl font-semibold text-blue-500 mt-6">Our Mission</h3>
                <p className="text-gray-700 text-lg mb-4">
                    Our mission is to enhance the well-being of our community by delivering high-quality, patient-centered care with advanced medical technology and personalized treatment plans.
                </p>
                <h3 className="text-2xl font-semibold text-blue-500 mt-6">Why Choose Us?</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg">
                    <li>24/7 Emergency Services</li>
                    <li>Highly Qualified Medical Professionals</li>
                    <li>Advanced Diagnostic and Treatment Facilities</li>
                    <li>Patient-Centric Approach</li>
                    <li>Affordable and Transparent Billing</li>
                </ul>
                <p className="text-gray-700 text-lg mt-4">
                    At HopeCare Hospital, we believe in treating every patient with dignity and respect. Your health is our priority.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
