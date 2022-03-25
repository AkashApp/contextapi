import { createContext, useState } from "react";


export const AuthContext= createContext();

export const AuthContextProvider= ({children})=>{

    const [stat, setStat]= useState("Login");

    const [tok, setTok]= useState("Not LogedIn");

    const HandleStat= ()=>{
        setStat(stat==="Login"?"Logout":"Login");
    };
    const HandleTok= (value)=>{
        setTok(value);
    };

    return (
        <AuthContext.Provider value={{tok, HandleTok, stat, HandleStat}}>
            {children}
        </AuthContext.Provider>
    );
}