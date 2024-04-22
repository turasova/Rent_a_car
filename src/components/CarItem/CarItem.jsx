import { useState } from 'react';
import css from './CarItem.module.css';
import { ButtonCar } from 'components/Button/ButtonCar';
// import { useSelector } from 'react-redux';
import { Modal } from 'components/Modal/modal';
// import { selectFavorites } from 'store/selectors';
//import { addFavoriteCar, deleteFavoriteCar } from 'store/thunks';
import svg from '../../images/symbol-defs.svg';
// import { selectFavorites } from 'store/selectors';

export const CarItem = ({ car, addFavorite }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modal, setModal] = useState(null);

  // const cars = useSelector(selectCars);
  //const filteredCars = useSelector(selectFilteredCars);
  // const favorites = useSelector(selectFavorites);
  // const [favoriteCars, setFavoriteCars] = useState([]);

  // const dispatch = useDispatch();

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

  const onOpenModal = modalData => {
    setIsShowModal(true);
    setModal(modalData);
  };

  const onCloseModal = () => {
    setIsShowModal(false);
    setModal(null);
  };

  // const addFavorite = ({ id }) => {
  //   if (favorites.find(car => car._id === id)) {
  //     let newFavorites = favorites.filter(item => item._id !== id);
  //     dispatch(deleteFavoriteCar(newFavorites));
  //     return;
  //   }
  //   dispatch(addFavoriteCar({ _id }));
  // };

  return (
    <>
      <div className={css.cardContainer}>
        <div className={css.imageContainer}>
          <img src={gallery[0]} alt={name} className={css.image} />
        </div>
        <div>
          <div className={css.title}>
            <p>{name}</p>
            <div className={css.favorite_container}>
              <p className={css.price}>€{price}</p>
              <button
                className={css.button_favorite}
                type="button"
                onClick={addFavorite}
                id={_id}
              >
                <svg width={24} height={24} className={css.heart}>
                  <use xlinkHref={`${svg}#icon-heart`}></use>
                </svg>
              </button>
            </div>
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
            <li className={css.listItem}>{details.airConditioner} AC</li>
          </ul>
          <ButtonCar onOpenModal={onOpenModal} />
          {isShowModal && (
            <Modal
              car={car}
              modal={modal}
              onCloseModal={onCloseModal}
              onOpenModal={onOpenModal}
            />
          )}
        </div>
      </div>
    </>
  );
};
