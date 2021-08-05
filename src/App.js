import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Administration from "./pages/Administration/Administration";
import Teacher from "./pages/Teacher/Teacher";
import ClassMangement from "./pages/ClassMangement/ClassMangement";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import SubjectMangement from "./pages/SubjectMangement/SubjectMangement";
import TeacherMangement from "./pages/TeacherMangement/TeacherMangement";
import TeacherRecru from "./pages/TeacherRecru/TeacherRecru";
import TimetableMangement from "./pages/TimetableMangement/TimetableMangement";
import Toolbox from "./pages/Toolbox/Toolbox";
const App = () => {
    return (
    <div>
        <Administration/>
        <Teacher/>
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/admin" exact component={Administration} />
                    <Route path="/teacher" exact component={Teacher} />
                    <Route path="/admin/infos" exact component={PersonalInfo} />
                    <Route path="/admin/classmanagement" exact component={ClassMangement} />
                    <Route path="/admin/teachermanagemnet" exact component={TeacherMangement} />
                    <Route path="/admin/subjectmanagemnet" exact component={SubjectMangement} />
                    <Route path="/admin/teacherrecru" exact component={TeacherRecru} />
                    <Route path="/admin/timetablemanagemnet" exact component={TimetableMangement} />
                    <Route path="/admin/tools" exact component={Toolbox} />
                </Switch>
            </div>
        </Router>
    </div>
    );

};
export default App;