import React from 'react';
import './App.css';
import Routes from './utils/Routes';
import AppHeader from './components/AppHeader/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Routes />
    </div>
  );
}

export default App;

