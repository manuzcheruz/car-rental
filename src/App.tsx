import React from 'react';
import './App.css';
import MainPage from './components/mainPage/MainPage';
import HomeScreen from './components/homeScreen/HomeScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={HomeScreen} />
          <Route path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;