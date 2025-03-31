//Creating a component Home() for entire homepage which will contain many informations!
// This is a functional component named Home that returns a div with a class name of  "home".
import MovieCard from "../components/MovieCard"
import {useState} from "react"  //importing useState from react to manage state in functional components

function Home(){
    const[searchQuery, setSearchQuery] = useState("");

// Variable called movies is created inside the function Home!
    const movies = [
        {id: 1, title: "John Wick", release_date:"2022"},
        {id: 2, title: "Terminator", release_date:"1994"},
        {id: 3, title: "Doraemon", release_date:"2003"},
    ];

    const handleSearch =(e) => {
        e.preventDefault() // Prevents the default form submission behavior
        // This function is called when the form is submitted. It prevents the default behavior of the form submission and alerts the current value of the searchQuery state variable.
        alert(searchQuery)
        setSearchQuery("-------")
    }
    return (
    <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            plcaeholder="Search for movies..." 
            className="search-input"
            value={searchQuery} //value of the input field is set to the searchQuery state variable
            onChange={(e)=> setSearchQuery(e.target.value)}  //onChange event handler updates the searchQuery state variable with the current value of the input field
            />
        

        <button type="submit" className="search-button">Search</button>
        </form>

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