import React from "react";
import "./DestinationsCarousel.scss";
const images = [
  {
    name: "Las Vegas",
    imgSrc:
      "https://images.unsplash.com/photo-1470076892663-af684e5e15af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzJTIwdmVnYXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Cancun",
    imgSrc:
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuY3VufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Los Angeles",
    imgSrc:
      "https://images.unsplash.com/photo-1616895727759-dd84a2690433?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bGFzJTIwYW5nZWxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Phoenix",
    imgSrc:
      "https://images.unsplash.com/photo-1613546167482-b3280d75f796?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGhlb25peCUyMGF6fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Zion National Park",
    imgSrc:
      "https://images.unsplash.com/photo-1601778845862-cdac8c583475?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8emlvbiUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
const DestinationsCarousel = () => {
  return (
    <>
      <p
        style={{
          padding: "10px",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#001959",
        }}
      >
        Find Your Next Destination
      </p>
      <div className="carousel-wrapper">
        {images.map((image) => (
          <div className="card-carousel">
            <div className="dark"></div>
            <p>{image.name}</p>
            <img src={image.imgSrc} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DestinationsCarousel;
