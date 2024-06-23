import {FC} from "react";
import HeaderPage from "./HeaderPage";
import GroceryContainer from "./GroceryComponent";
import '../styles/dietStyles.css'


const Grocery: FC<{ setMenuVisible: (visible: boolean) => void }> = ({setMenuVisible}) => {
    return (
        <>
            <HeaderPage setMenuVisible={setMenuVisible}/>
            <div className='pageContainer'>
                <h1>Grocery List</h1>
                <GroceryContainer cards={[
                    {
                        groceryName: 'Grocery Name',
                        parameters: ["Weight: 20g", "KKal: 20"],
                        description: 'Snook smooth dogfish bluefin tuna menhaden kuhli loach airbreathing catfish. Lemon sole scorpionfish salamanderfish cherry salmon kuhli loach, "Antarctic icefish grunt Asiatic glassfish weasel shark." Marblefish pearl perch Death Valley pupfish orange roughy flabby whalefish brotula moray eel cookie-cutter shark. Frogfish bigscale fish pearl danio; Oregon chub. False cat shark parrotfish, ocean sunfish dragonfish crappie elephant fish barramundi: weeverfish. Long-whiskered catfish seamoth, "sarcastic fringehead," kingfish barracuda stonecat mail-cheeked fish--coolie loach flashlight fish gunnel tidewater goby firefish.',
                        date: "2021-04-12"
                    },
                    {
                        groceryName: 'Grocery Name X2',
                        parameters: ["Weight: 20g", "KKal: 20"],
                        description: 'Some example text to show example',
                        date: "2021-04-12"
                    }
                ]}/>
                <button className='add'>Add groceries</button>
            </div>
        </>
    )
};

export default Grocery;