import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <Header />
      <Content bookFactory={props.bookFactory} />
    </Router>
  );
}
const Header = () => {
  return (
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
const Content = (props) => {
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFactory={props.bookFactory}/>
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook />
        </Route>
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
  );
}
const Home = () => <div>Home</div>;
const Products = ({bookFactory}) => {
  let match = useRouteMatch();
  console.log(bookFactory.getBooks());
  return (
   <div>
      <table>
      <thead>
      <tr><th>ID</th><th>TITLE</th><th>INFO</th></tr>
    </thead>
    <tbody>
      {bookFactory.getBooks().map((book)=>{
        return <tr><td><Link to={`${match.url}/${book.id}`}>{book.id}</Link></td><td>{book.title}</td><td>{book.info}</td></tr>
      })}
      </tbody>
      </table>
      <Route path={`${match.path}/:bookId`}>
        <Book></Book>
      </Route>
   </div>
  );
};
const Company = () => <div>Company</div>;
const AddBook = () => <div>Add book</div>;
const NoMatch = () => <div>Urlen matcher ingen kendte routes</div>;
const Book = () => {
  let { bookId } = useParams();
  return (<div>
   Book with id: {bookId}
  </div>);
};
export default App;