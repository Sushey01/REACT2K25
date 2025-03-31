//Creating a component Home() for entire homepage which will contain many informations!
// This is a functional component named Home that returns a div with a class name of  "home".
import MovieCard from "../components/MovieCard"


function Home(){

// Variable called movies is created inside the function Home!
    const movies = [
        {id: 1, title: "John Wick", release_date:"2022"},
        {id: 2, title: "Terminator", release_date:"1994"},
        {id: 3, title: "Doraemon", release_date:"2003"},
    ];

    const handleSearch =() => {

    }
    return (
    <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" plcaeholder="Search for movies..." className="search-input"/>
        </form>

        <button type="submit" className="search-button">Search</button>


        {/* grid of the movies */}
        <div className="movies-grid">   
            
            {/* // the .map function is used to iterate over all of the value inside and take it and pass it to this function and it returns the value of the movie object.  */}
            {movies.map((movie)=> (
                <MovieCard movie={movie} key={movie.id} /> //Passing the movie object as a prop to the MovieCard component and using the movie id as a key for each movie card.
            ))}
        </div>
    </div>
    );
}

export default Home;