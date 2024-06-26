import './styles/styles.less'
import HeaderContent from "./components/HeaderContent/HeaderContent.jsx";
import FooterContent from "./components/FooterContent/FooterContent.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";


function App() {
  return (
      <>
          <HeaderContent />
          <ItemListContainer
              saludo="Hola, "
              name="Cliente"
              store=' bienvenido a SitioWeb.com'
          />
          <FooterContent />
      </>
  )
}

export default App
