import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import ToDoList from "./pages/toDoList/ToDoList";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import { ToDoProvider } from "./libs/ToDoContext";

import "./App.scss";

function App() {
  return (
    <Router>
      <ToDoProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/to-do-list/:slug">
              <ToDoList />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </ToDoProvider>
    </Router>
  );
}

export default App;
