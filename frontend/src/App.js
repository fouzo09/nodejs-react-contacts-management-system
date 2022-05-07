import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Header from './components/Header';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import View from './pages/View';



function App() {
  return (
    <BrowserRouter>
      <div className='container'>
         <ToastContainer />
         <Header />
         <Routes>
              <Route index element={<Home />} />
              <Route path="add" element={<AddEdit />} />
              <Route path="edit/:id" element={<AddEdit />} />
              <Route path="view/:id" element={<View />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Page404 />} />
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
