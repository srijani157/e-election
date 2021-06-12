import Login from './Login';
import Forgot from './Forgot';
import Register from './Register';
import Voter from './Voter';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
  	<Router>
	    <div className="App">
	      <Route path="/" exact component={Voter} />
	      <Route path="/login" component={Login} />
	      <Route path="/register" component={Register} />
	      <Route path="/forgot" component={Forgot} />
	    </div>
	</Router>
  );
}


export default App;
