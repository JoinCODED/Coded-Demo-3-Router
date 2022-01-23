import React from "react";
import cookieImage from "../assets/img/cookie planet.png";
export default function Home() {
  return (
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="hero-content">
              <h1 class="wow fadeInUp" data-wow-delay=".2s">
                Cookies planet <span>Delivery Service</span>{" "}
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".4s">
                Receive your favorite handmade cookies in our 2 days fast
                delivery
              </p>
              <a
                href="#i"
                rel="nofollow"
                class="main-btn btn-hover wow fadeInUp"
                data-wow-delay=".6s"
              >
                Order Now
              </a>
            </div>
          </div>
          <div class="d-none d-md-block col-md-4">
            {/* <div class="  wow fadeInUp" data-wow-delay=".5s"> */}
            <img className="img img-fluid " src={cookieImage} alt="" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
