import { Link, useNavigate } from 'react-router-dom';
import css from './FormLogin.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'service/auth';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const authLoginUser = { email, password };
    console.log(authLoginUser);

    dispatch(loginThunk(authLoginUser));

    navigate('/contacts');

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.containerForm}>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="">Email address</label> <br />
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Enter email"
            className={css.inputForm}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="">Password</label>
          <br />
          <input
            name="password"
            type="password"
            value={password}
            required
            placeholder="Enter password"
            className={css.inputForm}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={css.button}>
          Sing In
        </button>
      </form>
      <Link to="/registration">Registration</Link>
    </div>
  );
};

export default FormLogin;
