import { useState } from 'react';
import css from './CarItem.module.css';
import { ButtonCar } from 'components/Button/ButtonCar';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'components/Modal/modal';
//import { selectFavorites } from 'store/selectors';
import svg from '../../images/symbol-defs.svg';
//import { addFavorites, deleteFavorites } from 'store/carSlice';
import { selectFavorites } from 'store/selectors';
import { addFavoriteCar, deleteFavoriteCar } from 'store/thunks';

export const CarItem = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modal, setModal] = useState(null);
  const favorites = useSelector(selectFavorites);

  //const [favoriteCars, setFavoriteCars] = useState([]);
  // const cars = useSelector(selectCars);
  //const filteredCars = useSelector(selectFilteredCars);

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
  } = car;

  // const isFavorite = favorites?.some(favCar => favCar.id === _id);

  // const handleToggleFavorite = () => {
  //   return isFavorite
  //     ? dispatch(addFavoriteCar(car))
  //     : dispatch(deleteFavoriteCar(car));
  // };

  const onOpenModal = modalData => {
    setIsShowModal(true);
    setModal(modalData);
  };

  const onCloseModal = () => {
    setIsShowModal(false);
    setModal(null);
  };

  const addFavorite = () => {
    if (favorites?.find(car => car._id === _id)) {
      let newFavorites = favorites.filter(car => car._id !== _id);
      dispatch(deleteFavoriteCar(newFavorites));

      return;
    }
    dispatch(addFavoriteCar({ _id }));
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
            <p className={css.text_location}>
              <svg width={16} height={16} className={css.icons}>
                <use xlinkHref={`${svg}#icon-location`}></use>
              </svg>
              {location}
            </p>
          </div>

          <p className={css.descriptionText}>{description}</p>
          <ul key={_id} className={css.list}>
            <li className={css.listItem}>
              <svg width={20} height={20}>
                <use xlinkHref={`${svg}#icon-people`}></use>
              </svg>
              {adults}
              adults
            </li>
            <li className={css.listItem}>
              <svg width={20} height={20}>
                <use xlinkHref={`${svg}#icon-bak`}></use>
              </svg>
              {engine}
            </li>
            <li className={css.listItem}>
              <svg width={20} height={20} className={css.icons}>
                <use xlinkHref={`${svg}#icon-transmission`}></use>
              </svg>
              {transmission}
            </li>
            <li className={css.listItem}>
              <svg width={20} height={20} className={css.icons}>
                <use xlinkHref={`${svg}#icon-eat`}></use>
              </svg>
              {details.kitchen} kitchen
            </li>
            <li className={css.listItem}>
              <svg width={20} height={20} className={css.icons}>
                <use xlinkHref={`${svg}#icon-bag`}></use>
              </svg>
              {details.beds} beds
            </li>
            <li className={css.listItem}>
              <svg width={20} height={20} className={css.icons}>
                <use xlinkHref={`${svg}#icon-freezer`}></use>
              </svg>
              {details.freezer} freezer
            </li>
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
