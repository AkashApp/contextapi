import {useState} from 'react';
import axios from 'axios';
import {AuthContext} from '../../../context/AuthContext';
import { useContext } from 'react';

export const Login= ()=>{

    const {HandleTok}= useContext(AuthContext);

    const [email, setEmail]= useState();
    const [password, setPassword]= useState();

    const HandleEmail= (e)=>{
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    const HandlePassword= (e)=>{
        setPassword(e.target.value);
        // console.log(e.target.value);
    }
    const HandleSubmit= ()=>{
            axios.post("https://reqres.in/api/login", {
            "email": email,
            "password": password,
            }).then(response=>{
                const Data= response.data;
                HandleTok(Data.token);
            });
    }


    return (
        <div>
            <h3>Please use reqres.in for filling login information</h3>
            <input type="email" placeholder="Email" onChange={(e)=>HandleEmail(e)}/>
            <input type="password" placeholder="Password" onChange={(e)=>HandlePassword(e)}/>
            <input type="submit" onClick={()=>HandleSubmit()}/>
        </div>
    );
}