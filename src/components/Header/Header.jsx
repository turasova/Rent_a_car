import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'store/selectors';
import AuthMenu from 'components/AuhtMenu/AuthMenu';

export const Header = () => {
  const isLoggedIn = useSelector(isAuthSelector);

  return isLoggedIn ? (
    <AuthMenu />
  ) : (
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
                <p className={css.heroText}>PhoneBook</p>
              </NavLink>
            </li>
          </ul>
          <ul className={css.auth}>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Sing In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
