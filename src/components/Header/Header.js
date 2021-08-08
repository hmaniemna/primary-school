import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { Navbar, nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
const Header =()=>{
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" >
    <a class="navbar-brand" href="/">المدرسة الإبتدائيّة</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex">
        <a href="/Login/LoginAdmin" class="btn btn-outline-success" type="submit"> دخول الإداريين</a>
        <a href="/Login/LoginTeacher" class="btn btn-outline-success" type="submit"> دخول المعلمون</a>
      </form>
    </div>
  </div>
</nav>

  )
}
export default Header;