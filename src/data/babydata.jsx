import React from 'react';
import { createContext } from 'react';
data=createContext();
const Babydata = ({children}) => {
    return (
        <data.Provider value=" " >
            {children}
        </data.Provider>
    );
}

export {Babydata,data};
