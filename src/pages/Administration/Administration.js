import React from 'react';

const Administration = () => (
    <div>
        <br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui fluid card">
                    <div class="content">
                        <a class="header" href="/admin/infos" style={{ marginLeft: '8rem' }}> المعلومات الشّخصيّة</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui fluid card">
                    <div class="content">
                        <a class="header" href="/admin/teachermanagemnet" style={{ marginLeft: '8rem' }}>التصرف في المدرسين</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui fluid card">
                    <div class="content">
                        <a class="header" href="/admin/classmanagement" style={{ marginLeft: '8rem' }}>التصرف في الأقسام</a>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/> <br/><br/><br/>
        <div class =" ui one column grid">
            <div class="column">
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content" >
                        <a class="header" href="/admin/subjectmanagemnet" style={{ marginLeft: '6rem' }}>التّصرّف في المواد</a>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui fluid card">
                    <div class="content">
                        <a class="header" href="/admin/teacherrecru" style={{ marginLeft: '8rem' }}>تعيين المدرّسين</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui fluid card">
                    <div class="content">
                        <a class="header" href="/admin/teachermanagemnet" style={{ marginLeft: '8rem' }}>التّصرّف في جدول الأوقات </a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui fluid card">
                    <div class="content">
                        <a class="header" href="/admin/tools" style={{ marginLeft: '9rem' }}>صندوق الأدوات</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


)
export default Administration;