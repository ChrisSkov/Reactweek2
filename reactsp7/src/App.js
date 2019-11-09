import React from 'react';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Company component */
const Company = () => (
  <div>
    <h2>Company</h2>
  </div>
)


/* Product component */
class Product extends React.Component
{
  render()
  {
    return <div><h2>Product</h2></div>;
  }
}

/* Header component */
const Header = () => (
  <div>
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  </div>
)


class App extends React.Component
{
  render()
  {
    return (
      <Router >
        <div>
          <Header />
          <Route exact path="/" render={() => <Home />} />
          <Route path="/products" render={() => <Product />} />
          <Route path="/company" render={() => <Company />} />
        </div>
      </Router>
    )
  }
}


export default App;
