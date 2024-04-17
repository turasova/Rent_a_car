import css from './CarItem.module.css';

export const CarItem = ({ car }) => {
  const {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = car;

  return (
    <>
      <div className={css.cardContainer}>
        <div className={css.imageContainer}>
          <img src={gallery[0]} alt={name} className={css.image} />
        </div>
        <div>
          <div className={css.title}>
            <p>{name}</p>
            <p className={css.pri}>€{price}</p>
          </div>
          <div className={css.location}>
            <p>
              {rating}({reviews.reviewer_rating} Reviews)
            </p>
            <p>{location}</p>
          </div>

          <p className={css.descriptionText}>{description}</p>
          <ul key={_id} className={css.list}>
            <li className={css.listItem}>{adults} adults</li>
            <li className={css.listItem}>{engine}</li>
            <li className={css.listItem}>{transmission}</li>
            <li className={css.listItem}>{details.kitchen} kitchen</li>
            <li className={css.listItem}>{details.beds} beds</li>
            <li className={css.listItem}>{details.freezer} AC</li>
          </ul>
        </div>
      </div>
    </>
  );
};
