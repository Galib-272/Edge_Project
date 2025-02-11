import React, { useState } from 'react';

function ToDoPage() {
    const [formData, setFormData] = useState({
        patientName: '',
        appointmentType: '',
        contactNumber: '',
        appointmentNo: ''
    });

    const [appointments, setAppointments] = useState([]);
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
            const updatedAppointments = appointments.map((appointment, index) =>
                index === editingIndex ? formData : appointment
            );
            setAppointments(updatedAppointments);
            setEditingIndex(null);
        } else {
            setAppointments([...appointments, formData]);
        }
        alert('Appointment Scheduled Successfully!');
        setFormData({ patientName: '', appointmentType: '', contactNumber: '', appointmentNo: '' });
    };

    const handleEdit = (index) => {
        setFormData(appointments[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const filteredAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(filteredAppointments);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', padding: '20px', border: '1px solid #444', borderRadius: '8px', backgroundColor: '#2d2d2d' }}>
            <h2 style={{ textAlign: 'center', color: '#fff' }}>Hospital Appointment Management</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Patient Name" required style={{ margin: '5px', padding: '8px' }} />
                <input type="text" name="appointmentType" value={formData.appointmentType} onChange={handleChange} placeholder="Appointment Type" required style={{ margin: '5px', padding: '8px' }} />
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required pattern="[0-9]{10}" style={{ margin: '5px', padding: '8px' }} />
                <input type="number" name="appointmentNo" value={formData.appointmentNo} onChange={handleChange} placeholder="Appointment No" required style={{ margin: '5px', padding: '8px' }} />
                <button type="submit" style={{ margin: '5px', padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
                    {editingIndex !== null ? 'Update Appointment' : 'Schedule Appointment'}
                </button>
            </form>

            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#444', color: '#fff' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #fff', padding: '10px' }}>Serial No</th>
                        <th style={{ border: '1px solid #fff', padding: '10px' }}>Patient Name</th>
                        <th style={{ border: '1px solid #fff', padding: '10px' }}>Appointment Type</th>
                        <th style={{ border: '1px solid #fff', padding: '10px' }}>Contact Number</th>
                        <th style={{ border: '1px solid #fff', padding: '10px' }}>Appointment No</th>
                        <th style={{ border: '1px solid #fff', padding: '10px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #fff', padding: '10px' }}>{index + 1}</td>
                                <td style={{ border: '1px solid #fff', padding: '10px' }}>{appointment.patientName}</td>
                                <td style={{ border: '1px solid #fff', padding: '10px' }}>{appointment.appointmentType}</td>
                                <td style={{ border: '1px solid #fff', padding: '10px' }}>{appointment.contactNumber}</td>
                                <td style={{ border: '1px solid #fff', padding: '10px' }}>{appointment.appointmentNo}</td>
                                <td style={{ border: '1px solid #fff', padding: '10px' }}>
                                    <button onClick={() => handleEdit(index)} style={{ marginRight: '5px', padding: '5px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>Edit</button>
                                    <button onClick={() => handleDelete(index)} style={{ padding: '5px', backgroundColor: '#FF5733', color: 'white', border: 'none', cursor: 'pointer' }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center', padding: '10px' }}>No appointments scheduled yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ToDoPage;
