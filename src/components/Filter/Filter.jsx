import { useEffect, useState } from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { getLocationThunk } from 'store/thunks';

export const LocationFilter = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationThunk(location));
  }, [location, dispatch]);

  const handleChange = event => {
    setLocation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFilter(location);
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
