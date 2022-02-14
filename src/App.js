import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company/:id">
            
          </Route>
          <Route exact path="/customer/:id"></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
