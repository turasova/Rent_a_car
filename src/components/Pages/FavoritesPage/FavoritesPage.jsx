import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selectors';

const FavoritesPage = ({ favoriteCar }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <FavoriteList favorites={favorites} favoriteCar={favoriteCar} /> <p></p>
    </div>
  );
};
export default FavoritesPage;
