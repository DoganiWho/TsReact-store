import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"
// import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Details } from "./pages/Details";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FavoritesContextProvider } from "./context/FavoritesContext";

export default function App() {
  return (
    <>
    <ShoppingCartProvider>
      <FavoritesContextProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:prodId" element={<Details />} />
          </Routes>
        </Container>
        <Footer />
      </FavoritesContextProvider>
    </ShoppingCartProvider>
    </>
  );
}