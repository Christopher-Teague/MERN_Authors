import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';
import './App.css';

const shadowBox = {
  backgroundColor: 'silver',
  boxShadow: '5px 5px 5px black',
  borderRadius: '8px'


}

function App() {
  return (
    <div className="App container mt-5 p-4" style={shadowBox}>
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

        <Route path="/">
          <Redirect to="/authors"/>
        </Route>  

      </Switch>
    </div>
  );
}

export default App;
