export const selectGenres = (state) => state.games.gamePageData.genres;
export const selectBackground = (state) =>
  state.games.gamePageData.background_image;
export const selectDescription = (state) =>
  state.games.gamePageData.description_raw;
export const selectName = (state) => state.games.gamePageData.name;
export const selectMetacriticScore = (state) =>
  state.games.gamePageData.metacritic;
export const selectWebsite = (state) => state.games.gamePageData.website;
