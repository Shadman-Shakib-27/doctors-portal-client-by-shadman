import React, { useEffect, useState } from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";
import Review from "./Review";

const Testimonials = () => {
  const customerReviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
  ];

  return (
    <section className="my-28">
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl ml-5 font-bold text-primary">Testimonial</h1>
            <h1 className="text-3xl ml-5 font-bold mt-3">
              What Our Patients Says
            </h1>
          </div>
          <div>
            <img className="w-24 lg:w-48" src={quote} alt="" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:lg:grid-cols-1 md:grid-cols-2 gap-5">
        {customerReviews.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
