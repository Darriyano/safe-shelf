import {useNavigate} from "react-router-dom";
import '../styles/signer.css'

interface signData {
    login: string;
    password: string;
    name: string;
    surname: string;
    age: number;
    sex: string;
}

interface statusResponse400 {
    code: string,
    description: string,
    exceptionName: string,
    exceptionMessage: string
}

const SignPage = () => {
    const navigate = useNavigate();

    const handleSignIn = async () => {
        const login = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('new-password') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const surname = (document.getElementById('surname') as HTMLInputElement).value;
        const age = Number((document.getElementById('age') as HTMLInputElement).value);
        const sex = (document.getElementById('gender') as HTMLSelectElement).value;
        const signed: signData = {
            login,
            password,
            name,
            surname,
            age,
            sex
        }

        try {
            const sending = await fetch("/account/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signed),
            });

            const currentStatus = sending.status;
            if (currentStatus === 200) {
                navigate('/');
            } else if (currentStatus >= 400) {
                /* Значит какой-то кринж и мы этот кринж обрабатываем */
                const badRequest: statusResponse400 = await sending.json();
                const stringError: string = badRequest.description;
                throw new Error(stringError);
            } else {
                // ЧТО ДЕЛАЕМ?
                throw new Error('Непредвиденная ошибка. Попробуйте позже');
            }


        } catch (error) {
            alert("Error: " + error)
        }

    };

    return (
        <div className="wrapper">
            <h1>SafeShelf</h1>

            <div className="inputs-sig">
                <label htmlFor="mail">Login</label>
                <input type="email" id="email" name="login" required/>

                <label htmlFor="pass">Password</label>
                <input type="password" id="new-password" required/>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="surname" required/>

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" min="0" max="100" required/>

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value=""></option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <button onClick={handleSignIn} className='signbtn'>Sign in</button>
            </div>
        </div>
    );
}

export default SignPage;