import React from "react";
import featuresData from "../featuresData";
import { useParams, Navigate } from "react-router-dom";
export default function FeatureDetails() {
  const { featureSlug } = useParams();
  const feature = featuresData.find((f) => f.slug === featureSlug);

  if (!feature) {
    return <Navigate to="/" />;
  }
  return (
    <div className="single-service wow fadeInUp" data-wow-delay=".4s">
      <center>
        <div className="icon">
          <img
            src={feature.image}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </center>

      <div className="content">
        <h3>{feature.name}</h3>
        <p>{feature.details}</p>
      </div>
    </div>
  );
}
