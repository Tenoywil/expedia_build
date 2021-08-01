import React from "react";
import "./InfoCon.scss";
const info = [
  {
    icon:
      "https://t4.ftcdn.net/jpg/01/76/65/47/240_F_176654774_oA7px01AN5ff7t62KyaeNX00twVh4W6j.jpg",
    text: "Change or cancel a trip",
  },
  {
    icon:
      "https://www.flaticon.com/svg/vstatic/svg/1831/1831655.svg?token=exp=1618028411~hmac=826db731e053b4b554d51bcec8f8958d",
    text: "Use a credit or a coupon",
  },
  {
    icon:
      "https://www.flaticon.com/svg/vstatic/svg/2856/2856969.svg?token=exp=1618028504~hmac=d1d4b728cf0d60c1db6da09d519b0cd3",
    text: "Track your refund",
  },
];
const InfoCon = () => {
  return (
    <div className="container">
      <h1 className="header">Here to help keep you on the move</h1>
      {info.map((inf) => (
        <div className="card-container">
          <img src={inf.icon} />
          <p>{inf.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCon;
