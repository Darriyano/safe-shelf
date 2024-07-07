import React, {createContext, useContext, useState, ReactNode, Dispatch, SetStateAction} from 'react';

interface Grocery {
    id: number;
    name: string;
    weight: number;
    kcal: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
    date: Date;
}

interface GroceryContainerProps {
    groceries: Grocery[];
}

// Define the context type
interface GroceryContextType {
    groceryData: GroceryContainerProps[];
    setGroceryData: Dispatch<SetStateAction<GroceryContainerProps[]>>;
}


// Create the context with default values
const QRResponseContext = createContext<GroceryContextType | undefined>(undefined);

// Create a provider component
export const QRResponseProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [groceryData, setGroceryData] = useState<GroceryContainerProps[]>([]);

    return (
        <QRResponseContext.Provider value={{groceryData, setGroceryData}}>
            {children}
        </QRResponseContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useQRResponse = () => {
    const context = useContext(QRResponseContext);
    if (!context) {
        throw new Error('useQRResponce must be used within a QRResponseProvider');
    }
    return context;
};
