import React from "react";
import '../index.css'

function Navbar(){
  return (
    <>
    <div className="container-fluid bg-light sticky-top">
    <nav class="navbar navbar-expand-lg container">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="https://www.kamkaj.pk/Content/images/kamkajV2/logo.png" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars icon1"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form class="d-flex justify-content-center i" role="search">
       <p>Why KamKaj</p>
       <p>Work with us</p>
       <i class="fa-solid fa-phone icon"></i>
      </form>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar



// import '@fortawesome/fontawesome-free/js/all.js';
// npm install --save @fortawesome/fontawesome-free
// Npm i -g create-react-app
// Npm install react-scripts --save
// npm install bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';



