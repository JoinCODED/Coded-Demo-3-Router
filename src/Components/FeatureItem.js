import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureItem(props) {
  const feature = props.feature;
  return (
    <div class="col-lg-4 col-md-6">
      <Link to={`/features/${feature.slug}`}>
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
      </Link>
    </div>
  );
}
