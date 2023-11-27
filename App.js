import About from "./Components/About";
import Store from "./Components/Store";
import Homepage from "./Components/Homepage";
import ContactUs from "./Components/ContactUs";
import ProductPage from "./Components/ProductPage";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <div>
      <Route path='/' exact>
        <Redirect to='/Store' />
      </Route>
      <Route path="/Store" >
        <Store />
      </Route>
      <Route path="/About" >
        <About />
      </Route>
      <Route path="/Homepage" >
        <Homepage />
      </Route>
      <Route path="/ContactUs" >
        <ContactUs />
      </Route>
      <Route path="/ProductPage/:productId" >
        <ProductPage />
      </Route>
    </div> 
  );
}

export default App;
