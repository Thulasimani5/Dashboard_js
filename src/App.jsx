import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Reports from './components/Reports';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/users" component={Users} />
            <Route path="/reports" component={Reports} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
