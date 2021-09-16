import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import LoginTeacher from '../Login/LoginTeacher';
import { Link } from "react-router-dom";
const Teacher = () => {
    const [id,setId] = useState("");
  
      const getTeacher = () => {
        Axios.get(`http://localhost:3000/getTeacher/${id}`).then((response)=>{
            setId(response.data[0].id_enseignant);
        });
      }
      let history=useHistory()
      const getInfos = (event) => {
          console.log("siisi");
        history.push(`/infos/${id}`);
      };
              return(
    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" onClick={(e)=>{
                            getTeacher()
                            getInfos(e)}}  style={{ fontFamily:'Tajawal',marginLeft: '5rem' }}  > المعلومات الشّخصيّة</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/studentmangement/StudentMangement" style={{ fontFamily:'Tajawal',marginLeft: '5rem' }}>التصرف في التلاميذ</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        
                        <a class="header" href="/teacher/p/presence" style={{ fontFamily:'Tajawal',marginLeft: '7rem' }}> الحضور</a>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui two column grid">
            
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/t/timetable" style={{ fontFamily:'Tajawal',marginLeft: '7rem' }}>جدول أوقاتي</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/t/stat" style={{ fontFamily:'Tajawal',marginLeft: '7rem' }}>إحصائيّات</a>
                    </div>
                </div>
            </div>
        </div>       

    </div>
)
    }

export default Teacher;
