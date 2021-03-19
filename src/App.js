import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "@pathofdev/react-tag-input/build/index.css";
import { Container } from "semantic-ui-react";

import Navbar from "./components/Navbar";

import CreatePost from "./Pages/CreatePost";
import PostPage from "./Pages/PostPage";
import Auth from './Pages/Auth'
import Home from "./Pages/Home";

import "./App.css";
import LeaveCommentForm from "./components/Forms/LeaveCommentForm";

function App() {

  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/posts/:id" component={PostPage} />
          <Route exact path="/test" component={LeaveCommentForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
