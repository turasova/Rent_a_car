//import { useDispatch } from 'react-redux';
import css from './Form.module.css';
import { useState } from 'react';
// import Notiflix from 'notiflix';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  //   const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'date':
        setDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setDate('');
  };

  return (
    <div className={css.form_container}>
      <h2 className={css.form_title}>Book your campervan now</h2>
      <p className={css.form_text}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <label>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
            placeholder="Name"
          />
        </label>
        <label>
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        <label>
          <input
            className={css.input_date}
            type="date"
            name="date"
            value={date}
            required
            onChange={handleChange}
            placeholder="Booking date"
          />
        </label>
        <textarea
          className={css.textarea}
          rows="5"
          cols="33"
          onChange={handleChange}
          placeholder="Comment"
        ></textarea>
        <button className={css.button} type="submit" onSubmit={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
};
