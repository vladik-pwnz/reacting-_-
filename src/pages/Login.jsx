import React, { useContext } from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigate('/posts');
    }

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login');
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            {isAuth ? (
                <div>
                    <p>Вы уже авторизованы</p>
                    <MyButton onClick={logout}>Выйти</MyButton>
                </div>
            ) : (
                <form onSubmit={login}>
                    <MyInput type="text" placeholder="Введите логин"/>
                    <MyInput type="password" placeholder="Введите пароль"/>
                    <MyButton>Войти</MyButton>
                </form>
            )}
        </div>
    );
};

export default Login;