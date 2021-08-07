import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { Navbar, nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
const Header =()=>{
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">الإدارة</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          المدرّسون
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/teacher/infos">المعلومات الشخصيّة </a></li>
            <li><a class="dropdown-item" href="/teacher/studentmangement">التصرف في التلاميذ </a></li>
            <li><a class="dropdown-item" href="/teacher/presence">الحضور</a></li>
            <li><a class="dropdown-item" href="/teacher/timetable">جدول أوقاتي</a></li>
            <li><a class="dropdown-item" href="/teacher/stat">إحصائيّات</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          الإدارة
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/admin/infos">المعلومات الشّخصيّة</a></li>
            <li><a class="dropdown-item" href="/admin/teachermanagemnet">التصرف في المدرسين</a></li>
            <li><a class="dropdown-item" href="/admin/classmanagement">التصرف في الأقسام</a></li>
            <li><a class="dropdown-item" href="/admin/subjectmanagemnet">التّصرّف في المواد</a></li>
            <li><a class="dropdown-item" href="/admin/teacherrecru">تعيين المدرّسين</a></li>
            <li><a class="dropdown-item" href="/admin/timetablemanagemnet">التّصرّف في جدول الأوقات</a></li>
            <li><a class="dropdown-item" href="/admin/tools">صندوق الأدوات</a></li>
          </ul>
        </li>
        </ul>
      <form class="d-flex">
        <a href="/pages/SignIn/SignIn" class="btn btn-outline-success" type="submit"> دخول</a>
        

      </form>
    </div>
  </div>
</nav>

  )
}
export default Header;