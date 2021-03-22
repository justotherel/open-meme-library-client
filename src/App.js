import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "@pathofdev/react-tag-input/build/index.css";
import { Container } from "semantic-ui-react";

import Navbar from "./components/Navbar";

import CreatePost from "./Pages/CreatePostPage";
import PostPage from "./Pages/PostPage";
import Auth from "./Pages/AuthPage";
import Home from "./Pages/HomePage";

import "./App.css";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
	  if(user && user?.token)
	  	setIsAuthenticated(true)
  }, [isAuthenticated])

  const routes = isAuthenticated ? (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={CreatePost} />
      <Route exact path="/posts/:id" component={PostPage} />
      <Redirect to="/" />
    </>
  ) : (
    <>
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/" component={Home} />
      <Redirect to="/auth" />
    </>
  );

  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>{routes}</Switch>
      </Container>
    </Router>
  );
}

export default App;
