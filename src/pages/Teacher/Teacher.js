import React from 'react';


const Teacher = () => (

    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/infos" style={{ fontFamily:'Tajawal',marginLeft: '5rem' }}> المعلومات الشّخصيّة</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/studentmangement" style={{ fontFamily:'Tajawal',marginLeft: '5rem' }}>التصرف في التلاميذ</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/presence" style={{ fontFamily:'Tajawal',marginLeft: '7rem' }}> الحضور</a>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui two column grid">
            
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/timetable" style={{ fontFamily:'Tajawal',marginLeft: '7rem' }}>جدول أوقاتي</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/stat" style={{ fontFamily:'Tajawal',marginLeft: '7rem' }}>إحصائيّات</a>
                    </div>
                </div>
            </div>
        </div>       

    </div>
)

export default Teacher;
