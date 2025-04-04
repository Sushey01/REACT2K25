//Creating a component Home() for entire homepage which will contain many informations!
// This is a functional component named Home that returns a div with a class name of  "home".
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import { useState, useEffect } from "react"; //importing useState from react to manage state in functional components
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setlLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err)
        setError("Failed to load");
      } finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, []);

  // Variable called movies is created inside the function Home!

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // This function is called when the form is submitted. It prevents the default behavior of the form submission and alerts the current value of the searchQuery state variable.
    alert(searchQuery);
    setSearchQuery("-------");
  };

  //These below are components that are used to create the search bar and the grid of movies. The search bar allows users to enter a search query, and the grid displays the list of movies.
  // The search bar is created using an input field and a button. The input field is controlled by the searchQuery state variable, and its value is updated using the setSearchQuery function when the user types in it. The button submits the form when clicked.
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          plcaeholder="Search for movies..."
          className="search-input"
          value={searchQuery} //value of the input field is set to the searchQuery state variable
          onChange={(e) => setSearchQuery(e.target.value)} //onChange event handler updates the searchQuery state variable with the current value of the input field
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* grid of the movies */}
      <div className="movies-grid">
        {/* // the .map function is used to iterate over all of the value inside and take it and pass it to this function and it returns the value of the movie object.  */}
        {movies.map((movie) => (
          // We going to use API for this search conditional rendering so we are not using the searchQuery state for now!
          // movie.title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard movie={movie} key={movie.id} /> //Passing the movie object as a prop to the MovieCard component and using the movie id as a key for each movie card.
          // )
        ))}
      </div>
    </div>
  );
}

export default Home;
