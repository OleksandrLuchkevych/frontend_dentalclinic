import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'patient',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Паролі не співпадають!');
        } else {
            console.log('Registration data:', formData);
            alert(`Реєстрація успішна для ${formData.username}`);
            setErrorMessage('');
        }
    };

    return (
        <div className="register-container">
            <header className="register-header">
                <h1>Реєстрація</h1>
                <p>Створіть новий обліковий запис, щоб отримати доступ до клініки.</p>
            </header>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Ім'я користувача:</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Введіть ім'я"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Електронна пошта:</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Введіть email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Введіть пароль"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Підтвердіть пароль:</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Підтвердіть пароль"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Роль:</label>
                    <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                        <option value="patient">Пацієнт</option>
                        <option value="doctor">Лікар</option>
                    </select>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" className="register-btn">Зареєструватися</button>
            </form>
            <div className="register-footer">
                <p>Вже маєте акаунт? <a href="/login">Увійти</a></p>
            </div>
        </div>
    );
};

export default Register;
