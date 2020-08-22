export const ADD_HEROS = "ADD_HEROS";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";
export const ADD_HERO_TO_LIST = "ADD_HERO_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

export function addHeros(heros) {
  return {
    type: ADD_HEROS,
    heros: heros,
  };
}

export function addFovourite(hero) {
  return {
    type: ADD_FAVOURITE,
    hero: hero,
  };
}

export function removeFavourite(hero) {
  return {
    type: REMOVE_FAVOURITE,
    hero: hero,
  };
}

export function showFavourites(val) {
  return {
    type: SHOW_FAVOURITES,
    showFavourites: val,
  };
}

export function addHeroToList(hero) {
  return {
    type: ADD_HERO_TO_LIST,
    hero: hero,
  };
}

export function handleHeroSearch(hero) {
  const api = `https://www.superheroapi.com/api.php/1170962379927864/search/${hero}`;

  return function (dispatch) {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((hero) => {
        dispatch(addHeroSearch(hero.results));
      });
  };
}

export function addHeroSearch(hero) {
  return {
    type: ADD_SEARCH_RESULT,
    hero: hero,
  };
}
