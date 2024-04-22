import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/loader';
import { useDispatch } from 'react-redux';
import { getCarsThunk } from 'store/thunks';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const CarsPage = lazy(() => import('./Pages/CarsPage/CarsPage'));
const FavoritesPage = lazy(() => import('./Pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CarsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
