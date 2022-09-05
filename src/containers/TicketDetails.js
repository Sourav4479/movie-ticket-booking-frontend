import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTicketDetails } from '../redux/actions/moviesActions';
function TicketDetails() {
    const selectedSeatsId = useSelector((state) =>  state.appReducer.selectedSeatsId);

    const [ticketDetails , setTicketDetails] = useState({})
  
    const dispatch = useDispatch();
    let updatedSeatDetails = {}
    const handleChange = (event) => {
        ticketDetails[event.target.id] = event.target.value 
        setTicketDetails(ticketDetails)
        dispatch(updateTicketDetails(ticketDetails))
    }
    useEffect(()=>{
     selectedSeatsId.forEach(el => {
            //find corresponding el in seatDetails 
            if(el in ticketDetails){
                updatedSeatDetails[el] = ticketDetails[el]
            }
        });
        // seatDetails = {...updatedSeatDetails}
        setTicketDetails(updatedSeatDetails)
        console.log(ticketDetails,updatedSeatDetails,'OnClick')
        dispatch(updateTicketDetails(updatedSeatDetails))
        
    },[selectedSeatsId])
  
    // function onSubmit(fields) {
    //     // display form field values on success
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
    //   }
    
    const renderList = selectedSeatsId.map((seat,index) => {
        return (
            <div className="ui card w-100"  key={index}>
                <div className="content">
             
                      <div key={index} >
                        <div >
                          <h5 className="header">Ticket {index + 1} for seat number {seat}</h5>

                            <div className="ui labeled input">
                              <label className="ui label">Name</label> &nbsp;
                              <input
                                name="details"
                                type="text"
                                className="border"
                                placeholder="Enter viewer name..."
                                id={seat}
                                onChange={handleChange}
                              />
                            </div>
                        </div>
                      </div>

              </div>
            </div>
        );
      });
    return <>{renderList}</>;
    // return (
    //     <>
    //     <Formik
    //       initialValues={initialValues}
    //       onSubmit={onSubmit}
    //     >
    //       {({ values }) => (
            // <Form>
            //   <div className="ui card m-3">
            //       <div className="content">
            //     <FieldArray name="tickets">
            //       {() =>
            //         values.tickets.map((ticket, i) => {
            //           return (
            //             <div key={i} >
            //               <div >
            //                 <h5 className="header">Ticket {i + 1}</h5>

            //                   <div className="ui labeled input">
            //                     <label className="ui label">Name</label>
            //                     <Field
            //                       name={`tickets.${i}.name`}
            //                       type="text"
            //                       className="border"
            //                       placeholder="Enter viewer name..."
            //                     />
            //                   </div>
            //               </div>
            //             </div>
            //           );
            //         })
            //       }
            //     </FieldArray>
            //     </div>
            //   </div>
            // </Form>
    //       )}
    //     </Formik>
    // </>
    //   );
}

export default TicketDetails
