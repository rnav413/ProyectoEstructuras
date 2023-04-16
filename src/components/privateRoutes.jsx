import React, { useContext } from "react";
import {UserContext} from "./context";

export const PrivateRoutes = ({children}) => {
    const{logged} = useContext( UserContext );

    return logged ? children : <>Error 403</>

}