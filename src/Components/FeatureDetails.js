import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
export default function FeatureDetails(props) {
  const featureSlug = useParams().featureSlug;
  const feature = props.features.find(
    (feature) => feature.slug === featureSlug
  );
  if (!feature) return <Navigate to="/feature" />;
  return (
    <div class="single-service wow fadeInUp" data-wow-delay=".4s">
      <center>
        <div class="icon">
          <img
            style={{ width: '400px', height: '400px' }}
            src={feature.image}
            alt=""
          />
        </div>
      </center>

      <div class="content">
        <h3>{feature.name}</h3>
        <p>{feature.details}</p>
      </div>
    </div>
  );
}
