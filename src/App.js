import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home componentFor=""/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
