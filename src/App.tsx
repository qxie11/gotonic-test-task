import React from 'react';
import { Route } from 'react-router-dom';
import ColorPicker from './components/ColorPicker';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/rgb" component={ColorPicker} />
    </div>
  );
}

export default App;
