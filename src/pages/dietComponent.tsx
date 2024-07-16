import React from 'react';
import '../styles/dietStyles.css'
import {useNavigate} from 'react-router-dom';

// Define props type for the CardContainer component
interface Diet {
    currentState: string,
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

// CardContainer component
const CardContainer: React.FC<Diet> = ({currentState, dishes}) => {
    const navigate = useNavigate();

    const action = (dishID: string, dishName: string, description: string, ingredients: Array<IngredientsEntity>) => {
        navigate('/details', {
            state: {dishID, dishName, description, ingredients}
        });
    }

    return (
        <div>
            {dishes.map((dish, index) => (
                dish.id === currentState && (
                    <div key={index} className="card-display"
                         onClick={() => action(dish.id, dish.name, dish.description, dish.ingredients)}>
                        <h2>{dish.name}</h2>
                        <svg width="30" height="21" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.45 10.9L4.05 9.5L7.075 6.45H0V4.45H7.075L4.05 1.4L5.45 0L10.9 5.45L5.45 10.9ZM11 10.45V8.45H20V10.45H11ZM11 2.45V0.45H20V2.45H11ZM14 6.45V4.45H20V6.45H14Z"
                                fill="#666666"/>
                        </svg>
                    </div>
                )
            ))}
        </div>
    );
};

export default CardContainer;