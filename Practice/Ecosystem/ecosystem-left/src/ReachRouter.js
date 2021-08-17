import React from "react";
import { Router, Link } from "@reach/router";
import cat from './cat.jpg'

const ReachRouter = ({ children }) => (
  <div className='App-header'>
    
    <nav>
      <Link to="/">Главная</Link><br></br>    
      <Link to="dashboard">Темы</Link><br></br> 
      <Link to="more">Ещё</Link><br></br> 
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
      <More path="more" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Добрый день</h2>
    <img src={cat}/>
  </div>
);
const More = () => (
  <div>
    <h2>Много ссылок, но лучше в пределах одного слэша</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Темы:</h2>
    <h3>бла бла абб</h3>
    <h3>бла бла абб</h3>
    <h3>бла бла абб</h3>
  </div>
);

export default ReachRouter