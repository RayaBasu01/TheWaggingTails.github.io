//this file used for creating all kinds of logics and states .

import { createContext , useState} from "react";

export const Context = createContext();


const AppContext = ({children})=> {
        return (
            <Context.Provider>
                {children}
            </Context.Provider>
        )
}


export default AppContext;