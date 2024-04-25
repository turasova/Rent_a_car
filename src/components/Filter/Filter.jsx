import { useState, useEffect } from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { getFilterThunk } from 'store/thunks';

export const LocationFilter = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterThunk());
  }, [dispatch]);

  const handleChange = event => {
    setLocation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLocation(location);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Enter location"
          className={css.label}
        >
          Location
        </label>
        <br />
        <input className={css.input_label} type="text" /> <br />
        <label className={css.label}>Filters</label> <br />
        <input className={css.input_label} type="text" /> <br />
        <button type="submit" className={css.button_search}>
          Search
        </button>
      </form>
    </>
  );
};
