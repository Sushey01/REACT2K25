import './App.css'
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Favorites from "./pages/Favorites"

function App() {
// const movieNumber = 1;



  return (

    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
  );
    // <> 
    // <Home />

     {/* conditional rendering method 1 using (?) */}
    {/* {movieNumber === 1 ? (
      <MovieCard movie={{title: "Apocalypse Film", release_date: "2024"}}/>
    ) : (
      <MovieCard movie={{title: "Avengers Film", release_date:"2024"}}/>
    )} */}


    {/* conditional rendering method 2 using && */}
      {/* {movieNumber === 1 && <MovieCard movie={{title: "Beyblade Film", release_date: "2020"}}/>} */}
    {/* </>  */}

}





export default App;
