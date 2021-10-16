import "./App.css";
import { Switch, Route } from "react-router";

import HomePage from "./pages/homepage/homepage.component";

function HatsPage(props) {
  // console.log(props);
  return <h1>Hats Page </h1>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
