import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login');
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Exit
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">
                    <MyButton>About site</MyButton>
                </Link>
                <Link to="/posts">
                    <MyButton>Posts</MyButton>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
