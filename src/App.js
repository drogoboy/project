import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import Log from "./Components/Login/Log";
import Product from "./Components/Product/Product";
import Book from "./Components/Book/Book";



function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/"element={<Log/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Product" element={<Product/>}></Route>
      <Route path="/book" element={<Book/>}></Route> 

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
