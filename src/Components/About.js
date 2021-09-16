import React from 'react';

export default function About() {
  return (
    <section id="about" class="about-section pt-150">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-img wow fadeInUp" data-wow-delay=".5s">
              <img
                src="https://static.wixstatic.com/media/dc730c_44f12d631b4e4859b95c0f4b001a0804~mv2.png/v1/fill/w_560,h_604,al_c,lg_1,q_85/dc730c_44f12d631b4e4859b95c0f4b001a0804~mv2.webp"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  About Us
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  From my kitchen to every city
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".6s">
                  We offer everyone the opportunity to order my handmade cookies
                  online, to be delivered right to your front door in 48 hours
                  or less. It’s no wonder that Cookies Planet has been known as
                  “More Than Just a Cookie….”
                </p>
              </div>
              <div
                class="rating-meta d-flex align-items-center wow fadeInUp"
                data-wow-delay=".65s"
              >
                <h5>Rating 4.8</h5>
                <div class="rating">
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                  <i class="lni lni-star-filled"></i>
                </div>
              </div>

              <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
                <div class="single-counter">
                  <h3 id="secondo1" class="countup" cup-end="1" cup-append="M+">
                    1056
                  </h3>
                  <h5>Order</h5>
                </div>
                <div class="single-counter position-relative">
                  <h3
                    id="secondo2"
                    class="countup"
                    cup-end="234"
                    cup-append="K+"
                  >
                    434{' '}
                  </h3>
                  <h5>Happy User</h5>
                </div>
                <div class="single-counter">
                  <h3
                    id="secondo3"
                    class="countup"
                    cup-end="34"
                    cup-append="K+"
                  >
                    34
                  </h3>
                  <h5>Reviews</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
