import {FC} from "react";
import HeaderPage from "./HeaderPage";

const Grocery: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    return (
        <>
            <HeaderPage setMenuVisible={setMenuVisible}/>
            <div className='pageContainer'>
                <h1>Grocery Page</h1>
            </div>
        </>
    )
};

export default Grocery;