import { ActionTypes } from "../constants/action-types";

export const setMovieList = (movies) => {
  return {
    type: ActionTypes.SET_ALL_MOVIES,
    payload: movies,
  };
};

export const setDisplayMovieList = (movies) => {
  return {
    type: ActionTypes.SET_DISPLAY_MOVIES,
    payload: movies,
  };
};


export const searchMovie = (searchInput) => {
  return {
    type: ActionTypes.SEARCH_MOVIE,
    payload: searchInput,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ActionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};
export const removeSelectedMovie = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_MOVIE,
  };
};
export const toggleAuthModal = () => {
  return {
    type: ActionTypes.TOGGLE_AUTH_MODAL,
  };
};

export const toggleSelectSeats = (id) => {
  return {
    type: ActionTypes.TOGGLE_SELECT_SEAT,
    payload: id,
  };
};
export const setSeatConfig = (config) => {
  return {
    type: ActionTypes.SET_SEAT_CONFIG,
    payload: config,
  };
};
export const addSeat = () => {
  return {
    type: ActionTypes.ADD_SEAT
  };
};
export const removeSeat = () => {
  return {
    type: ActionTypes.REMOVE_SEAT
  };
};
export const updateTicketDetails = (details) => {
  return {
    type: ActionTypes.UPDATE_TICKET_DETAILS,
    payload: details,
  };
};
export const updateLoginData = (details) => {
  return {
    type: ActionTypes.UPDATE_LOGIN_DATA,
    payload: details,
  };
};
export const updateUserLocation = (location) => {
  return {
    type: ActionTypes.UPDATE_LOCATION,
    payload: location
  };
};