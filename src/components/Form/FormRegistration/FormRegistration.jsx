import { Link } from 'react-router-dom';
import css from './FormRegistratin.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'service/auth';
//import { signUpThunk } from 'store/thunks';

const FormRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const newUser = { name, email, password };
    console.log(newUser);
    dispatch(signUpThunk(newUser));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.containerForm}>
      <Link to="/">Home</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="">Name</label> <br />
          <input
            type="text"
            name="name"
            value={name}
            required
            placeholder="Enter name"
            className={css.inputForm}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="">Email address</label>
          <br />
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
          Registration
        </button>
        <br />
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default FormRegistration;
