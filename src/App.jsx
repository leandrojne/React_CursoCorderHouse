import './styles/styles.less'
import HeaderContent from "./components/HeaderContent/HeaderContent.jsx";
import FooterContent from "./components/FooterContent/FooterContent.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CategoryList from "./components/CategoryList/CategoryList.jsx";
import BrandList from "./components/BrandList/BrandList.jsx";
import {NotFoundPage} from "./components/NotFoundPage/NotFoundPage.jsx";
import {CartProvider} from "./context/CartContext.jsx";
import {Cart} from "./components/pages/Cart/Cart.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Checkout from "./components/pages/Checkout/Checkout.jsx";
import {Notification, NotificationsProvider} from "./context/NotificationsContext.jsx";
import {AuthUsrProvider} from "./context/AuthUserContext.jsx";
import LoginRegisterForm from "./components/pages/LoginRegisterForm/LoginRegisterForm.jsx";
import Dashboard from "./components/pages/MyAccount/Dashboard.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";


function App() {
  return (
      <BrowserRouter>
          <ScrollToTop />
          <NotificationsProvider>
              <AuthUsrProvider>
                  <CartProvider >
                      <HeaderContent />
                      <Notification />
                          <Routes >
                              <Route path='/' element={<ItemListContainer />} />
                              <Route exact path='/item/:productId' element={<ItemDetailContainer />} />
                              <Route exact path='/category/:categoryId' element={<CategoryList />} />
                              <Route exact path='/brand/:brandId' element={<BrandList />} />
                              <Route exact path='/cart' element={<Cart />} />
                              <Route exact path='/contact-us' element={<Contact />} />
                              <Route exact path='/checkout' element={<Checkout />} />
                              <Route exact path='/login-register' element={<LoginRegisterForm />} />
                              <Route exact path='/my-account/dashboard' element={<Dashboard />} />
                              <Route path='*' element={
                                <NotFoundPage />
                              } />
                          </Routes>
                      <FooterContent />
                  </CartProvider>
              </AuthUsrProvider>
          </NotificationsProvider>
      </BrowserRouter>
  )
}

export default App
