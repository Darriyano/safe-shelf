import {FC} from "react";
import HeaderPage from "./HeaderPage";

const Profile: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    return (
        <>
            <HeaderPage setMenuVisible={setMenuVisible}/>
            <div className='pageContainer'>
                <h1>Profile</h1>
            </div>
        </>
    )
};

export default Profile;