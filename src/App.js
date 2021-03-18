import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import "@pathofdev/react-tag-input/build/index.css";
import { Container } from "semantic-ui-react";

import Navbar from "./components/Navbar";

import CreatePost from "./Pages/CreatePost";
import Auth from './Pages/Auth'
import Home from "./Pages/Home";

import { getPosts } from "./actions/posts.actions";
import "./App.css";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
