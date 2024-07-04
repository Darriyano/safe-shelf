import React, {createContext, useContext, useState, ReactNode} from 'react';

// Define the context type
interface QRResponseContextType {
    qrResponse: string;
    setQrResponse: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const QRResponseContext = createContext<QRResponseContextType | undefined>(undefined);

// Create a provider component
export const QRResponseProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [qrResponse, setQrResponse] = useState<string>('');

    return (
        <QRResponseContext.Provider value={{qrResponse, setQrResponse}}>
            {children}
        </QRResponseContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useQRResponse = () => {
    const context = useContext(QRResponseContext);
    if (!context) {
        throw new Error('useResponse must be used within a ResponseProvider');
    }
    return context;
};
