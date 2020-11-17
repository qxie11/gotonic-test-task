import React from 'react';
import { Route } from 'react-router-dom';
import RGB from './components/RGB';

function App() {
  return (
    <div className="App">
      <Route to="/rgb" component={RGB} />
    </div>
  );
}

export default App;
