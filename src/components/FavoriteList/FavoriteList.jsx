import { FavoriteCar } from 'components/FavoriteCar/FavoriteCar';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addFavoriteCar } from 'store/thunks';

export const FavoriteList = ({ _id, onOpenModal, onCloseModal }) => {
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addFavoriteCar({ _id }));
  }, [dispatch, _id]);

  return (
    <div>
      <ul className="{css.listCars}">
        {favorites.map(car => (
          <li className="" key={car._id}>
            <FavoriteCar
              favorite={car}
              onOpenModal={onOpenModal}
              onCloseModal={onCloseModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
