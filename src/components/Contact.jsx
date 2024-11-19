import React from 'react';

function Contact() {
  return (

    <div className="contact">
      <h1>Contactez-nous</h1>
      <p>Vous pouvez visiter nos sites ici</p>
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
      <p>Vous pouvez aussi nous contacter par mail ou par téléphone.</p>
      <div className="contact-officiel">
      <p>Email : <a href="mailto:ofrepci@gmail.com">ofrepci@gmail.com</a></p>
      <p>Téléphone : <a href="tel:+2250707487553">+225 07-07-48-75-53</a></p>
      </div>
      </div>
  );
}

export default Contact;
