import {FC, useEffect, useState} from "react";
import HeaderPage from "./HeaderPage";
import '../styles/profileStyles.css'

interface ProfileData {
    mail: string,
    password: string,
    username: string,
    surname: string,
    age: number,
    sex: string,
}

const Profile: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {

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
    // useEffect(() => {
    //     // Fetch data from backend
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/api/profile'); // Replace with your actual API endpoint
    //             const data: ProfileData = await response.json();
    //             setProfileData(data);
    //             setCurrentSurname(data.surname);
    //             setCurrentPass(data.password);
    //             setCurrentName(data.username);
    //             setCurrentMail(data.mail);
    //             setCurrentAge(data.age);
    //             setCurrentSex(data.sex);
    //         } catch (error) {
    //             console.error('Error fetching profile data:', error);
    //         }
    //     };
    //
    //     fetchData();
    
    // }, []);
    //
    const handleSave = () => {
    }
    // const handleSave = () => {
    //     if (profileData) {
    //         setProfileData({
    //             ...profileData,
    //             username: currentName,
    //             surname: currentSurname,
    //             mail: currentMail,
    //             password: currentPass,
    //             age: currentAge.toString() === '' ? 0 : currentAge,
    //             sex: currentSex,
    //         });
    //     }
    // };

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