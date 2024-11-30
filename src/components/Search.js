import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [criteria, setCriteria] = useState({
        doctor: '',
        date: '',
        service: '',
    });

    const handleSearch = () => {
        console.log('Search criteria:', criteria);
        alert(`Пошук за критеріями: Лікар - ${criteria.doctor}, Дата - ${criteria.date}`);
    };

    return (
        <div className="search-container">
            <header className="search-header">
                <h1>Пошук</h1>
                <p>Введіть критерії для пошуку інформації в клініці.</p>
            </header>
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="doctor">Лікар:</label>
                    <input
                        id="doctor"
                        type="text"
                        placeholder="Введіть ім'я лікаря"
                        value={criteria.doctor}
                        onChange={(e) => setCriteria({ ...criteria, doctor: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Дата:</label>
                    <input
                        id="date"
                        type="date"
                        value={criteria.date}
                        onChange={(e) => setCriteria({ ...criteria, date: e.target.value })}
                    />
                </div>
                <button type="button" className="search-btn" onClick={handleSearch}>
                    Шукати
                </button>
            </form>
        </div>
    );
};

export default Search;
