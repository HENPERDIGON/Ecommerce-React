import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./ItemDetailContainer";
import { CartContextProvider } from './CartContext';






const App = () => {
  return (

    <CartContextProvider>
      <BrowserRouter>
      <Header />     
      <Main />  
      <Footer />
      <Routes>
      <Route path='/' element={<ItemListContainer />}/>

        <Route path='/categori/:categoryid' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>

            <Route path='/carrito' element={<carrito/>}/>
            </Routes>
      </BrowserRouter>

      
      
      </CartContextProvider>
      

   
  );
};

export default App;
