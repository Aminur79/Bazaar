import React from "react";
import "../css/Homepage.css";

// Example image URLs array
const carouselImages = [
  "https://images.ctfassets.net/9q8du028z7sn/5zwIXeZwSNGR6yLbZPQMGd/32d11f02f27dbb694cd22236616461dd/MY_W_1920x725.jpeg",
  "https://images.ctfassets.net/9q8du028z7sn/3UKwkC8BwKkARO6Xd0ZxM/482398d2252621be2f7c2aa56e2fa95d/newarrival20vc-MY-Desktop.jpg",
  "https://images.ctfassets.net/9q8du028z7sn/5zwIXeZwSNGR6yLbZPQMGd/32d11f02f27dbb694cd22236616461dd/MY_W_1920x725.jpeg"
];

const Homepage = () => {
  return (
    <div>
      <div id="promotionCarousel" className="carousel slide">
        <div className="carousel-inner">
          {carouselImages.map((url, index) => (
            <div
              className={`carousel-item${index === 0 ? " active" : ""}`}
              key={index}
            >
              <img
                src={url}
                className="d-block w-100"
                alt={`Promotion ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#promotionCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#promotionCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Sections Men */}
      
      <div id="men" className="container mt-5 pt-5 pb-5 text-center">
        <h2>Men's Section</h2>
        <p>Content for the Men category.</p>
      </div>
    

      {/* Sections Women */}
      
      <div id="women" className="container mt-5 pt-5 pb-5 text-center">
        <h2>Women's Section</h2>
        <p>Content for the Women category.</p>
      </div>
    </div>
  
  );
};

export default Homepage;
