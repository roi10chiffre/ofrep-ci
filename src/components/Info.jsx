import React, { useState } from 'react';
import InfoLundi from './component_info/InfoLundi';
import InfoMardi from './component_info/InfoMardi';
import InfoMercredi from './component_info/InfoMercredi';
import InfoJeudi from './component_info/InfoJeudi';
import InfoVendredi from './component_info/InfoVendredi';
import InfoSamedi from './component_info/InfoSamedi';
import InfoDimanche from './component_info/InfoDimanche';

function Info() {
  // État pour la recherche
  const [searchQuery, setSearchQuery] = useState('');

  // Fonction pour gérer la modification de la barre de recherche
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Liste des jours avec leurs composants
  const infoItems = [
    { day: 'Lundi', component: <InfoLundi /> },
    { day: 'Mardi', component: <InfoMardi /> },
    { day: 'Mercredi', component: <InfoMercredi /> },
    { day: 'Jeudi', component: <InfoJeudi /> },
    { day: 'Vendredi', component: <InfoVendredi /> },
    { day: 'Samedi', component: <InfoSamedi /> },
    { day: 'Dimanche', component: <InfoDimanche /> }
  ];

  // Fonction de filtrage des éléments en fonction de la recherche
  const filteredItems = infoItems.filter(item =>
    item.day.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="info">
      <div>
      <h1>Le journal photographié de la cote d'ivoire</h1>
      </div>

      
      <div>
      {/* Barre de recherche */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher un jour..."
          value={searchQuery} 
          onChange={handleSearchChange}
        />
        <button>🔍</button>
      </div>
      </div>

      <div>
      <div className="info-menu">
        {/* Afficher les éléments filtrés */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index}>
              {item.component}
            </div>
          ))
        ) : (
          <p>Aucun résultat trouvé pour "{searchQuery}"</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default Info;

