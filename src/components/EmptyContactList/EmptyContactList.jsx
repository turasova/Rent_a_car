import css from './EmptyContactList.module.css';

export const EmptyContactsList = () => {
  return (
    <div className={css.container}>
      <h3 className={css.text}>You don't have any contacts yet</h3>
    </div>
  );
};
