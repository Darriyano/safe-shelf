import {FC, useState} from "react";
import '../styles/login.css'
import {useNavigate} from "react-router-dom";


interface LoginData {
    login: string,
    password: string
}

const LoginPage: FC<{ onChange: (value: string) => void }> = ({onChange}) => {
    /* По нажатию будет срабатывать кнопка, которая собирает всю инфу с полей и проверяет ее в handle change, отправляя
    либо пустоту, либо айдишник для послед запросов на бэк*/
    const handleChange = async () => {
        const login = (document.getElementById('mail') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        const loginData: LoginData = {
            login,
            password
        }

        try {
            const sending = await fetch('https://your-backend-url.com/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            if (!sending.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await sending.text();

            if (data == "ok") {
                onChange(data)

            } else {
                throw new Error('Theres no such email');
            }
        } catch (error) {
            alert("Error: " + error)
        }

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