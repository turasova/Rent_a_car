import css from './CarsList.module.css';
import { CarItem } from 'components/CarItem/CarItem';
import { getFilterThunk } from 'store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllCars, selectFilteredCars } from 'store/selectors';

export const CarsList = ({
  location,
  filterCars,
  cars,
  onOpenModal,
  onCloseModal,
}) => {
  //const [favoriteCars, setFavoriteCars] = useState([]);
  const filteredCars = useSelector(selectFilteredCars);
  const allCars = useSelector(selectAllCars);
  //const favorites = useSelector(selectFavorites);

  let filteredByLocation;

  if (location !== '') {
    if (filteredCars.length > 0) {
      filteredByLocation = filteredCars.filter(
        car => car.location === location
      );
    } else {
      filteredByLocation = allCars.filter(car => car.location === location);
    }
  }

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCarsThunk());
  // }, [dispatch]);

  useEffect(() => {
    if (filterCars !== '') {
      dispatch(getFilterThunk({ filter: filterCars }));
    } else {
      dispatch(getFilterThunk({ filter: [] }));
    }
  }, [dispatch, filterCars]);

  return (
    <ul className={css.listCars}>
      {filteredCars.length > 0 && filterCars !== ''
        ? location === ''
          ? filteredCars.map((car, index) => (
              <li className={css.carItem} key={car._id}>
                <CarItem car={car} key={`${car.id}-${index}`} />
              </li>
            ))
          : filteredByLocation.map((car, index) => (
              <CarItem car={car} key={`${car.id}-${index}`} />
            ))
        : location === ''
        ? cars.map((car, index) => (
            <li className={css.carItem} key={car._id}>
              <CarItem
                onOpenModal={onOpenModal}
                onCloseModal={onCloseModal}
                car={car}
                key={`${car.id}-${index}`}
              />
            </li>
          ))
        : filteredByLocation.map((car, index) => (
            <li className={css.carItem} key={car._id}>
              <CarItem car={car} key={`${car.id}-${index}`} />
            </li>
          ))}
    </ul>

    // <ul className={css.listCars}>
    //   {cars.map(car => (
    //     <li className={css.carItem} key={car._id}>
    //       <CarItem
    //         car={car}
    //         onOpenModal={onOpenModal}
    //         onCloseModal={onCloseModal}
    //       />
    //     </li>
    //   ))}
    // </ul>
  );
};
