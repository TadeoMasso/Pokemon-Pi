import "./App.css";
import LandinPage from "./pages/Landing-page/landing-page";
import Home from "./pages/Home-page/home-page";
import Detail from "./pages/Detail-page/detail-page";
import Creator from "./pages/Creator-page/form-page.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandinPage} />
          <Route path="/home" component={Home} />
          <Route path="/pokecreator" component={Creator} />
          <Route path="/id/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
