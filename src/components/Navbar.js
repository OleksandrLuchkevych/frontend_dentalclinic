import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Домашня сторінка</Link></li>
                <li><Link to="/register">Реєстрація</Link></li>
                <li><Link to="/login">Авторизація</Link></li>
                <li><Link to="/appointment">Запис</Link></li>
                <li><Link to="/history">Історія</Link></li>
                <li><Link to="/search">Пошук</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
