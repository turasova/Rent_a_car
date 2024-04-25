import React from 'react';
import svg from '../../images/symbol-defs.svg';

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div className="rating-stars">
      {stars.map((_, index) => (
        <svg width={24} height={24} key={index}>
          <use xlinkHref={`${svg}#icon-star`}></use>
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;
