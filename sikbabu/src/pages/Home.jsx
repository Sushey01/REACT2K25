// Creating a component Home() for the entire homepage which will contain many informations!
// This is a functional component named Home that returns a div with a class name of "home".
import MovieCard from "../components/MovieCard"; // Importing the MovieCard component
import { searchMovies, getPopularMovies } from "../services/api"; // Importing API functions
import { useState, useEffect } from "react"; // Importing hooks from React
import "../css/Home.css"; // Importing CSS styles for the Home component

// These are the states that will be used in the Home component
// State is a way to manage data that changes over time in a React component.
function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search input
  const [movies, setMovies] = useState([]); // State to hold the list of movies
  const [error, setError] = useState(null); // State to hold any error messages
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Effect to load popular movies when the component mounts
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(); // Fetching popular movies
        setMovies(popularMovies); // Updating the movies state with fetched data
      } catch (err) {
        console.log(err); // Logging any errors encountered
        setError("Failed to load movies..."); // Setting error message on failure
      } finally {
        setLoading(false); // Setting loading to false after fetching
      }
    };
    loadPopularMovies(); // Invoking the function to load movies
  }, []); // Empty dependency array to run once on mount

  const handleSearch = async(e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    if (!searchQuery.trim()) return
    if (loading) return 

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults) // Updating movies state with search results
        setError(null)
    } catch (err) {
        console.log(err) // Logging any errors encountered
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="home"> {/* Main container for the Home component */}
      <form onSubmit={handleSearch} className="search-form"> {/* Form for searching movies */}
        <input
          type="text" // Input type for text
          placeholder="Search for movies..." // Placeholder text for the input
          className="search-input" // CSS class for styling
          value={searchQuery} // Value of the input field controlled by state
          onChange={(e) => setSearchQuery(e.target.value)} // Updating state on input change
        />

        <button type="submit" className="search-button"> {/* Button to submit the search form */}
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}  {/* Displaying error message if any */}
      {loading ? ( // Conditional rendering based on loading status
        <div className="loading">Loading...</div> // Loading indicator
      ) : (
        <div className="movies-grid"> {/* Container for the grid of movies */}
          {movies.map((movie) => ( // Mapping over the movies array to create MovieCard components
            <MovieCard movie={movie} key={movie.id} /> // Passing each movie object as a prop to MovieCard
          ))}
        </div>
      )}
    </div>
  );
}

export default Home; // Exporting the Home component for use in other parts of the app