import {FC, useState} from "react";
import HeaderPage from "./HeaderPage";
import '../styles/dietStyles.css'
import CardContainer from "./dietComponent";


const Diet: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    const [activeButton, setActiveButton] = useState('breakfast'); // state to manage active button

    /* Здесь будет происходить обработка пришедшего с бэкенда запроса, который в последствии будет выкидываться в виде карточки-компонента*/
    const renderComponent = () => {
        switch (activeButton) {
            case 'breakfast':
                return (<CardContainer cards={[
                    {
                        dishName: 'Dish name example bigger',
                        ingredients: ["Flour 100g", "Egg", "Water"],
                        description: 'Snook smooth dogfish bluefin tuna menhaden kuhli loach airbreathing catfish. Lemon sole scorpionfish salamanderfish cherry salmon kuhli loach, "Antarctic icefish grunt Asiatic glassfish weasel shark." Marblefish pearl perch Death Valley pupfish orange roughy flabby whalefish brotula moray eel cookie-cutter shark. Frogfish bigscale fish pearl danio; Oregon chub. False cat shark parrotfish, ocean sunfish dragonfish crappie elephant fish barramundi: weeverfish. Long-whiskered catfish seamoth, "sarcastic fringehead," kingfish barracuda stonecat mail-cheeked fish--coolie loach flashlight fish gunnel tidewater goby firefish.'
                    },
                    {
                        dishName: 'SecondDish',
                        ingredients: ["1", "2", "3"],
                        description: 'Some example text to show example'
                    }
                ]}/>);
            case 'lunch':
                return (<CardContainer cards={[
                    {
                        dishName: 'firstDish',
                        ingredients: ["1", "2", "3"],
                        description: 'Some example text to show example'
                    }
                ]}/>);
            case 'dinner':
                return (<CardContainer cards={[
                    {
                        dishName: 'Dish',
                        ingredients: ["1", "2", "3"],
                        description: 'Some example text to show example'
                    }
                ]}/>);
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