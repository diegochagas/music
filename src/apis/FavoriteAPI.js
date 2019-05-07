export const updateFavorite = id => {
  const isFavorite = getFavorite(id);
  const newFavoriteStatus = changeFavoriteStatus(id, isFavorite);
  return {id: id, isFavorite: newFavoriteStatus};
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