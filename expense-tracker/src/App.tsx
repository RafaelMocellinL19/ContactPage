import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='intro'>
          Hello World...<code> I'm Rafael Mocellin Leszczynski</code> and here are my contacts, social networks and my portfolio.
        </p>

        <br />
        <a
          className="App-link1"
          href="https://github.com/RafaelMocellinL19"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇨ GitHub ⇦
        </a>
        <br />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/rafaelmocellin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇨ LinkedIn ⇦
        </a>
        <br />
        <a
          className="App-link0"
          href="https://twitter.com/RafaelMocellin6"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇨ Twitter ⇦
        </a>
        <br />
        <a
          className="App-link4"
          href="https://wa.me/5551989533261?text=Olá"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇨ WhatsApp ⇦
        </a>
        <br />
        <a
          className="App-link2"
          href="https://www.facebook.com/rafael.mocellin.52/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇨ Facebook ⇦
        </a>
        <br />
        <a
          className="App-link3"
          href="https://www.instagram.com/r4f4leszczynsk1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇨ Instagram ⇦
        </a>

        <br />
        <a
          className="App-link5"
          href="https://rafaelmocellinl19.github.io/MyPortfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⇨  Portfólio ⇦
        </a>
      </header>
      <br /> <br /> <br /> <br />

      <footer className='adr'>
        <address>
          Travessa Manoel Mendes, 516 Serraria, Santa Catarina/Brasil<br />
        </address>
        <br /> <br />
        <address>
          <h3>
            Emails:
          </h3>
          rafael.mocellin.leszczynski@gmail.com<br />
          rafaelleszczynski19@gmail.com<br />
          rafa.dsbr@gmail.com


        </address>
      </footer>
      <br /> <br /> <br /> <br />
    </div>
  );
}

export default App;
