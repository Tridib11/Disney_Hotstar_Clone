import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Name from "./components/Name";
import './App.css'; 
function App() {
  return (
    <div className="">
      <Header />
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
      <Name/>
    </div>
  );
}

export default App;
