import {FC, useEffect, useState} from "react";
import HeaderPage from "./HeaderPage";
import '../styles/dietStyles.css'
import CardContainer from "./dietComponent";

interface Diet {
    dishes: {
        "id": string,
        "name": string,
        "ingredients": Array<IngredientsEntity>,
        "description": string,
        "type": string
    }[];
}

interface IngredientsEntity {
    userProductId: Number,
    name: string,
    weight: Number
}

const Diet: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    const [activeButton, setActiveButton] = useState('breakfast'); // state to manage active button
    const [dishes, setDishes] = useState<Diet["dishes"]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const login = sessionStorage.getItem('userLogin');
                const currResponse = await fetch(`/dish/${login}`);
                const currStatus = currResponse.status;
                if (currStatus === 200) {
                    const data: Diet["dishes"] = await currResponse.json();
                    setDishes(data);
                } else {
                    console.error(currResponse.statusText);
                }
            } catch (err) {
                console.warn(err)
            }
        }
        fetchData().then();
    }, []);

    /* Здесь будет происходить обработка пришедшего с бэкенда запроса, который в последствии будет выкидываться в виде карточки-компонента*/
    const renderComponent = () => {
        switch (activeButton) {
            case 'breakfast':
                return (<CardContainer dishes={dishes}/>);
            case 'lunch':
                return (<CardContainer dishes={dishes}/>);
            case 'dinner':
                return (<CardContainer dishes={dishes}/>);
            default:
                return null;
        }
    };

    return (
        <div>
            <HeaderPage setMenuVisible={setMenuVisible}/>
            <div className='pageContainer'>
                <h1>Diet</h1>
                <div className="button-container">
                    <button
                        className={activeButton === 'breakfast' ? 'active' : 'button'}
                        onClick={() => setActiveButton('breakfast')}>
                        Breakfast
                    </button>
                    <button
                        className={activeButton === 'lunch' ? 'active' : 'button'}
                        onClick={() => setActiveButton('lunch')}>
                        Lunch
                    </button>
                    <button
                        className={activeButton === 'dinner' ? 'active' : 'button'}
                        onClick={() => setActiveButton('dinner')}>
                        Dinner
                    </button>
                </div>
                <div className="display-component">
                    {renderComponent()}
                </div>
            </div>
            <button className='regenerate'>Regenerate</button>
        </div>
    )
};

export default Diet;