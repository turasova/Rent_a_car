import css from './ButtonCar.module.css';

export const ButtonCar = ({ onOpenModal }) => {
  return (
    <button type="button" className={css.buttonCar} onClick={onOpenModal}>
      Show more
    </button>
  );
};
