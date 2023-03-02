import './App.css';
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
import Error404 from "./views/Error404/Error404";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={Form} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route path="*" component={Error404}/>
      </Switch>
    </div>
  );
};

export default App;
