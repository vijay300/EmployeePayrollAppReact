import './App.css';
import PayrollForm from './components/payrollform/PayrollForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <PayrollForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
