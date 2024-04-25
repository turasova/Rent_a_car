import { FavoriteList } from 'components/FavoriteList/FavoriteList';
// import { useSelector } from 'react-redux';
// import { selectFavorites } from 'store/selectors';

const FavoritesPage = () => {
  //const favorites = useSelector(selectFavorites);

  return (
    <div>
      <FavoriteList /> <p></p>
    </div>
  );
};
export default FavoritesPage;
