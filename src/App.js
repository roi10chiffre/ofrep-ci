import React, { useState } from 'react';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Info from './components/Info';
import './styles/site.css';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil />;
      case 'apropos':
        return <Apropos />;
      case 'contact':
        return <Contact />;
      case 'info':
        return <Info />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li onClick={() => setCurrentPage('accueil')}>Accueil</li>
            <li onClick={() => setCurrentPage('apropos')}>À propos</li>
            <li onClick={() => setCurrentPage('info')}>Info</li>
            <li onClick={() => setCurrentPage('contact')}>Contact</li>
          </ul>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
