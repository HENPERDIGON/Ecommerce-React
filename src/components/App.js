import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";






const App = () => {
  return (
    <>
      <Header />     
      <Main />  
      <ItemListContainer />
    <ItemDetailContainer />
      <Footer />
      

    </>
  );
};

export default App;
