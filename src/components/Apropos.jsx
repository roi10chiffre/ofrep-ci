import React, { useState } from 'react';

function Apropos() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:ofrepci@gmail.com?subject=Critique&body=Nom: ${name}%0D%0ATéléphone: ${phone}%0D%0ACritique: ${feedback}`;
  };

  return (
    <div className="apropos"> 
      <div className="apropos-header">
      <h1 className='apropos1'>À propos de l'OFREP-CI</h1>
      <p className='apropos2'>L'OFREP-CI est une organisation de femmes reporteurs photographes en Côte d'Ivoire.</p>
      <p className='apropos2'>Notre objectif est de partager la beauté de la nature et d'informer le public par la photographie.</p>
      </div>

      <h2 className='apropos-critique-texte'> exprimez-vous ici</h2>
      <form onSubmit={handleSubmit} className='apropos-formulaire'>
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Votre téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Votre critique"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Apropos;
