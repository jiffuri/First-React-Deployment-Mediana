import Navigation_Bar from "./Components/Navigation_Bar";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";
import UseReferencePage from "./pages/UseReferenceHook";
import CartMultiple from "./Components/CartMultiple";

import ReducerPage from './pages/UseReducer'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation_Bar></Navigation_Bar>
      <Timer></Timer>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/Work' element = {<Works/>}></Route>
        <Route path='/Contact' element = {<Contact/>}></Route>
        <Route path='/Cart' element = {<CartMultiple/>}></Route>
        <Route path='/HookUse' element = {<UseReferencePage/>}></Route>
        <Route path='/HookReducer' element={<ReducerPage></ReducerPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
