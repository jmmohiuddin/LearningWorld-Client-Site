import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import AddBook from "./components/AddBook/AddBook";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import LandingPage from "./components/LandingPage/LandingPage";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <LandingPage /> */}
        <Switch>
          <Route path="/Landing">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/Admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/addBook">
            <AddBook />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/book/:bookId">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/Orders">
            <Orders />
          </PrivateRoute>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
