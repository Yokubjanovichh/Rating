import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./star-rating";
// import App from './App';

function Test({ maxRating, size, defaultRating, massadges, color }) {
  const [rated, setRated] = useState(0);

  const textStyle = {
    lineHeight: "0",
    color,
    fontFamily: "Helvetica",
    fontSize: size / 1.8,
  };
  return (
    <div>
      <StarRating setRated={setRated} maxRating={maxRating} size={size} defaultRating={defaultRating} massadges={massadges} />
      <p style={textStyle}>This movie was rated {rated} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test color="#fcc419" maxRating={5} size={50} defaultRating={2} massadges={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
  </React.StrictMode>
);
