import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
    const [appointment, setAppointment] = useState({ date: '', time: '', doctor: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment data:', appointment);
        alert(`Запис успішно створено:\nДата: ${appointment.date}\nЧас: ${appointment.time}\nЛікар: ${appointment.doctor}`);
    };

    // Можливі варіанти часу з інтервалом у 30 хвилин
    const timeOptions = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30', '18:00'
    ];

    return (
        <div className="appointment-container">
            <header className="appointment-header">
                <h1>Запис на прийом</h1>
                <p>Оберіть дату, час та лікаря для вашого візиту.</p>
            </header>
            <form className="appointment-form" onSubmit={handleSubmit}>
                {/* Група для вибору дати */}
                <div className="form-group">
                    <label htmlFor="date" className="form-label">Дата:</label>
                    <input
                        id="date"
                        type="date"
                        className="form-input uniform-input"
                        value={appointment.date}
                        onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                    />
                </div>

                {/* Група для вибору часу */}
                <div className="form-group">
                    <label htmlFor="time" className="form-label">Час:</label>
                    <select
                        id="time"
                        className="form-select uniform-input"
                        value={appointment.time}
                        onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
                    >
                        <option value="" disabled>Оберіть час</option>
                        {timeOptions.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>

                {/* Група для вибору лікаря */}
                <div className="form-group">
                    <label htmlFor="doctor" className="form-label">Лікар:</label>
                    <select
                        id="doctor"
                        className="form-select uniform-input"
                        value={appointment.doctor}
                        onChange={(e) => setAppointment({ ...appointment, doctor: e.target.value })}
                    >
                        <option value="" disabled>Оберіть лікаря</option>
                        <option value="Іванов І.І.">Іванов І.І.</option>
                        <option value="Петренко П.П.">Петренко П.П.</option>
                        <option value="Коваленко К.К.">Коваленко К.К.</option>
                    </select>
                </div>

                {/* Кнопка для підтвердження запису */}
                <button type="submit" className="submit-btn">Записатися</button>
            </form>
        </div>
    );
};

export default Appointment;
