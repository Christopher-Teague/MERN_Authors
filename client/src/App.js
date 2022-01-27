import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
import './App.css';

function App() {
  return (
    <div className="App container">
      <h1>Favorite Authors</h1>
      <Switch>

        <Route exact path="/authors/new">
          <AddAuthor />
        </Route>

        <Route exact path="/authors/:id/edit">
          <EditAuthor />
        </Route>

        <Route exact path="/authors">
          <Main />
        </Route>

      </Switch>
    </div>
  );
}

export default App;