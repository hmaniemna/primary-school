import React from 'react';
import "./Home.css";
import Image1 from "./slide-1.jpg";
import Image2 from "./slide-2.jpg";
import Image3 from "./slide-3.jpg";
const Home=()=>{
    return(
      <div id= "myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="overlay-image" style={{backgroundImage:'url(' + Image1 + ')'}}></div>
              <div class="container">
                <h1>مرحبا بك في الصفحة الخاصة بالإدارة لمدرستنا الإبتدائيّة</h1>
              </div>
            </div>
            <div class="carousel-item ">
            <div class="overlay-image" style={{backgroundImage:'url(' + Image2 + ')'}}></div>
              <div class="container">
                <h1>إذا كنت إداري </h1>
                <a href="./Administration" class="btn btn-lg btn-primary">
                أنقر هنا
                </a>
              </div>
            </div>
            <div class="carousel-item">
            <div class="overlay-image" style={{backgroundImage:'url(' + Image3 + ')'}}></div>
              <div class="container">
                <h1>إذا كنت مدرس</h1>
                <a href="./Teacher" class="btn btn-lg btn-primary">
                أنقر هنا
                </a>
              </div>
            </div>
          </div>
          <a href="#myCarousel" class="carousel-control-prev" role="button" data-slide="prev">
            <span class="sr-only">Previous</span>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a href="#myCarousel" class="carousel-control-next" role="button" data-slide="next">
            <span class="sr-only">Previous</span>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
      </div>

    
    )
         
}

export default Home;