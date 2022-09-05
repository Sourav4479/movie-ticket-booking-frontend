import Filter from "./Filter";
import MovieList from "./MovieList"


function HomePage() {
    return (
        <>
       
        <div className="fotorama" data-autoplay="2500" data-width="100%" data-height="50%"  data-ratio="4/3" data-fullscreen="true">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1662016144734_banner.jpg" />
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1661504932497_restaurant.jpg" />
            <img src="https://movietalkexpress.files.wordpress.com/2014/10/big-hero-6-mega-banner.jpg" />
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1662023094909_banner.jpg" />
        </div>
        <div className="ui container mt-5">
                <div className="ui grid">
                    <div className="row">
                        <div className="three wide column border p1">
                            <Filter />
                        </div>
                        <div className="thirteen wide column">
                            <p>Movies Showing Near You</p>
                            <MovieList />
                        </div>
                    </div>
                </div>
        </div>
       
        
        </>
    )
}

export default HomePage
