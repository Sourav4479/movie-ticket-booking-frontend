import { useDispatch } from "react-redux";
import { searchMovie } from "../redux/actions/moviesActions";


function Filter() {
    const dispatch = useDispatch();

    const handleSearch = event => {
        dispatch(searchMovie(event.target.value))
        console.log('value is:', event.target.value);
      };
    return (
        <>
            <h4>Find a Perfect Movie <i className="filter icon  grey"></i></h4>
                            <div className="item">
                                <div className="ui fluid  icon input yellow">
                                    <input type="text" name="search" id="search" onChange={handleSearch} placeholder="Search..." />
                                    <i className="search link icon "></i>
                                </div>
                            </div>
                            <br></br>
                            <p>Rating</p>
                            <div className="ui tiny labeled button m3px" >
                                <div className="ui tiny basic yellow button">
                                    <i className="star icon yellow"></i>  
                                </div>
                                <a className="ui tiny basic left pointing yellow label">
                                    1
                                </a>
                            </div>
                            <div className="ui tiny labeled button m3px" >
                                <div className="ui tiny basic yellow button">
                                    <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  
                                </div>
                                <a className="ui tiny basic left pointing yellow label">
                                    2
                                </a>
                            </div>
                          
                            <div className="ui tiny labeled button m3px" >
                                <div className="ui tiny basic yellow button">
                                    <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  
                                </div>
                                <a className="ui tiny basic left pointing yellow label">
                                    3
                                </a>
                            </div>
                            <div className="ui tiny labeled button m3px" >
                                <div className="ui tiny basic yellow button">
                                    <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  
                                </div>
                                <a className="ui tiny basic left pointing yellow label">
                                    4
                                </a>
                            </div>
                            <div className="ui tiny labeled button m3px" >
                                <div className="ui tiny basic yellow button">
                                    <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  <i className="star icon yellow"></i>  <i className="star icon yellow"></i> 
                                </div>
                                <a className="ui tiny basic left pointing yellow label">
                                    5
                                </a>
                            </div>
                            <div>&nbsp;</div>
                            <p>Genres</p>
                            
                            <button className="ui tiny yellow basic button m3px">Drama</button>
                            <button className="ui tiny yellow basic button m3px">Action</button>
                            <button className="ui tiny yellow basic button m3px">Romance</button>
                            <button className="ui tiny yellow basic button m3px">Thriller</button>
                            <button className="ui tiny yellow basic button m3px">Horror</button>
                            <button className="ui tiny yellow basic button m3px">Fiction</button>

                     

        </>
    )
}

export default Filter
