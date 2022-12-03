import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header/Header';
import SimpleBottomNavigation from "./components/Header/MainNav";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Trending from "./pages/Trending";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Routes>
              <Route path='/' exact element={<Trending />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
