import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import SearchPage from "./pages/search-page/SearchPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
