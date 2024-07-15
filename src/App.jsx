import './styles/styles.less'
import Img404 from './assets/404img.png'
import HeaderContent from "./components/HeaderContent/HeaderContent.jsx";
import FooterContent from "./components/FooterContent/FooterContent.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CategoryList from "./components/CategoryList/CategoryList.jsx";
import BrandList from "./components/BrandList/BrandList.jsx";


function App() {
  return (
      <BrowserRouter>
          <HeaderContent />
              <Routes >
                  <Route path='/' element={<ItemListContainer />} />
                  <Route exact path='/item/:productId' element={<ItemDetailContainer />} />
                  <Route exact path='/category/:categoryId' element={<CategoryList />} />
                  <Route exact path='/brand/:brandId' element={<BrandList />} />
                  <Route path='*' element={
                      <div className='notfount container'>
                          <img src={Img404} alt=""/>
                      </div>
                  } />
              </Routes>
          <FooterContent />
      </BrowserRouter>
  )
}

export default App
