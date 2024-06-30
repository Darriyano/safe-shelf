import {FC, useState} from "react";
import '../styles/login.css'
import {useNavigate} from "react-router-dom";


const LoginPage: FC<{ onChange: (value: string) => void }> = ({onChange}) => {
    /* По нажатию будет срабатывать кнопка, которая собирает всю инфу с полей и проверяет ее в handle change, отправляя
    либо пустоту, либо айдишник для послед запросов на бэк*/
    const handleChange = () => {
        onChange('user_id_idk')
    }

    const navigate = useNavigate();

    const goToSignPage = () => {
        navigate('/sign');
    };

    return (
        <div className="wrapper">
            <h1>SafeShelf</h1>
            <div className="inputs-log">
                <label htmlFor="mail">Login</label>
                <input type="email" id="mail" name="login" required/>

                <label htmlFor="pass">Password</label>
                <input type="password" id="password" required/>

                <button onClick={handleChange} className='login-btn'>Log in</button>


            </div>
            <div className='text'>Have no account?</div>
            <button className='sign-btn' onClick={goToSignPage}>Sign in</button>
        </div>
    )
}

export default LoginPage;