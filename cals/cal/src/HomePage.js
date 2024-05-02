import React from "react";
import properties from "../data/properties"; // Import mock data
import PropertyCard from "./PropertyCard";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Available Properties</h1>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
