import { useState } from 'react';
import './App.css';
import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import DetailLigne from './DetailLigne';
import Footer from './Footer';

function App() {
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  const lignes = [ /* ton tableau */ ];

  const lignesFiltrees = lignes.filter(l => {
    const search = recherche.toLowerCase();
    return (
      l.depart.toLowerCase().includes(search) ||
      l.arrivee.toLowerCase().includes(search) ||
      l.numero.toLowerCase().includes(search)
    );
  });

  function handleClickLigne(ligne) {
    setLigneSelectionnee(prev =>
      prev?.id === ligne.id ? null : ligne
    );
  }

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <Recherche valeur={recherche} onChange={setRecherche} />

        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne
          {lignesFiltrees.length > 1 ? 's' : ''} trouvée
          {lignesFiltrees.length > 1 ? 's' : ''}
        </p>

        {lignesFiltrees.length === 0 && (
          <p>Aucune ligne trouvée</p>
        )}

        {lignesFiltrees.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={ligneSelectionnee?.id === ligne.id}
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

        {ligneSelectionnee && (
          <DetailLigne ligne={ligneSelectionnee} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;