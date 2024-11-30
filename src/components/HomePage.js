import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Вітаємо у стоматологічній клініці!</h1>
                <p>Ми піклуємося про вашу усмішку!</p>
            </header>
            <section className="homepage-content">
                <div className="homepage-card">
                    <img
                        src="https://via.placeholder.com/300x200?text=Реєстрація"
                        alt="Реєстрація"
                    />
                    <h2>Реєстрація</h2>
                    <p>Зареєструйтесь, щоб отримати доступ до наших послуг.</p>
                </div>
                <div className="homepage-card">
                    <img
                        src="https://via.placeholder.com/300x200?text=Запис"
                        alt="Запис на прийом"
                    />
                    <h2>Запис на прийом</h2>
                    <p>Забронюйте зручний час для візиту до нашої клініки.</p>
                </div>
                <div className="homepage-card">
                    <img
                        src="https://via.placeholder.com/300x200?text=Історія"
                        alt="Історія прийомів"
                    />
                    <h2>Історія прийомів</h2>
                    <p>Переглядайте свої попередні записи та результати.</p>
                </div>
                <div className="homepage-card">
                    <img
                        src="https://via.placeholder.com/300x200?text=Пошук"
                        alt="Пошук"
                    />
                    <h2>Пошук</h2>
                    <p>Знаходьте потрібні записи за критеріями.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
