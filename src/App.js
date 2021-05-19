import "./App.css";
import Cards from "./components/card/cards";
import Contenedores from "./components/contenedor/contenedores";
import Footer from "./components/footer/Footer";
import Imac from "./components/imac/Imac";

import Ipad from "./components/ipad/Ipad";
import LastCards from "./components/lastCards/LastCards";
import Nav from "./components/navbar/Nav";
import NewCards from "./components/newCards/NewCards";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Contenedores></Contenedores>
      <Ipad></Ipad>
      <Imac></Imac>
      <Cards></Cards>
      <NewCards></NewCards>
      <LastCards></LastCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
