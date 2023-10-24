import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screen/Home';
import Categories from './Screen/Categories';
import ContactUs from './Screen/ContactUs';
import Shop from './Screen/Shop';
import Signup from './Screen/Signup';
import Singin from './Screen/Singin';
import Feature from './Component/Feature';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/shop' element={<Shop></Shop>} ></Route>
      <Route path='/categories' element={<Categories></Categories>} ></Route>
      <Route path='/feature' element={<Feature></Feature>} ></Route>
      <Route path='/signup' element={<Signup></Signup>} ></Route>
      <Route path='/signin' element={<Singin></Singin>} ></Route>

      <Route path="*" element={<Home></Home>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
