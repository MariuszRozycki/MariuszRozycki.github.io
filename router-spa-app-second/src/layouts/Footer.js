import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route path="/" exact render={(props) => {
        console.log(props)
        return (
          <p>Jestes na <span>stronie glownej</span></p>
        )
      }} ></Route>

      <Route path="/:page" exact render={(props) => {
        console.log(props)
        return (
          <>
            <p>Jestes na <span>{props.match.params.page}</span></p>
            <p>Jestes na <span>{props.match.url}</span></p>
            <p>Jestes na <span>{props.match.path}</span></p>
          </>
        )
      }} ></Route>
    </div>
  );
}

export default Footer;