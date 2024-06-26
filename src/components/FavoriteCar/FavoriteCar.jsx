import { useState } from 'react';
import css from './FavoriteCar.module.css';
import { ButtonCar } from 'components/Button/ButtonCar';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'components/Modal/modal';
import { selectFavorites } from 'store/selectors';
import { deleteFavoriteCar } from 'store/thunks';
import svg from '../../images/symbol-defs.svg';
//import { deleteFavorites } from 'store/carSlice';

export const FavoriteCar = ({ favoriteCar }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modal, setModal] = useState(null);
  //const isLoading = useSelector(selectIsLoading);
  // const cars = useSelector(selectCars);
  //const filteredCars = useSelector(selectFilteredCars);
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();

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
  } = favoriteCar;

  const onOpenModal = modalData => {
    setIsShowModal(true);
    setModal(modalData);
  };

  const onCloseModal = () => {
    setIsShowModal(false);
    setModal(null);
  };

  const deleteFavorite = () => {
    if (favorites.find(car => car._id === _id)) {
      let newFavorites = favorites.filter(item => item._id !== _id);
      dispatch(deleteFavoriteCar(newFavorites));
    }
  };

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
                onClick={deleteFavorite}
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
              favoriteCar={favoriteCar}
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
