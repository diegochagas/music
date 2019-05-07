// let favorites = [];

export const updateFavorite = id => {
  const favorite = localStorage.getItem(id);
  if (favorite === null) {
    localStorage.setItem(id, "false");
    return false;
  }
  const isFavorite = Boolean(favorite);
  localStorage.setItem(id, `"${!isFavorite}"`);
  return isFavorite;
}
/*
export const addFavorite = id => {
  const isFavorite = (newFavorite !== null ) ? newFavorite.isFavorite : false;
  const stringFavorite = `{"id": "${id}", "isFavorite": ${isFavorite}}`;
  localStorage.setItem(id, stringFavorite);
  updateFavoritesList(id);
  const hasFavorite = favorites.some(favorite => favorite.id === id);
  if (!hasFavorite) {
    favorites.push(getFavorite(id));
  }
}

export const changeFavoriteStatus = id => {
  const newFavorite = getFavorite(id);
  const stringFavorite = `{"id": "${id}", "isFavorite": ${!newFavorite.isFavorite}}`;
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

export const getFavorite = id => JSON.parse();

export const getAllFavorites = () => favorites;

*/