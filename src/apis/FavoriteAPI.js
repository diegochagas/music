const favorites = [];

export const getFavorites = () => favorites;

export const updateFavorite = id => {
  const isFavorite = getFavorite(id);
  const newFavoriteStatus = changeFavoriteStatus(id, isFavorite);
  const favorite = {id: id, isFavorite: newFavoriteStatus};
  favorites.push(favorite);
}

const getFavorite = id => {
  const favorite = localStorage.getItem(id);
  return favorite === "true" ? true : false;
}

const changeFavoriteStatus = (id, isFavorite) => {
  const favoriteStatus = !isFavorite;
  localStorage.setItem(id, (favoriteStatus).toString());
  return favoriteStatus;
}


