import {FC, useEffect, useState} from "react";
import HeaderPage from "./HeaderPage";
import '../styles/profileStyles.css'
import {useResponse} from "./ResponseContext";

interface ProfileData {
    login: string;
    password: string;
    name: string;
    surname: string;
    age: number;
    sex: string;
}

const Profile: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    // In response we save mail info about user
    const {response, setResponse} = useResponse();

    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [currentMail, setCurrentMail] = useState<string>();
    const [currentPass, setCurrentPass] = useState<string>();
    const [currentName, setCurrentName] = useState<string>();
    const [currentSurname, setCurrentSurname] = useState<string>();
    const [currentAge, setCurrentAge] = useState<number>();
    const [currentSex, setCurrentSex] = useState<string>();

    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const currResponse = await fetch(`/account/${response.toString()}`);
                const data: ProfileData = await currResponse.json();

                setProfileData(data);
                setCurrentMail(data.login)
                setCurrentAge(Number(data.age));
                setCurrentPass(data.password);
                setCurrentSex(data.sex);
                setCurrentSurname(data.surname);
                setCurrentName(data.name)

            } catch (err) {
                alert(err);
            } finally {
            }
        };

        fetchProfileData();
    }, []);

    // For now is useless
    const handleSave = () => {
        const login = (document.getElementById('mail') as HTMLInputElement).value;
        setResponse(login);
        setDisabled(true);
    }

    const editSave = () => {
        setDisabled(false);
    }

    return (
        <>
            <HeaderPage setMenuVisible={setMenuVisible}/>
            <div className='pageContainer'>
                <h1>Profile</h1>
                <div className="inputs">
                    <label htmlFor="mail">Login</label>
                    <input type="email" id="mail" name="login" defaultValue={currentMail} disabled={disabled} required/>

                    <label htmlFor="pass">Password</label>
                    <input type="password" id="password" defaultValue={currentPass} disabled={disabled} required/>

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={currentName} disabled={disabled} required/>

                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" name="surname" defaultValue={currentSurname} disabled={disabled} required/>

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" defaultValue={currentAge} min="0" max="100" disabled={disabled} required/>

                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={currentSex} disabled={disabled} required>
                        <option value="">Select gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
                <div className="buttons">
                <button className='fixed-buttons edit' onClick={editSave}>Edit</button>
                <button className='fixed-buttons save' onClick={handleSave}>Save</button>
                </div>
            </div>

        </>
    )
};

export default Profile;