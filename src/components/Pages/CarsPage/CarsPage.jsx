import { Loader } from 'components/Loader/loader';
import { Button } from 'components/Button/Button';
import { CarsList } from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars } from 'store/selectors';
import css from './CarsPage.module.css';
import { getIsLoading } from 'store/carSlice';
import { LocationFilter } from 'components/Filter/Filter';
import { getCarsThunk } from 'store/thunks';
import { useRef } from 'react';

const CarsPage = () => {
  const [page, setPage] = useState(0);
  const [filterCars, setFilter] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const carsIsLoading = useSelector(getIsLoading);

  //const [setFilteredLocation] = useState('');
  //const [favoriteCars, setFavoriteCars] = useState([]);

  // const parseAddress = address => {
  //   const arr = address.split(', ');
  //   const city = arr[1];
  //   const country = arr[arr.length - 1];
  //   return { city, country };
  // };

  // const handleFavorite = car => {
  //   setFavoriteCars([...favoriteCars, car]);
  // };

  const limit = 4;
  const prevPage = useRef(0);

  useEffect(() => {
    if (page > 0) dispatch(getCarsThunk({ page, limit }));
    prevPage.current = page;
  }, [dispatch, limit, page]);

  if (cars.length < 1 && page === 0) {
    setPage(1);
  }
  const onLoadMore = () => {
    setPage(page + 1);
  };

  // useEffect(() => {
  //   dispatch(getLocationThunk(filteredLocation));
  // }, [dispatch, filteredLocation]);

  // const handleFilter = location => {
  //   setFilteredLocation(location);
  // };

  // const getCarData = car => {
  //   const { forms } = car;
  //   return { forms };
  // };
  // const getLocationData = (address, car) => {
  //   const { location } = parseAddress(address);
  //   const { rentalCompany } = car;
  //   return [location, rentalCompany];
  // };

  // const carData = getCarData(car);
  // const locationData = getLocationData(location, car);

  return (
    <div className={css.home_container}>
      {carsIsLoading && <Loader />}
      <div className={css.search_container}>
        <LocationFilter setFilter={setFilter} setLocation={setLocation} />
      </div>
      <div className={css.car_container}>
        <CarsList cars={cars} filterCars={filterCars} location={location} />
        <Button onClick={onLoadMore} />
      </div>
    </div>
  );
};
export default CarsPage;
