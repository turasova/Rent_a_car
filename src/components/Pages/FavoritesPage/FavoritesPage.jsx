import { FavoriteList } from 'components/FavoriteList/FavoriteList';

const FavoritesPage = ({ favoriteCars }) => {
  return (
    <div>
      <FavoriteList cars={favoriteCars} /> <p></p>
    </div>
  );
};
export default FavoritesPage;
