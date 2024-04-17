// import { Loader } from 'components/Loader/loader';

import { CarsList } from 'components/CarsList/CarsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'store/selectors';
import { getCarsThunk } from 'store/thunks';

const CarsPage = () => {
  // const contactIsLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  return (
    <div>
      <CarsList cars={cars} />
      {/* {contactIsLoading && <Loader />}
      <div className={css.phonebookWrapper}>
        <div className={css.phone}>
          <img src={phonebook} alt="phonebook" width={54} />
        </div>
      </div>
      <div className={css.contactsWrapper}>
        <div className={css.phone}>
          <img src={avatarContact} alt="avatarContact" width={54} />
        </div>
        <Filter />
        <ContactList />
        {contacts.length === 0 && <EmptyContactsList />}
      </div> */}
    </div>
  );
};
export default CarsPage;
