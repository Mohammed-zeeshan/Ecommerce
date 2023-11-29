import About from "./Components/About";
import Store from "./Components/Store";
import Homepage from "./Components/Homepage";
import ContactUs from "./Components/ContactUs";
import ProductPage from "./Components/ProductPage";
import LoginPage from "./Components/LoginPage"
import { Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import AuthContext from "./Components/Store/auth-context";


function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
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
        {authCtx.isLoggedIn && <ProductPage />}
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
    </Switch> 
  );
}

export default App;
