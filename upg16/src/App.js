/*Skapa en ny webbapplikation. App-komponenten ska innehålla ett formulär där användaren kan fylla i namn och epostadress. 

Formuläret ska ligga i en egen komponent. När man skriver i något av formulärelementen så ska texten sparas i App-komponentens state. Skriv tester för komponenten innan du implementerar den.

Skapa sedan en button som ligger i en egen komponent. När man klickar på den ska namn och epostadress rensas från App-komponentens state.

Det ska finnas testfall som testar att formuläret innehåller input-element och att button-komponenten innehåller ett element med CSS-klassen "buttonClass".

Använd Enzyme API.
*/


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Button from './Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Form />
		<Button />
      </div>
    );
  }
}

export default App;
