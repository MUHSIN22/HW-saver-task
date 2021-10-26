import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Home componentFor=""/>
    </Router>
  );
}

export default App;
