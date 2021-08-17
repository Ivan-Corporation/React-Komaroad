import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function RouterDOM() {
  return (
    
    <Router >
      <div className='App-header'>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/users">Пользователи</Link>
            </li>
          </ul>
        </nav>

        {/* <Switch> чекает текущий адрес и при нажатии рендерит его */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Главная</h2>;
}

function About() {
  return <h2>О нас</h2>;
}

function Users() {
  return <h2>Пользователи</h2>;
}