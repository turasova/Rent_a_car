import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.helloText}>Welcome to the caravan rental website</p>
        <NavLink to="/catalog">
          <div className={css.wrap}>
            <button className={css.button}>Catalog</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
