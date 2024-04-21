import { useEffect } from 'react';
import css from './CarsList.module.css';
import { useDispatch } from 'react-redux';
import { CarItem } from 'components/CarItem/CarItem';
import { getCarsThunk } from 'store/thunks';

export const CarsList = ({ cars, onOpenModal, onCloseModal }) => {
  // const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  return (
    <ul className={css.listCars}>
      {cars.map(car => (
        <li className={css.carItem} key={car._id}>
          <CarItem
            car={car}
            onOpenModal={onOpenModal}
            onCloseModal={onCloseModal}
          />
        </li>
      ))}
    </ul>
  );
};
