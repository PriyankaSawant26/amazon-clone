import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage,NavBar,SearchResult, ProductPage, Checkout } from './components';


function App() {
  return (

   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route  path='/search' element={<SearchResult/>} />
      <Route  path='/product/:id' element={<ProductPage/>} />
      <Route  path='/Checkout' element={<Checkout/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
