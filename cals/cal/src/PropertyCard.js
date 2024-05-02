import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.location}</p>
      <p>${property.price}</p>
    </div>
  );
};

export default PropertyCard;
