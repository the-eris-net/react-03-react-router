import { createRoot } from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </App>
  </BrowserRouter>,
);
