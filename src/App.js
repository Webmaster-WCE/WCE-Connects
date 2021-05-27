import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoggedOut from './Components/LoggedOut/LoggedOut';
import { LoggedIn } from './Components/LoggedIn/LoggedIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/u"> 
            <LoggedIn/>
          </Route>
          <Route path="/">
            <LoggedOut/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
