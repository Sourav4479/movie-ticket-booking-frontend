import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { updateLoginData } from '../redux/actions/moviesActions';

function AuthModal() {
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmitClick = (e) => {
        e.preventDefault();
       console.log(state,'Hi')
        axios
       .post("https://3toa2el3n5.execute-api.ap-south-1.amazonaws.com/login",
       {
        "email":state.email,
        "password":state.password
        })
        .then(data=>{
            console.log(data,'Sourav')
            history.push("movie/"+selectedMovie._id)
            // dispatch login data
            dispatch(updateLoginData(data.data))
        })
       .catch((err) => {
         console.log("Err: ", err);
       });
    }
  let isModalOpen = useSelector((state) => state.appReducer.displayAuthModal);
  let selectedMovie = useSelector((state) => state.appReducer.selectedMovie);
  return (
    <Modal
      open={isModalOpen}
      closeOnEscape = {false}
    >
      <Modal.Header>Please Login to continue!</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={selectedMovie.ImageURL} wrapped />
        <Modal.Description>
         
          <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address" id="email"  onChange={handleChange}/>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" id="password" onChange={handleChange} />
          </div>
        </div>
        <div class="ui fluid large teal submit button"  onClick={handleSubmitClick}>Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

  </div>
</div>
        </Modal.Description>
      </Modal.Content>

    </Modal>
  )
}

export default AuthModal
