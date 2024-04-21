import { useEffect } from 'react';
import css from './modal.module.css';
import { fetchCars } from 'service/getCarsApi';
import { DetailsCar } from 'components/DetailsCar/DetailsCar';
import { AiOutlineClose } from 'react-icons/ai';
//import Reviews from 'components/Reviews/Reviews';

export const Modal = ({ car, onCloseModal }) => {
  useEffect(() => {
    fetchCars();
  }, []);
  console.log();

  useEffect(() => {
    const handleEscClose = evt => {
      if (evt.code === 'Escape') onCloseModal();
      console.log('Press');
    };

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onCloseModal]);

  const handleOverlayClose = evt => {
    if (evt.target === evt.currentTarget) onCloseModal();
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClose}>
      <div className={css.modal}>
        <AiOutlineClose className={css.close} onClick={onCloseModal} />
        <DetailsCar car={car} />
      </div>
    </div>
  );
};
