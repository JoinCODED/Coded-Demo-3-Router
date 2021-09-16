import React from 'react';
import FeatureItem from './FeatureItem';

export default function Features(props) {
  const featuresList = props.features.map((feature) => (
    <FeatureItem feature={feature} />
  ));
  return (
    <section id="features" class="service-section pt-150">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="section-title text-center mb-70">
              <span class="wow fadeInUp" data-wow-delay=".2s">
                Features
              </span>
              <h1 class="wow fadeInUp" data-wow-delay=".4s">
                Cookies That You Need
              </h1>
            </div>
          </div>
        </div>
        <div class="row">{featuresList}</div>
      </div>
    </section>
  );
}
