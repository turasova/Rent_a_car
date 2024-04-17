import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
//import { useSelector } from 'react-redux';
// import { isAuthSelector } from 'store/selectors';
// import AuthMenu from 'components/AuhtMenu/AuthMenu';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <div className={css.containerNav}>
          <ul className={css.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                <p className={css.heroText}>Home</p>
              </NavLink>
            </li>
          </ul>
          <ul className={css.auth}>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
