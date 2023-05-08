import React from 'react';
const SliderContext=createContext();
const infox=[{info:'feeding'},{info:'sleeping'},
{info:'sleeping'},{info:'feeding'},
{info:'feeding'},{info:'feeding'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'},{info:'sleeping'},
{info:'feeding'}]

const SliderData = () => {
    return (
        <SliderContext.Provider value={{babies,setsearcher,searcher,search}} >
        {children}
    </SliderContext.Provider>
    );
}

export default SliderData;
