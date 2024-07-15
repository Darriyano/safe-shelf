import {FC, useEffect, useState} from "react";
import HeaderPage from "./HeaderPage";
import '../styles/profileStyles.css'
import {useResponse} from "./ResponseContext";

interface ProfileData {
    login: string;
    name: string;
    surname: string;
    height: number;
    weight: number;
    age: number;
    sex: string;
    lifestyle: string;
    goal: string;
}

interface UpdatingData {
    oldLogin: string;
    login: string;
    name: string;
    surname: string;
    height: number;
    weight: number;
    password: string;
    age: number;
    sex: string;
    lifestyle: string;
    goal: string;
}

interface statusResponse400 {
    code: string,
    description: string,
    exceptionName: string,
    exceptionMessage: string
}

const Profile: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    // In response we save mail info about user
    const {response, setResponse} = useResponse();

    // const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [currentMail, setCurrentMail] = useState<string>();
    const [currentPass, setCurrentPass] = useState<string>();
    const [currentName, setCurrentName] = useState<string>();
    const [currentSurname, setCurrentSurname] = useState<string>();
    const [currentHeight, setCurrentHeight] = useState<number>();
    const [currentWeight, setCurrentWeight] = useState<number>();
    const [currentAge, setCurrentAge] = useState<number>();
    const [currentSex, setCurrentSex] = useState<string>();
    const [currentLifestyle, setCurrentLifestyle] = useState<string>();
    const [currentGoal, setCurrentGoal] = useState<string>();

    const [disabled, setDisabled] = useState(true);

    const lifeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setCurrentLifestyle(value);
    };

    const sexChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setCurrentSex(value);
    };

    const goalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setCurrentGoal(value);
    };

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                let userLogin = sessionStorage.getItem('userLogin')
                if (!userLogin) {
                    userLogin = "";
                }
                const currResponse = await fetch(`/account/${userLogin.toString()}`);
                const data: ProfileData = await currResponse.json();
                // setProfileData(data);
                setCurrentMail(data.login)
                setCurrentAge(Number(data.age));
                setCurrentHeight(Number(data.height));
                setCurrentWeight(Number(data.weight));
                setCurrentPass("");
                setCurrentSex(data.sex);
                setCurrentSurname(data.surname);
                setCurrentName(data.name);
                setCurrentLifestyle(data.lifestyle);
                setCurrentGoal(data.goal);
            } catch (err) {
                alert(err);
            }
        };
        fetchProfileData().then();
    }, []);

    // For now is useless
    const handleSave = async () => {
        let oldLogin = sessionStorage.getItem('userLogin')

        if (!oldLogin) {
            oldLogin = "";
        }

        const login = (document.getElementById('mail') as HTMLInputElement).value;
        let password = (document.getElementById('new-password') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const surname = (document.getElementById('surname') as HTMLInputElement).value;
        const height = Number((document.getElementById('height') as HTMLInputElement).value);
        const weight = Number((document.getElementById('weight') as HTMLInputElement).value);
        const age = Number((document.getElementById('age') as HTMLInputElement).value);
        const sex = (document.getElementById('gender') as HTMLSelectElement).value;
        const lifestyle = (document.getElementById('lifestyle') as HTMLSelectElement).value;
        const goal = (document.getElementById('goal') as HTMLSelectElement).value;

        if (!password) {
            password = "";
        }

        const updatedProfile: UpdatingData = {
            oldLogin,
            login,
            name,
            surname,
            height,
            weight,
            password,
            age,
            sex,
            lifestyle,
            goal
        }

        try {
            const currResponse = await fetch("/account", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProfile),
            });

            const currentStatus = currResponse.status;

            if (currentStatus === 200) {
                const data = await currResponse.json();
                setCurrentMail(data.login)
                setCurrentAge(Number(data.age));
                setCurrentPass(data.password);
                setCurrentSex(data.sex);
                setCurrentHeight(Number(data.height));
                setCurrentWeight(Number(data.weight));
                setCurrentSurname(data.surname);
                setCurrentName(data.name)
                setCurrentLifestyle(data.lifestyle)
                setCurrentGoal(data.goal)
                sessionStorage.setItem('userLogin', data.login);
                setDisabled(true);

                alert("Successfully!")

            } else if (currentStatus >= 400) {
                /* Значит какой-то кринж и мы этот кринж обрабатываем */
                const badRequest: statusResponse400 = await currResponse.json();
                const stringError: string = badRequest.description;
                throw new Error(stringError);
            } else {
                // ЧТО ДЕЛАЕМ?
                throw new Error('Непредвиденная ошибка. Попробуйте позже');
            }

        } catch (err) {
            alert(err);
        }
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

                    <label htmlFor="new-password">Password</label>
                    <input type="new-password" id="new-password" defaultValue={currentPass} disabled={disabled}
                           required/>

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={currentName} disabled={disabled} required/>

                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" name="surname" defaultValue={currentSurname} disabled={disabled}
                           required/>

                    <label htmlFor="height">Height:</label>
                    <input type="number" id="height" name="height" defaultValue={currentHeight} disabled={disabled} required/>

                    <label htmlFor="weight">Weight:</label>
                    <input type="number" id="weight" name="weight" defaultValue={currentWeight} disabled={disabled} required/>

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" defaultValue={currentAge} min="0" max="100"
                           disabled={disabled} required/>

                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={currentSex} disabled={disabled} onChange={sexChange}
                            required>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>

                    <label htmlFor="lifestyle">Lifestyle:</label>
                    <select id="lifestyle" name="lifestyle" value={currentLifestyle} disabled={disabled}
                            onChange={lifeChange} required>
                        <option value="Office worker">Office worker</option>
                        <option value="Sedentary work, light fitness">Sedentary work, light fitness</option>
                        <option value="Sedentary work, intense sports">Sedentary work, intense sports</option>
                        <option value="Work on feet (without lifting heavy weights)">Work on feet (without lifting heavy
                            weights)
                        </option>
                        <option value="Work on feet (without lifting heavy weights), 3 times a week intense sport">Work
                            on
                            feet (without lifting heavy weights), 3 times a week intense sport
                        </option>
                        <option value="Daily trainings\Work associated with physical activity">Daily trainings\Work
                            associated with physical activity
                        </option>
                    </select>

                    <label htmlFor="goal">Goal:</label>
                    <select id="goal" name="goal" value={currentGoal} disabled={disabled} onChange={goalChange}
                            required>
                        <option value="loss">Lose weight</option>
                        <option value="get">Get weight</option>
                        <option value="stay">Stay</option>
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