import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductsList from "../Content/ProductsList";
import WlcPage from "../Content/WlcPage";
import ShoppingBasket from "../Content/ShoppingBasket";
import CheckingOrder from "../Content/CheckingOrder";
import ProductDetails from "../Content/ProductDetails";
import LogPage from "../Content/LogPage";
import Dashbord from "../Content/Dashbord";
import SignUp from "../Content/SignUp";
import { Result } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Layout = () => {
  return (
    <div className="root">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={WlcPage} />
          <Route path="/Loging" component={LogPage} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Dashbord" component={Dashbord} />
          <Route path="/ProductsList" component={ProductsList} />
          <Route path="/Product/:slug" component={ProductDetails} />
          <Route path="/ShoppingBasket" component={ShoppingBasket} />
          <Route path="/CheckingOrder" component={CheckingOrder} />
          <Route>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
export default Layout;
