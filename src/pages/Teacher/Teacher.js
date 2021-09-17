import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import LoginTeacher from '../Login/LoginTeacher';
import { Link } from "react-router-dom";
import Popup from '../../components/Popup';
import PersonalInfoT from './PersonalInfos/PersonalInfo';
const Teacher = () => {
    const [id,setId] = useState("");
    const [openPopup,setOpenPopup]=useState(false)

              return(
    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <div
                            class="header" 
                            href="/infos/:id" 
                            style={{ fontFamily:'Tajawal',marginLeft: '5rem' }}  
                            onClick={()=> {setOpenPopup(true)}}
                        > 
                            المعلومات الشّخصيّة
                        </div>
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
        <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <PersonalInfoT setOpenPopup={setOpenPopup}/>
        </Popup>     

    </div>
)
    }

export default Teacher;
