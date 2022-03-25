import './Stat.scss'
import {AuthContext} from '../../../context/AuthContext';
import { useContext } from 'react';

export const Status= ()=>{

    const {stat, HandleStat, HandleTok}= useContext(AuthContext);

    return(
        <div>
            <button className="stat" onClick={()=>{HandleStat(),HandleTok("")}}>{stat}</button>
        </div>
    );
}