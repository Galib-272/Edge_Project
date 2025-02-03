import React from 'react';

const Menu = () => {
    return (
        <div className="bg-gray-900 min-h-screen py-8 flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="card bg-gray-800 w-96 shadow-xl rounded-lg">
                <figure className="px-6 pt-6">
                    <img
                        src="pizza.avif"
                        alt="Italian Pizza"
                        className="rounded-xl shadow-lg object-cover w-64 h-64" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title text-2xl font-semibold text-teal-400">Hot Deal - Pizza</h2>
                    <p className="text-gray-300">Italian Pizza with Naga Meatbox and Chicken wings combo</p>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-teal-400 hover:bg-teal-500 text-white">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-gray-800 w-96 shadow-xl rounded-lg">
                <figure className="px-6 pt-6">
                    <img
                        src="burger.webp"
                        alt="Cheese Burger"
                        className="rounded-xl shadow-lg object-cover w-64 h-64" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title text-2xl font-semibold text-teal-400">Burger Combo</h2>
                    <p className="text-gray-300">Delicious Cheese Burger with Fries and Soft Drink</p>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-teal-400 hover:bg-teal-500 text-white">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-gray-800 w-96 shadow-xl rounded-lg">
                <figure className="px-6 pt-6">
                    <img
                        src="garlic bread.jpg"
                        alt="Pasta"
                        className="rounded-xl shadow-lg object-cover w-64 h-64" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title text-2xl font-semibold text-teal-400">Nuggets Delight</h2>
                    <p className="text-gray-300">Pizza chicken nuggets, fries and garlic bread</p>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-teal-400 hover:bg-teal-500 text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
