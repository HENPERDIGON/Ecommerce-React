import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./ItemDetailContainer";






const App = () => {
  return (
    <>
      <Header />     
      <Main />  

      <BrowserRouter>
      <Routes>
    <Route path='/' element={<ItemListContainer />}/>
    <Route path='/categori/:categoryid' element={<ItemListContainer />}/>


    <Route path='/item/:id' element={<ItemDetailContainer />}/>
    <Route path='/carrito' element={<carrito/>}/>

    </Routes>

    </BrowserRouter>

      <Footer />
      

    </>
  );
};

export default App;
