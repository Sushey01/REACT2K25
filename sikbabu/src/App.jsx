import './App.css'
import MovieCard from './components/MovieCard';

function App() {
const movieNumber = 1;



  return (
    <> 

     {/* conditional rendering method 1 using (?) */}
    {/* {movieNumber === 1 ? (
      <MovieCard movie={{title: "Apocalypse Film", release_date: "2024"}}/>
    ) : (
      <MovieCard movie={{title: "Avengers Film", release_date:"2024"}}/>
    )} */}


    {/* conditional rendering method 2 using && */}
      {movieNumber === 1 && <MovieCard movie={{title: "Beyblade Film", release_date: "2020"}}/>}
    </> 
  );
}





export default App;
