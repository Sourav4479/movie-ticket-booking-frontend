import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayMovieList, setMovieList } from "../redux/actions/moviesActions";
import MovieComponent from "./MovieComponent";


function MovieList() {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
      const response = await axios
        .get("https://3toa2el3n5.execute-api.ap-south-1.amazonaws.com/list-movies")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setMovieList(response.data));
      dispatch(setDisplayMovieList(response.data))
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    const movie = useSelector((state) => state.appReducer.displayMovieList);
    console.log("Movies :", movie);
    return (
        <div className="ui grid">
            <MovieComponent />
        </div>
    )
}

export default MovieList


// const ProductPage = () => {

//   return (
//     <div className="ui grid container">
//       <ProductComponent />
//     </div>
//   );
// };

// export default ProductPage;
