import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



export default function RouterDOM2() {
  return (
    <Router>
      <div className='App-header'>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/topics">Темы</Link>
          </li>
        </ul>

        <b>__________________________________</b>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Главная</h2>
    </div>
  );
}

function Topics() {

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Темы</h2>
      <ul>
        <li>
          <Link to={`${url}/emu-war`}>Война с Эму</Link>
        </li>
        <li>
          <Link to={`${url}/russia`}>Русская тема</Link>
        </li>
        <li>
          <Link to={`${url}/react-router-dom`}>Наша темка</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Выберите тему</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
         Текущий url: <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {

  let { topicId } = useParams();

  return (
    <div>
      <h2>В данный мом у нас:</h2>
      <h3>{topicId}</h3>
    </div>
  );
}
