import {FC, useEffect, useState} from "react";
import HeaderPage from "./HeaderPage";
import '../styles/profileStyles.css'
import {useResponse} from "./ResponseContext";

interface ProfileData {
    mail: string,
    password: string,
    username: string,
    surname: string,
    age: number,
    sex: string,
}

const Profile: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {

    // In response we save mail info about user
    const {response, setResponse} = useResponse();

    /*Only for testing*/
    const username: string = "DaryaDarya";
    const surname: string = "DD";
    const password: string = "chipichipi";
    const mail: string = "DaryaDarya@innopolis";
    const age: number = 19;
    const sex: string = "Female"

    // const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [currentMail, setCurrentMail] = useState(mail);
    const [currentPass, setCurrentPass] = useState(password);
    const [currentName, setCurrentName] = useState(username);
    const [currentSurname, setCurrentSurname] = useState(surname);
    const [currentAge, setCurrentAge] = useState(age);
    const [currentSex, setCurrentSex] = useState(sex);

    // For now is useless
    const handleSave = () => {

    }

    return (
        <>
            <HeaderPage setMenuVisible={setMenuVisible}/>
            <div className='pageContainer'>
                <h1>Profile</h1>
                <div className="inputs">
                    <label htmlFor="mail">Login</label>
                    <input type="email" id="mail" name="login" defaultValue={currentMail} required/>

                    <label htmlFor="pass">Password</label>
                    <input type="password" id="password" defaultValue={currentPass} required/>

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={currentName} required/>

                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" name="surname" defaultValue={currentSurname} required/>

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" defaultValue={currentAge} min="0" max="100" required/>

                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={currentSex} required>
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <button className='savebtn' onClick={handleSave}>Save</button>

            </div>

        </>
    )
};

export default Profile;