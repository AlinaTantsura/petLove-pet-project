export const selectUser = state => state.auth.user;
export const selectFavorites = state => state.auth.favoritesList;
export const selectPets = state => state.auth.petsList;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;