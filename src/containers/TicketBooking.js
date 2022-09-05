import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SeatLayoutComponent from "./seatLayout";
import {useHistory, useParams} from 'react-router-dom';
import { useEffect } from "react";
import { setSeatConfig } from "../redux/actions/moviesActions";
import TicketDetails from "./TicketDetails";


function TicketBooking() {
    const dispatch = useDispatch();
    const selectedSeatsId = useSelector((state) =>  state.appReducer.selectedSeatsId);
    const loginData = useSelector((state) =>  state.appReducer.loginData);
    const ticketDetails = useSelector((state) =>  state.appReducer.ticketDetails);
    let totalSeatsSelected = selectedSeatsId.length
    let totalCheckoutAmount = selectedSeatsId.length * 100
    let isLoading = false
    const {movieid} = useParams();
    const fetchSeatConfig = async () => {
        const response = await axios
          .post("https://3toa2el3n5.execute-api.ap-south-1.amazonaws.com/seat-config", {"movieID":movieid})
          .catch((err) => {
            console.log("Err: ", err);
          });
        console.log(JSON.parse(response.data.seatConfig))
        let seatConfig = JSON.parse(response.data.seatConfig)
        dispatch(setSeatConfig(seatConfig));
        // dispatch(setDisplayMovieList(response.data))
      };
      const history = useHistory()
      const handleBooking = ()=>{
        // {
        //     "movieID": "60b7f6508671710327fe0061",
        //     "seatsToBooked": [18,17],
        //     "ticketDetails": {
        //       "17": "Sourav Ganguly",
        //       "18": "R Ganguly"
        //     },
        //     "userEmail":"test@test.com",
        //     "amount": 200
        // }
        let payload = {
            movieID: movieid,
            amount: totalCheckoutAmount,
            userEmail: 'test@test.com',
            seatsToBooked:selectedSeatsId,
            ticketDetails:ticketDetails
        }
        isLoading= true
        axios
          .post("https://3toa2el3n5.execute-api.ap-south-1.amazonaws.com/book-ticket", payload)
          .then(data=>{
            
              fetchSeatConfig()
              history.push("/success")

          })
          .catch((err) => {
              isLoading = false
            console.log("Err: ", err);
          });
        
      }
      useEffect(() => {
        fetchSeatConfig();
      }, []);
    return (
        <div className="mt-5">
            <div className="">
            <div className="ui grid">
                    <div className="row">
                        <div className="twelve wide column mt-3 p1">
                            <h1> Seat Layout</h1>
                            <div class="ui center aligned container">
                                <p>----- Screen This side -----</p>
                            </div>
                            <div className="flex-container">
                                <SeatLayoutComponent /> 
                            </div>
                                                        
                        </div>
                        <div className="four wide border  column">
                           <div className = "center">
                           <h3> Hi test@test.com </h3>
                                 {totalSeatsSelected === 0 ? <><div>Please select atleast one seat to continue</div> <br/> </> : ''}   
                                <TicketDetails />
                              
                                <div className="ui left action input">
                                    <button className="ui button">
                                        Total Seats Selected {totalSeatsSelected}
                                    </button>
                                </div> &nbsp;
                                <div className="ui right action input">
                                    <button onClick={handleBooking} className="ui teal labeled icon button">
                                         <i className="cart icon"></i> Book Now &nbsp; ${totalCheckoutAmount}
                                    </button>
                                </div>


                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketBooking
