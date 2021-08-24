import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import {nav} from "react-bootstrap"
const Header =()=>{
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid" >
    <a class="navbar-brand" href="/" >المدرسة الإبتدائيّة</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" className="title">
      <button type="button" class="btn btn-light" ><a href="/Login/LoginAdmin"> دخول الإداريين</a></button>
      <button type="button" class="btn btn-light" ><a href="/Login/LoginTeacher"> دخول المعلمون</a></button> 
    </div>
  </div>
</nav>

  )
}
export default Header;
