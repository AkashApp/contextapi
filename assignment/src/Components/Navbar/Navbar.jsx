import { Status } from "../Status/Status";
import './Nav.scss';
import {AuthContext} from '../../../context/AuthContext';
import { useContext } from 'react';

export const Navbar= ()=>{

    const {tok}= useContext(AuthContext);
    let X;
    tok===""?X="LogIn Please.":X="You're Logged In";

    return (
        <div className="Main">
            {tok===""?"":<h1>Token:-{tok}</h1>}
            {/* <h1>Token:-{tok}</h1> */}
            <h1>Status:-{X}</h1>
            <Status/>
        </div>
    );
}