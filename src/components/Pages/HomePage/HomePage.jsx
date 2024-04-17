import { useSelector } from 'react-redux';
import { isAuthSelector, userSelector } from 'store/selectors';
import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = useSelector(isAuthSelector);
  const user = useSelector(userSelector);

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <>
          <div>
            <p className={css.helloText}>
              Hello , {user.name}! <br />
              Welcome to your phonebook...
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className={css.helloText}>
              Hello! I'm your phonebook. <br />
              Please log in to your account or register
            </p>
            <NavLink to="/login">
              <div className={css.wrap}>
                <button className={css.button}>Sing In</button>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
