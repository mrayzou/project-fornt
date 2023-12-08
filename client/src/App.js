  import './App.css';
  import Category from './Pages/Home/Category';
  import Error from './Pages/Error/Error';
  import Navbar from './Components/Navbar/Navbar';
  import { Route, Routes } from 'react-router-dom';
  import LoginUser from './Pages/LoginUser/LoginUser';
  import RegisterUser from './Pages/RegisterUser/RegisterUser';
  import { useDispatch } from 'react-redux';
  import {current} from './JS/actions/user';
  import { useEffect } from 'react';
  import AddProduct from './Pages/AddProduct/AddProduct';
  import EditProduct from './Pages/EditProduct/EditProduct';
  import Product from './Pages/product/Product';
    
  function App() {
    const dispatch = useDispatch()
    useEffect (()=>{
      if (localStorage.getItem("token")){
        dispatch(current())
      }
    },[dispatch])
    return (
      <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Category  />} />
        <Route  path="/*" element={<Error/>} />
        <Route path='Login' element={<LoginUser/>}/> 
        <Route path='Register' element={<RegisterUser/>}/> 
        <Route path='Product' element={<Product/>}/> 
        <Route path='AddProduct' element={<AddProduct/>}/> 
        <Route path='/EditProduct/:id' element={<EditProduct/>}/> 


        </Routes>
          </div>
    );
  }

  export default App;
