import React, { useState } from 'react';
import './History.css';

const History = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDoctor, setSearchDoctor] = useState('');
    const history = [
        { id: 1, date: '2024-11-10', doctor: 'Іванов І.І.', notes: 'Огляд і чистка' },
        { id: 2, date: '2024-11-12', doctor: 'Петренко П.П.', notes: 'Лікування карієсу' },
        { id: 3, date: '2024-11-14', doctor: 'Коваленко К.К.', notes: 'Пломбування зуба' },
    ];

    const filteredHistory = history.filter(
        (record) =>
            (!searchTerm || record.date.includes(searchTerm)) &&
            (!searchDoctor || record.doctor.toLowerCase().includes(searchDoctor.toLowerCase()))
    );

    return (
        <div className="history-container">
            <header className="history-header">
                <h1>Історія прийомів</h1>
                <p>Перегляньте свої попередні візити до лікарів.</p>
            </header>
            <div className="search-container">
                <div className="search-group">
                    <label htmlFor="search-date">Пошук за датою:</label>
                    <input
                        id="search-date"
                        type="date"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="search-group">
                    <label htmlFor="search-doctor">Пошук за лікарем:</label>
                    <input
                        id="search-doctor"
                        type="text"
                        placeholder="Введіть ім'я лікаря"
                        value={searchDoctor}
                        onChange={(e) => setSearchDoctor(e.target.value)}
                    />
                </div>
            </div>
            <ul className="history-list">
                {filteredHistory.length > 0 ? (
                    filteredHistory.map((record) => (
                        <li key={record.id} className="history-item">
                            <p><strong>Дата:</strong> {record.date}</p>
                            <p><strong>Лікар:</strong> {record.doctor}</p>
                            <p><strong>Примітки:</strong> {record.notes}</p>
                        </li>
                    ))
                ) : (
                    <p className="no-records">Записів не знайдено. Спробуйте змінити параметри пошуку.</p>
                )}
            </ul>
        </div>
    );
};

export default History;
