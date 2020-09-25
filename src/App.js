import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppWithRoutes from "routes/AppWithRoutes";

import configureStore from './store';
import "./sass/app.scss";

function App() {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <Router>
          <AppWithRoutes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
