import { Loader } from 'components/Loader/loader';
import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'store/selectors';
import { getCarsThunk } from 'store/thunks';
import css from './CarsPage.module.css';
import { getIsLoading } from 'store/carSlice';
import { LocationFilter } from 'components/Filter/Filter';

const CarsPage = () => {
  const [page, setPage] = useState(1);
  const [setFilteredLocation] = useState('');
  const [favoriteCars, setFavoriteCars] = useState([]);

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const carsIsLoading = useSelector(getIsLoading);

  const handleFavorite = car => {
    setFavoriteCars([...favoriteCars, car]);
  };
  const limit = 4;

  console.log(page + 1);

  useEffect(() => {
    if (page > 0) dispatch(getCarsThunk({ page, limit }));
  }, [dispatch, limit, page]);

  const onLoadMore = page => {
    setPage(page + 1);
  };

  // useEffect(() => {
  //   dispatch(getLocationThunk(filteredLocation));
  // }, [dispatch, filteredLocation]);

  const handleFilter = location => {
    setFilteredLocation(location);
  };

  return (
    <div className={css.home_container}>
      {carsIsLoading && <Loader />}
      <div className={css.search_container}>
        <LocationFilter onFilter={handleFilter} />
      </div>
      <div className={css.car_container}>
        <CarsList cars={cars} onFavorite={handleFavorite} />
        <Button onClick={onLoadMore} />
      </div>
    </div>
  );
};
export default CarsPage;
