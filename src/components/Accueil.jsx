import React, { useState, useEffect } from 'react';

function Accueil() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/photo5.jpg',
    '/images/photo6.jpg',
    '/images/photo4.jpg', 
    '/images/photo8.jpg',
  ];

  // Fonction pour passer à l'image suivante
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Fonction pour démarrer le défilement automatique des images
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Appeler handleNext pour changer l'image
    }, 5000); // Défilement automatique toutes les 5 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lorsque le composant est démonté
  }, []); // Cette fonction s'exécute uniquement lors du montage initial du composant

  return (
    <div className="accueil">
      <div className="menu-bienvenu">
      <img className='objectif' src="/logo/objectif.jpg" />
      <div className="header-bar">
        <a href="https://facebook.com/ofrep-ci"><img src="/logo/facebook.png" alt="Facebook" /></a>
        <a href="https://youtube.com/ofrep-ci"><img src="/logo/youtub.png" alt="YouTube" /></a>
        <a href="https://instagram.com/ofrep-ci"><img src="/logo/instagram.jfif" alt="Instagram" /></a>
        <a href="https://tiktok.com/ofrep-ci"><img src="/logo/tiktok.jfif" alt="TikTok" /></a>
      </div>
      <img className='objectif' src="/logo/objectif.jpg"  />
      </div> 

      <div className="main-content">
        
              
              <h1 className="welcome-message">Bienvenue sur le site de l'OFREP-CI</h1>
              
       
        <p className="intro-text">L'Organisation des Femmes Reporteurs Photographes de Côte d'Ivoire.</p>

        <div className="image-carousel">
          <p className="carousel-title">Le top 4 de la semaine du 16 novembre au 23 novembre 2025</p>
          <div className="carousel-container">
            <button className="prev-button" onClick={handlePrev}>←</button>
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="carousel-image"
            />
            <button className="next-button" onClick={handleNext}>→</button>
          </div>
       



        </div> 
      </div>     
      <div className='history'>
                     <h1 className="welcome-message wm">tout savoir sur ofrep-ci</h1>

                     <div className="history1">
          
             <div className="detail-history1">
             <h1 className='titre-hystory'>Qui sommes-nous ?</h1>
             <h1 className='detailtexte-hystory'>"L'OFREP-CI, l'Organisation des Femmes Photographes de Côte d'Ivoire, est née d'une passion commune pour la photographie et d'un désir de transformer l'image en un puissant vecteur de changement social.</h1>
             <h1 className='detailtexte-hystory'> Notre association rassemble des femmes photographes talentueuses, unies par une même vision : celle de capturer la vérité du quotidien ivoirien à travers l'objectif. Notre engagement est de dénoncer les injustices sociales, de mettre en lumière les luttes quotidiennes des Ivoiriennes et Ivoiriens et de célébrer la richesse de notre patrimoine naturel et culturel</h1>
             </div>

            

       </div>
              
       <div className="history1">
       <div className="detail-history1">
             <h1 className='titre-hystory'>Notre Mission : Capturer et Sensibiliser</h1>
             <h1 className='detailtexte-hystory'>Notre mission est de donner une voix aux invisibles et de capturer l'essence même de la vie en Côte d'Ivoire. À travers nos objectifs, nous témoignons des réalités sociales et environnementales, tout en mettant en valeur la beauté naturelle et la diversité culturelle du pays. </h1>
             </div>
             <img className='image-hystory'  src="/images/photo12.avif" />

     
       </div>  



       <div className="history1">
             <img className='image-hystory' src="/images/photo14.jpg" />
             <div className="detail-history1">
             <h1 className='titre-hystory dh'>Nos Projets : Témoigner pour le Changement </h1>
             <h1 className='detailtexte-hystory dh'> En collaborant avec des institutions, des communautés et d'autres acteurs du changement, nous créons un espace où la photographie devient un catalyseur pour le dialogue et l’action. </h1>
            </div>
       </div>
       
       
       <div className="history1">
             <div className="detail-history1">
             <h1 className='titre-hystory'>Rejoignez-nous : Ensemble, Changeons le Regard sur la Côte d'Ivoire </h1>
             <h1 className='detailtexte-hystory'> Rejoindre l'OFREP-CI, c’est participer activement à la mise en valeur de la photographie en tant que moyen d’expression et d’action sociale. Que vous soyez photographe, amateur d’art ou simplement sensible aux problématiques sociales, nous vous invitons à vous engager à nos côtés. Ensemble, faisons en sorte que les réalités de la Côte d'Ivoire soient vues, comprises et respectées. </h1>
            </div>
       </div>

        
     </div> 
      
     </div>
  );
}

export default Accueil;
