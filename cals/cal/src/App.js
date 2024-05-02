import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PropertyDetailsPage from './components/PropertyDetailsPage';
import AddPropertyPage from './components/AddPropertyPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/property/:id" component={PropertyDetailsPage} />
        <Route path="/add-property" component={AddPropertyPage} />
      </Switch>
    </Router>
  );
}

export default App;

