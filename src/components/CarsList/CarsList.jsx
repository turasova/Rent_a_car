import { useEffect, useState } from 'react';
import css from './CarsList.module.css';
import { useDispatch } from 'react-redux';
import { CarItem } from 'components/CarItem/CarItem';
import { getCarsThunk } from 'store/thunks';

export const CarsList = ({ cars, onOpenModal, onCloseModal }) => {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  const addFavorite = car => {
    const existingCar = cars.find(favCar => favCar._id === car._id);
    if (!existingCar) {
      setFavoriteCars([...favoriteCars, car]);
    } else {
      console.log('Car is already in favorites!');
    }
  };

  return (
    <ul className={css.listCars}>
      {cars.map(car => (
        <li className={css.carItem} key={car._id}>
          <CarItem
            car={car}
            onFavorite={addFavorite}
            onOpenModal={onOpenModal}
            onCloseModal={onCloseModal}
          />
        </li>
      ))}
    </ul>
  );
};
