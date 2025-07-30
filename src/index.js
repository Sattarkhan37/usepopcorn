import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

// import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={7} onSetRating={setMovieRating} />
//       <p>{movieRating} rated</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating size={22} color="red" classNmae="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
