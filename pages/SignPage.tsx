import {useNavigate} from "react-router-dom";
import '../styles/signer.css'

interface signData {
    login: string;
    password: string;
    name: string;
    surname: string;
    age: number;
    gender: string;
}

const SignPage = () => {
    const navigate = useNavigate();

    const handleSignIn = async () => {
        const login = (document.getElementById('mail') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const surname = (document.getElementById('surname') as HTMLInputElement).value;
        const age = Number((document.getElementById('age') as HTMLInputElement).value);
        const gender = (document.getElementById('gender') as HTMLSelectElement).value;

        const signed: signData = {
            login,
            password,
            name,
            surname,
            age,
            gender
        }

        try {
            const sending = await fetch('https://your-backend-url.com/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signed),
            });
            if (!sending.ok) {
                throw new Error('Network response was not ok');
            }

        } catch (error) {
            alert("Error: " + error)
        }

        navigate('/');
    };

    return (
        <div className="wrapper">
            <h1>SafeShelf</h1>

            <div className="inputs-sig">
                <label htmlFor="mail">Login</label>
                <input type="email" id="mail" name="login" required/>

                <label htmlFor="pass">Password</label>
                <input type="password" id="password" required/>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="surname" required/>

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" min="0" max="100" required/>

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button onClick={handleSignIn} className='signbtn'>Sign in</button>
            </div>
        </div>
    );
}

export default SignPage;