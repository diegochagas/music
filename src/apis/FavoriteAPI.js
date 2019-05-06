let favorites = [];

export const addFavorite = id => {
  const newFavorite = getFavorite(id);
  const isFavorite = (newFavorite !== null ) ? newFavorite.isFavorite : false;
  const stringFavorite = `{"id": "${id}", "isFavorite": ${isFavorite + ""}}`;
  console.log(stringFavorite);
  localStorage.setItem(id, stringFavorite);
  updateFavoritesList(id);
  const hasFavorite = favorites.some(favorite => favorite.id === id);
  if (!hasFavorite) {
    favorites.push(getFavorite(id));
  }
}

export const changeFavoriteStatus = id => {
  const newFavorite = getFavorite(id);
  const stringFavorite = `{"id": "${id}", "isFavorite": ${!newFavorite.isFavorite + ""}}`;
  localStorage.setItem(id, stringFavorite);
  addFavorite(id); 
}

const updateFavoritesList = id => {
  const updatedFavorites = favorites.map(favorite => {
    const newFavorite = getFavorite(id);
    if (newFavorite.id === favorite.id) {
      return newFavorite;
    }
    return favorite;
  });
  favorites = updatedFavorites;
}

export const getFavorite = id => {
  const stringFavorite = localStorage.getItem(id)
  console.log(stringFavorite);
  const favorite = JSON.parse(stringFavorite);
  favorite.isFavorite = Boolean(favorite.isFavorite);
  return favorite;
}

export const getAllFavorites = () => favorites;