import {FC} from "react";
import HeaderPage from "./HeaderPage";
import '../styles/dietStyles.css'


const Diet: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    return (
        <div>
            <HeaderPage setMenuVisible={setMenuVisible}/>]
            <div className='pageContainer'>
                <h1>Diet</h1>
            </div>
        </div>
    )
};


export default Diet;