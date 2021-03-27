import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"; 

import "semantic-ui-css/semantic.min.css";
import "@pathofdev/react-tag-input/build/index.css";
import { Container} from "semantic-ui-react";

import Navbar from "components/Navbar/Navbar";

import CreatePost from "components/Pages/CreatePostPage/CreatePostPage";
import PostPage from "components/Pages/Post/PostPage";
import LoginPage from 'components/Pages/Login/LoginPage'
import Auth from "components/Pages/Auth/AuthPage";
import Feed from "components/Pages/Feed/FeedPage";

import "./App.css";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
	  if(user && user?.token)
	  	setIsAuthenticated(true)
  }, [user])

  const routes = isAuthenticated ? (
    <>
      <Route  path="/feed" component={Feed} />
      <Route exact path="/create" component={CreatePost} />
      <Route exact path="/posts/:id" component={PostPage} />
      <Route exact path="/tags/:tag" component={Feed} />
      <Redirect to="/feed" />
    </>
  ) : (   
    <>
      <Route exact path="/" component={Auth} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/login" component={LoginPage} />
      {/* <Redirect to="/" /> */}
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
