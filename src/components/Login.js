import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        alert(`Вхід успішний: Користувач ${formData.username}`);
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <h1>Авторизація</h1>
                <p>Введіть свої дані, щоб отримати доступ до системи.</p>
            </header>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Користувач:</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Введіть ім'я користувача"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
                <div className="form-group-checkbox">
                    <input
                        id="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    />
                    <label htmlFor="rememberMe">Запам'ятати мене</label>
                </div>
                <button type="submit" className="login-btn">Увійти</button>
            </form>
            <div className="login-footer">
                <p>Забули пароль? <a href="/reset">Відновити доступ</a></p>
                <p>Ще не маєте акаунта? <a href="/register">Зареєструватися</a></p>
            </div>
        </div>
    );
};

export default Login;
