import Nav from "./componenets/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./componenets/Home";
import Cart from "./componenets/Cart";


function App() {

  return (
    <div className="App">
      <BrowserRouter >
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/cart" element = {<Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
