import React from 'react';
import { Button} from 'semantic-ui-react'

const Teacher = () => (

    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/infos" style={{ marginLeft: '5rem' }}> المعلومات الشّخصيّة</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/studentmangement" style={{ marginLeft: '5rem' }}>التصرف في التلاميذ</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/presence" style={{ marginLeft: '7rem' }}> الحضور</a>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui two column grid">
            
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/timetable" style={{ marginLeft: '7rem' }}>جدول أوقاتي</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/teacher/stat" style={{ marginLeft: '7rem' }}>إحصائيّات</a>
                    </div>
                </div>
            </div>
        </div>       

    </div>
)

export default Teacher;
