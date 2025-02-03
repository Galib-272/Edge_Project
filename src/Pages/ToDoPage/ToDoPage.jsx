import React, { useState } from 'react';

function ToDoPage() {
    const [formData, setFormData] = useState({
        username: '',
        order: '',
        mobileNumber: '',
        serialNo: ''
    });

    const [orders, setOrders] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedOrders = orders.map((order, index) =>
                index === editingIndex ? formData : order
            );
            setOrders(updatedOrders);
            setEditingIndex(null);
        } else {
            setOrders([...orders, formData]);
        }
        alert('Order Submitted Successfully!');
        setFormData({ username: '', order: '', mobileNumber: '', serialNo: '' });
    };

    const handleEdit = (index) => {
        setFormData(orders[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const filteredOrders = orders.filter((_, i) => i !== index);
        setOrders(filteredOrders);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', padding: '20px', border: '1px solid #444', borderRadius: '8px', backgroundColor: '#2d2d2d' }}>
            <h2 style={{ textAlign: 'center', color: '#fff' }}>Cafe Management System</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#333', color: '#fff' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="order" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Order:</label>
                    <input
                        type="text"
                        id="order"
                        name="order"
                        value={formData.order}
                        onChange={handleChange}
                        required
                        placeholder="Enter your order"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#333', color: '#fff' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="mobileNumber" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        placeholder="Enter 10-digit mobile number"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#333', color: '#fff' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="serialNo" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Serial No:</label>
                    <input
                        type="number"
                        id="serialNo"
                        name="serialNo"
                        value={formData.serialNo}
                        onChange={handleChange}
                        required
                        placeholder="Enter serial number"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#333', color: '#fff' }}
                    />
                </div>

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    {editingIndex !== null ? 'Update Order' : 'Submit Order'}
                </button>
            </form>

            <div>
                <h3 style={{ color: '#fff' }}>Order Details:</h3>
                {orders.length > 0 ? (
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        {orders.map((order, index) => (
                            <li key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #555', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }}>
                                <strong>Username:</strong> {order.username} |
                                <strong>Order:</strong> {order.order} |
                                <strong>Mobile:</strong> {order.mobileNumber} |
                                <strong>Serial No:</strong> {order.serialNo}
                                <div style={{ marginTop: '10px' }}>
                                    <button
                                        onClick={() => handleEdit(index)}
                                        style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        style={{ padding: '5px 10px', backgroundColor: '#FF5733', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ color: '#bbb' }}>No orders yet.</p>
                )}
            </div>
        </div>
    );
}

export default ToDoPage;
