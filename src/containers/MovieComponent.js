import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedMovie, toggleAuthModal } from "../redux/actions/moviesActions";
import AuthModal from "./AuthModal";


const MovieComponent = () => {
  const movies = useSelector((state) =>  state.appReducer.displayMovieList);
  const isLoggedIn = useSelector((state) =>  state.appReducer.isLoggedIn);

  const history = useHistory()
  const dispatch = useDispatch();
  const imgHeight = { 
      height: '250px'
  }
  const handleMovieClick = (id,index)=>{
    //if logged in proceed to booking page else show login modal
    if(isLoggedIn){
        history.push("movie/"+id)
    }else{
        dispatch(toggleAuthModal())
        dispatch(selectedMovie(movies[index]))
    }
  }
  const renderList = movies.map((movie,index) => {
    const { _id, Title, ImageURL, Genre, Release } = movie;
    return (
      <div className="four wide column" key={_id}>
          <div className="ui link cards">
            <div className="card" onClick={()=>handleMovieClick(_id,index)}>
              <div className="image" >
                <img src={ImageURL} style={imgHeight} alt={Title} />
              </div>
              <div className="content">
                <div className="header">{Title}</div>
                <div className="meta price"> {Release}</div>
                <div className="meta">{Genre.Name}</div>
              </div>
            </div>
          </div>
      </div>
    );
  });
  return <>{renderList}<AuthModal /></>;
};

export default MovieComponent;