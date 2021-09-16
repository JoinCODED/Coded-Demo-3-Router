import React from 'react';

export default function Home() {
  return (
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="wow fadeInUp" data-wow-delay=".2s">
                Cookies planet <span>Delivery Service</span>{' '}
              </h1>
              <p class="wow fadeInUp" data-wow-delay=".4s">
                Receive your favorite handmade cookies in our 2 days fast
                delivery
              </p>
              <a
                href=""
                rel="nofollow"
                class="main-btn btn-hover wow fadeInUp"
                data-wow-delay=".6s"
              >
                Order Now
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
              <img
                src="https://i.pinimg.com/originals/dc/c8/1a/dcc81ae124a78573b1c8bae1586d4efe.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
