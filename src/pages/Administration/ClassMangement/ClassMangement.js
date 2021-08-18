import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const ClassMangement = () => {
    const [classList, setClassList]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:3000/api/get").then((response)=>{
            console.log('Data set!')
          setClassList(response.data)
        })
      },[])
    return (
        <div>
            {classList.map((val)=>{
                return <h1>Level: {val.niveau} | Name : {val.nom} | Number : {val.nb} </h1>
            })}
        </div>
    )
}

export default ClassMangement;