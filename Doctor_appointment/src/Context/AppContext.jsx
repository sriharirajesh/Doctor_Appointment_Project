import { createContext } from "react";
import App from "../App";
import { doctors } from "../assets/assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = (props)=>{

    const currency_symbol ="$"

    const value = {
        doctors,currency_symbol
    }
    return(
        <AppContext.Provider value={value}>
              {props.children}
        </AppContext.Provider>
    )
}
 export default AppContextProvider;