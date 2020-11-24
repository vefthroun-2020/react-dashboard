import React, { useState, useEffect } from "react";

import "./ImageOfTheDay.css";

const apiURL =
  "https://api.nasa.gov/planetary/apod?api_key=0WdXzzINZ2ZWe0j9YP16QWexfCMvRALKF39yf89y";

export default function ImageOfTheDay() {
  const [imageData, setImageData] = useState();

  useEffect(() => {
    fetch(apiURL)
      .then((r) => r.json())
      .then((data) => setImageData(data));
  }, []);

  return (
    <div className="ImageOfTheDay">
      {imageData && (
        <div>
          <img src={imageData.hdurl} />
          <p>{imageData.explanation.substr(0, 30)}...</p>
        </div>
      )}
    </div>
  );
}
