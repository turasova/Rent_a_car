import { FavoriteCar } from 'components/FavoriteCar/FavoriteCar';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { addFavoriteCar } from 'store/thunks';
//import { addFavorites } from 'store/carSlice';

export const FavoriteList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <ul className="{css.listCars}">
        {favorites &&
          favorites.map(({ favoriteCar }) => (
            <li className="" key={favoriteCar._id}>
              <FavoriteCar favoriteCar={favoriteCar} id={favoriteCar._id} />
            </li>
          ))}
      </ul>
    </div>
  );
};
// cars.map((car, index) => (
//             <li className={css.carItem} key={car._id}>
//               <CarItem
//                 onOpenModal={onOpenModal}
//                 onCloseModal={onCloseModal}
//                 car={car}
//                 key={`${car.id}-${index}`}
//               />
//             </li>
