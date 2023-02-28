import "./App.css";
import { Home, Detail, Landing, NewPokemon } from "./components/views/index";
import { Route, Switch } from "react-router-dom"; // se mueve dentro de lo que envuelve switch

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        <Route exact path="/createPoke" component={NewPokemon}></Route>
      </Switch>
    </div>
  );
}

export default App;
