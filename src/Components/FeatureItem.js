import React from 'react';
export default function FeatureItem(props) {
  const feature = props.feature;
  return (
    <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".2s">
        <center>
          <div class="icon">
            <img src={feature.image} alt="" />
          </div>
        </center>

        <div class="content">
          <h3>{feature.name}</h3>
        </div>
      </div>
    </div>
  );
}
