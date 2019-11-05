import React from "react";
import "./App.css";
import { Switch, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook />
        </Route>
      </Switch>
    </div>
  );
}
const Header = () => {
  return(
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/add-book">
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
    </ul>
  );
};

const Home = () => <div>Home</div>
const Products = () => <div>Products</div>
const Company = () => <div>Company</div>
const AddBook = () => <div>AddBook</div>
export default App;
