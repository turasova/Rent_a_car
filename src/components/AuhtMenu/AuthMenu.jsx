import { useDispatch, useSelector } from 'react-redux';
import css from './AuthMenu.module.css';
import { NavLink } from 'react-router-dom';
import { userSelector } from 'store/selectors';
import { logoutThunk } from 'service/auth';
import defaultAvatar from '../../images/avatar.jpg';

const AuthMenu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  return (
    <>
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
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    `${css.textLink} ${isActive ? css.active : ''}`
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
            <ul className={css.auth}>
              <li className={css.listUser}>
                <img
                  src={avatar}
                  alt="avatar"
                  width={32}
                  className={css.avatar}
                />
                <h3 className={css.userText}>Welcom, {user.name}</h3>
                <NavLink to="/">
                  <button
                    className={css.button}
                    onClick={() => {
                      dispatch(logoutThunk());
                    }}
                  >
                    Logout
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default AuthMenu;
