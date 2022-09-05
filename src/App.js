import Header from "./containers/Header";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import TicketBooking from "./containers/TicketBooking";
import SuccessPage from "./containers/SuccessPage";
import './App.css';
import { useDispatch } from "react-redux";
import { updateUserLocation } from "./redux/actions/moviesActions";
function App() {
  const [showWidget,setWidgetState] = useState(false)
  const handleClick = ()=>{
    setWidgetState(!showWidget)
  }
  let dispatch = useDispatch()
  useEffect(()=>(
    window.addEventListener('message', function (e) {
      // Get the sent data
      const data = e.data;
      // console.log(data)
      dispatch(updateUserLocation(data))
      // If you encode the message in JSON before sending them,
      // then decode here
      // const decoded = JSON.parse(data);
  })
  ))
  return (
    // <div className="App">
    //   <Header />
    // </div>
    <div className="App">
      <Router>
        <Header />
        <Switch>  
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:movieid" component={TicketBooking} />
          <Route path="/success" component={SuccessPage} />
          <Route>404 Not Found!</Route>
          
        </Switch>
        <div class="chat-launcher" onClick={handleClick}><h1>{showWidget ? '-' : '+'}</h1></div>
            <div  className={showWidget ? 'chat-wrapper is-open' : 'chat-wrapper'} data-headline="Chat">
              <iframe title="chat-widget" src="https://meek-madeleine-0b07ca.netlify.app"></iframe>
            </div>
      </Router>
      
    </div>
  );
}

export default App;
