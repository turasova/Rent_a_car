import { Tabs } from 'components/Tabs/Tabs';
import css from './DetailsCar.module.css';
import { useState } from 'react';
import { Form } from 'components/Form/Form';
import RatingStars from 'components/RatingStars/RatingStars';

export const DetailsCar = ({ car }) => {
  const [activeTab, setActiveTab] = useState('');

  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    adults,
    transmission,
    details,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = car;

  return (
    <>
      <div className={css.cardContainer}>
        <div>
          <p className={css.title}>{name}</p>
          <div className={css.location}>
            <p>
              {rating}({reviews.reviewer_rating} Reviews)
            </p>
            <p>{location}</p>
          </div>
          <p className={css.price}>€{price}</p>
        </div>

        <div className={css.imageContainer}>
          <img src={gallery[0]} alt={name} className={css.image} />
          <img src={gallery[1]} alt={name} className={css.image} />
          <img src={gallery[2]} alt={name} className={css.image} />
        </div>

        <p className={css.descriptionText}>{description}</p>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="902"
          height="2"
          viewBox="0 0 902 2"
          fill="none"
        >
          <path d="M0 1H902" stroke="rgba(16, 24, 40, 0.20)" />
        </svg>
        {activeTab === 'features' && (
          <div className={css.reviews_container}>
            <div className={css.info_car}>
              <ul className={css.list_feature}>
                <li className={css.listItem}>{adults} adults</li>
                <li className={css.listItem}>{engine}</li>
                <li className={css.listItem}>{transmission}</li>
                <li className={css.listItem}>{details.kitchen} kitchen</li>
                <li className={css.listItem}>{details.beds} beds</li>
                <li className={css.listItem}>{details.airConditioner} AC</li>
                <li className={css.listItem}>{details.CD} CD</li>
                <li className={css.listItem}>{details.radio} radio</li>
                <li className={css.listItem}>{details.hob} hob</li>
                <li className={css.listItem}>{details.microwave} microwave</li>
              </ul>
              <h2 className={css.title_vehicle}>Vehicle details</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="430"
                height="2"
                viewBox="0 0 430 2"
                fill="none"
              >
                <path d="M0 1H430" stroke="rgba(16, 24, 40, 0.20)" />
              </svg>
              <div className={css.vehicle_container}>
                <div>
                  <ul className={css.list_vehicle}>
                    <li className={css.listItem_details}>Form</li>
                    <li className={css.listItem_details}>Length</li>
                    <li className={css.listItem_details}>Width</li>
                    <li className={css.listItem_details}>Height</li>
                    <li className={css.listItem_details}>Tank</li>
                    <li className={css.listItem_details}>Consumption</li>
                  </ul>
                </div>
                <div>
                  <ul className={css.list_vehicle}>
                    <li className={css.listItem_details}>{form} </li>
                    <li className={css.listItem_details}>{length}</li>
                    <li className={css.listItem_details}>{width}</li>
                    <li className={css.listItem_details}>{height} </li>
                    <li className={css.listItem_details}>{tank} </li>
                    <li className={css.listItem_details}>{consumption}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className={css.reviews_container}>
            <div>
              <ul className={css.list_reviewers}>
                {reviews.map(
                  ({ _id, reviewer_name, reviewer_rating, comment }) => (
                    <li key={_id}>
                      <p className={css.name}>{reviewer_name}</p>
                      <div className={css.stars_container}>
                        <RatingStars rating={reviewer_rating} />
                      </div>
                      <p className={css.comment}>{comment}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <Form />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

//  className={({ isActive }) =>
//                     `${css.icons} ${isActive ? css.active : ''}`
//                   }
