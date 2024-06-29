import {useNavigate} from "react-router-dom";
import '../styles/signer.css'


const SignPage = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
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