import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from "./components/Header/Header";

import Administration from "./pages/Administration/Administration";
import ClassMangement from "./pages/Administration/ClassMangement/ClassMangement";
import PersonalInfoA from "./pages/Administration/PersonalInfoA/PersonalInfoA";
import SubjectMangement from "./pages/Administration/SubjectMangement/SubjectMangement";
import TeacherMangement from "./pages/Administration/TeacherMangement/TeacherMangement";
import TeacherRecru from "./pages/Administration/TeacherRecru/TeacherRecru";
import TimetableMangement from "./pages/Administration/TimetableMangement/TimetableMangement";
import Toolbox from "./pages/Administration/Toolbox/Toolbox";

import Teacher from "./pages/Teacher/Teacher";
import PersonalInfoT from './pages/Teacher/PersonalInfos/PersonalInfo';
import Presence from './pages/Teacher/Presence/Presence';
import Statistics from './pages/Teacher/Statistics/Statistics';
import StudentMangement from './pages/Teacher/StudentMangement/StudentMangement';
import Timetable from './pages/Teacher/Timetable/Timetable';
import LoginAdmin from "./pages/Login/LoginAdmin";
import LoginTeacher from "./pages/Login/LoginTeacher";
//import Sign from "./pages/Login/Sign";

const App = () => {
    return (
    <div>
        <Router>
            <div>
            <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/admin" exact component={Administration} />
                    <Route path="/admin/infos" exact component={PersonalInfoA} />
                    <Route path="/admin/classmanagement" exact component={ClassMangement} />
                    <Route path="/admin/teachermanagemnet" exact component={TeacherMangement} />
                    <Route path="/admin/subjectmanagemnet" exact component={SubjectMangement} />
                    <Route path="/admin/teacherrecru" exact component={TeacherRecru} />
                    <Route path="/admin/timetablemanagemnet" exact component={TimetableMangement} />
                    <Route path="/admin/tools" exact component={Toolbox} />

                    <Route path="/teacher" exact component={Teacher} />
                    <Route path="/teacher/infos" exact component={PersonalInfoT} />
                    <Route path="/teacher/presence" exact component={Presence} />
                    <Route path="/teacher/stat" exact component={Statistics} />
                    <Route path="/teacher/studentmangement" exact component={StudentMangement} />
                    <Route path="/teacher/timetable" exact component={Timetable} />

                    <Route path="/Login/LoginAdmin" exact component={LoginAdmin} />
                    <Route path="/Login/LoginTeacher" exact component={LoginTeacher} />
                </Switch>
            </div>
        </Router>
    </div>
    );

};
export default App;