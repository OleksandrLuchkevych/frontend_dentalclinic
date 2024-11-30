import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Appointment from './components/Appointment';
import History from './components/History';
import Search from './components/Search';
import './App.css'; // Додано CSS-файл для стилізації

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Вітаємо у стоматологічній клініці!</h1>
            <p className="homepage-subtitle">Ми піклуємося про вашу усмішку!</p>
            <div className="card-container">
                <div className="card" onClick={() => navigate('/register')}>
                    <img src="/icons/register.png" alt="Реєстрація" className="card-icon" />
                    <h3>Реєстрація</h3>
                    <p>Зареєструйтесь, щоб отримати доступ до наших послуг.</p>
                </div>
                <div className="card" onClick={() => navigate('/login')}>
                    <img src="/icons/login.png" alt="Авторизація" className="card-icon" />
                    <h3>Авторизація</h3>
                    <p>Увійдіть, щоб користуватись нашими послугами.</p>
                </div>
                <div className="card" onClick={() => navigate('/appointment')}>
                    <img src="/icons/appointment.png" alt="Запис на прийом" className="card-icon" />
                    <h3>Запис на прийом</h3>
                    <p>Забронюйте зручний час для візиту до нашої клініки.</p>
                </div>
                <div className="card" onClick={() => navigate('/history')}>
                    <img src="/icons/history.png" alt="Історія прийомів" className="card-icon" />
                    <h3>Історія прийомів</h3>
                    <p>Переглядайте свої попередні записи та результати.</p>
                </div>
                <div className="card" onClick={() => navigate('/search')}>
                    <img src="/icons/search.png" alt="Пошук" className="card-icon" />
                    <h3>Пошук</h3>
                    <p>Знаходьте потрібні записи за критеріями.</p>
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/history" element={<History />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default App;
