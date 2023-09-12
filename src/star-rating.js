import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import "./main.css";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const starContainerStyles = {
  display: "flex",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  massadges: PropTypes.array,
  defaultRating: PropTypes.number,
  setRated: PropTypes.func,
};

export default function StarRating({ maxRating, color = "#fcc419", size, massadges = [], defaultRating = 0, setRated }) {
  const [tempRating, setTempRating] = useState(0);
  const [rating, setRating] = useState(defaultRating);
  setRated(rating);

  const textStyle = {
    lineHeight: "0",
    color,
    fontFamily: "Helvetica",
    fontSize: size / 1.8,
  };

  function handleRating(rating) {
    setRating(rating);
    setRated(rating);
  }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyles}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} full={tempRating ? tempRating >= i + 1 : rating >= i + 1} onRate={() => handleRating(i + 1)} onHoverIn={() => setTempRating(i + 1)} onHoverOut={() => setTempRating(0)} color={color} size={size} />
        ))}
      </div>
      <p style={textStyle}>{maxRating === massadges.length ? (tempRating ? massadges[tempRating - 1] : massadges[rating - 1]) : tempRating || rating || ""}</p>
    </div>
  );
}

function Star({ full, onRate, onHoverOut, onHoverIn, color, size }) {
  return (
    <span role="button" onClick={onRate} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? (
        <svg width={size} height={size} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ) : (
        <svg width={size} height={size} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
          <path stroke={color} d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      )}
    </span>
  );
}
