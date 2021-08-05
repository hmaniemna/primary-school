import React from 'react';
import "./Home.css";
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
              <div class="container">
                <h1>First Slide</h1>
                <p>anything we wanna talk about here</p>
                <a href="#" class="btn btn-lg btn-primary">
                  learn more
                </a>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="container">
                <h1>Second Slide</h1>
                <p>anything we wanna talk about here</p>
                <a href="#" class="btn btn-lg btn-primary">
                  learn more
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <h1>Third Slide</h1>
                <p>anything we wanna talk about here</p>
                <a href="#" class="btn btn-lg btn-primary">
                  learn more
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