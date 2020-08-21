import { combineReducers } from "redux";
import {
  ADD_HEROS,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITES,
  ADD_HERO_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions/index";

const initialHerosState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function heros(state = initialHerosState, action) {
  if (action.type === ADD_HEROS) {
    return {
      ...state,
      list: action.heros,
    };
  }

  if (action.type === ADD_FAVOURITE) {
    return {
      ...state,
      favourites: [action.hero, ...state.favourites],
    };
  }

  if (action.type === REMOVE_FAVOURITE) {
    let filtered = state.favourites.filter((hero) => {
      return hero.Title !== action.hero.Title;
    });
    return {
      ...state,
      favourites: filtered,
    };
  }

  if (action.type === SHOW_FAVOURITES) {
    return {
      ...state,
      showFavourites: action.showFavourites,
    };
  }

  if (action.type === ADD_HERO_TO_LIST) {
    return {
      ...state,
      list: [action.hero, ...state.list],
    };
  }

  return state;
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  if (action.type === ADD_SEARCH_RESULT) {
    return {
      ...state,
      result: action.hero,
      showSearchResults: true,
    };
  }
  if (action.type === ADD_HERO_TO_LIST) {
    return {
      ...state,
      showSearchResults: false,
    };
  }
  return state;
}

export default combineReducers({
  heros,
  search,
});
