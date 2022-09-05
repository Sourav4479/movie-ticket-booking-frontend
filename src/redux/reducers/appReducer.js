import { ActionTypes } from "../constants/action-types";
import Fuse from "fuse.js"
const intialState = {
  movieList: [],
  displayMovieList: [],
  selectedMovie:{},
  isLoggedIn: false,
  loginData: {},
  walletBalance: 1000,
  displayAuthModal: false,
  seats: [
    {
      id:1,
      isSelected: false,
      isBooked: false
    },
    {
      id:2,
      isSelected: false,
      isBooked: false
    },   {
      id:3,
      isSelected: false,
      isBooked: false
    },   {
      id:4,
      isSelected: false,
      isBooked: false
    },   {
      id:5,
      isSelected: false,
      isBooked: false
    },   {
      id:6,
      isSelected: false,
      isBooked: false
    },   {
      id:7,
      isSelected: false,
      isBooked: false
    },   {
      id:8,
      isSelected: false,
      isBooked: false
    },   {
      id:9,
      isSelected: false,
      isBooked: false
    },   {
      id:10,
      isSelected: false,
      isBooked: false
    },   {
      id:11,
      isSelected: false,
      isBooked: false
    },   {
      id:12,
      isSelected: false,
      isBooked: false
    },   {
      id:13,
      isSelected: false,
      isBooked: false
    },   {
      id:14,
      isSelected: false,
      isBooked: false
    },   {
      id:15,
      isSelected: false,
      isBooked: false
    },   {
      id:16,
      isSelected: false,
      isBooked: false
    },   {
      id:17,
      isSelected: false,
      isBooked: false
    },
    {
      id:18,
      isSelected: false,
      isBooked: false
    }, {
      id:19,
      isSelected: false,
      isBooked: false
    }, {
      id:20,
      isSelected: false,
      isBooked: false
    }
  ],
  selectedSeatsId:[],
  ticketDetails: {},
  location: 'Chennai'

};

export const appReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_MOVIES:
      return { ...state, movieList: payload };
    case ActionTypes.SET_DISPLAY_MOVIES:
      return { ...state, displayMovieList: payload };
    case ActionTypes.SELECTED_MOVIE:
      return { ...state, selectedMovie: payload };
    case ActionTypes.REMOVE_SELECTED_MOVIE:
      return {};
    case ActionTypes.SEARCH_MOVIE:
      let filteredMovie = find(state.movieList,payload)
      return {...state,displayMovieList:filteredMovie};
    case ActionTypes.TOGGLE_AUTH_MODAL:
      return { ...state, displayAuthModal:!state.displayAuthModal}     
    case ActionTypes.TOGGLE_SELECT_SEAT:
      let localSeat = [...state.seats]
      let updatedSeats = localSeat.map(el=>{if(el.id===payload){el.isSelected=!el.isSelected} return el})
      //update selectedSeatsId
      let localSeatSelectedId = [...state.selectedSeatsId]
      let findIndexOfSeatId = (el) => el === payload;
      let indexOfSeatId = localSeatSelectedId.findIndex(findIndexOfSeatId)
      if(indexOfSeatId > -1){
        //splice localSeatSelectedId at index i
        localSeatSelectedId.splice(indexOfSeatId,1)
      }else{
        // just push it into the localSeatSelectedId
        localSeatSelectedId.push(payload)
      }

      return { ...state, seats:[...updatedSeats], selectedSeatsId:[...localSeatSelectedId]}    
    case ActionTypes.SET_SEAT_CONFIG:
      return {...state,seats:payload};
    case ActionTypes.ADD_SEAT:
        return {...state,selectedSeatsCount: state.selectedSeatsCount++};
    case ActionTypes.REMOVE_SEAT:
        return {...state,selectedSeatsCount: state.selectedSeatsCount--};
    case ActionTypes.UPDATE_TICKET_DETAILS:
        return {...state,ticketDetails:{...payload}};
    case ActionTypes.UPDATE_LOGIN_DATA:
        return {...state,loginData:{...payload}};
    case ActionTypes.UPDATE_LOCATION:
        return {...state,location:payload};    
    default:
      return state;
  }
};


export function find(items, text) {

  let displayList = []
  if(text === ''){
    displayList = [...items]
    return displayList
  }else{
    const options = {
      includeScore: false,
      keys: ['Title']
    }
    const fuse = new Fuse(items, options)
    let searchOutput=fuse.search(text)
    searchOutput.forEach(element => {
      displayList.push(items[element.refIndex])
    });
    return displayList
  }
  
  
}