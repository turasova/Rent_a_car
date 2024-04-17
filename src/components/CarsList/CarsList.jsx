import { useEffect } from 'react';
import css from './CarsList.module.css';
import { useDispatch } from 'react-redux';
//import { getFilter } from 'store/filterSlice';

//import { selectCars } from 'store/selectors';
import { CarItem } from 'components/CarItem/CarItem';
import { getCarsThunk } from 'store/thunks';

export const CarsList = ({ cars }) => {
  // const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  // const cars = useSelector(selectCars);
  //const filterCars = useSelector(selectFavorites);

  // const cars = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(lowerFilter)
  // );

  // const delContact = contactId => {
  //   dispatch(deleteContactThunk(contactId));
  // };

  return (
    <ul className={css.listCars}>
      {cars.map(car => (
        <li className={css.carItem} key={car._id}>
          <CarItem car={car} />
        </li>
      ))}
    </ul>
  );
};
