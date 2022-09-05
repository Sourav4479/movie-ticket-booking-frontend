

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectSeats } from "../redux/actions/moviesActions";


const SeatLayoutComponent = () => {
const seats = useSelector((state) =>  state.appReducer.seats);
//   const isLoggedIn = useSelector((state) =>  state.appReducer.isLoggedIn);

//   const history = useHistory()
  const dispatch = useDispatch();

 
  const handleClick = (id) => {
    // 👇️ toggle isActive state on click
    // console.log(el)
    dispatch(toggleSelectSeats(id))

    //total count 
    //seat ids selected
    //manage concurrency
  };
  const renderList = seats.map((seat,index) => {
    const { id, isSelected,isBooked} = seat
    return (
        <button disabled={isBooked} className={isSelected ? 'selectedSeat': isBooked ? 'bookedSeat' : ''}  onClick={()=>handleClick(id)} key={index+1}>{id}</button>
    );
  });
  return <>{renderList}</>;
};

export default SeatLayoutComponent;