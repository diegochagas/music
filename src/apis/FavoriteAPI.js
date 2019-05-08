let favorites = [];

export const getFavorites = () => favorites;

export const updateFavorite = id => {
  const isFavorite = getFavorite(id);
  const newFavoriteStatus = changeFavoriteStatus(id, isFavorite);
  const newFavorite = {id: id, isFavorite: newFavoriteStatus};
  addFavorite(newFavorite);
}

const getFavorite = id => {
  const favorite = localStorage.getItem(id);
  if (favorite === "true") return true;
  else if (favorite === "false") return false;
  return changeFavoriteStatus(id, false);
}

const changeFavoriteStatus = (id, isFavorite) => {
  const favoriteStatus = !isFavorite;
  localStorage.setItem(id, (favoriteStatus).toString());
  return favoriteStatus;
}

const addFavorite = newFavorite => {
  const hasFavorite = favorites.some(favorite => favorite.id === newFavorite.id)
  if (hasFavorite) {
    const newFavorites = favorites.map(favorite => {
      if (newFavorite.id === favorite.id) {
        return newFavorite;
      }
      return favorite;
    });
    favorites = newFavorites;
  } else {
    favorites.push(newFavorite);
  }
}
