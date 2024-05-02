import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties"; // Import mock data

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === parseInt(id));

  return (
    <div className="property-details-page">
      <h2>{property.name}</h2>
      <p>{property.location}</p>
      <p>${property.price}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Description: {property.description}</p>
      <img src={property.imageUrl} alt={property.name} />
    </div>
  );
};

export default PropertyDetailsPage;
