import React from 'react';
import { useState,useEffect } from 'react';
 const Hello = () => {
const [initialState,setInitialState] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/api/').then((res)=> {
        console.log("checking ..")
        if (res.ok) {
            console.log("res is okay")
            console.log(res)
            return res.json()
        }
        
    }).then((jsonResponse)=> setInitialState(jsonResponse.hello))
},[])

return(
    <div>
        {initialState.length > 0 && initialState.map((e,i)=><li key={i}>{e}</li>)}
    </div>
);
};

export default Hello;