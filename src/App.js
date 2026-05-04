import './App.css';
import Header from './Header';
import ListeLignes from './ListeLignes';
import Footer from './Footer';

function App() {
 
  const lignes = [
  {
    id: 1,
    numero: "1",
    depart: "Parcelles Assainies",
    arrivee: "Plateau",
    listeArrets: [
      "Parcelles U14", "Parcelles U10",
      "Camberene", "Patte d'Oie",
      "Grand Dakar", "Colobane",
      "Ponty", "Plateau"
    ]
  },
  {
    id: 2,
    numero: "7",
    depart: "Guediawaye",
    arrivee: "Place Obe",
    listeArrets: [
      "Guediawaye", "Pikine",
      "Thiaroye", "Keur Massar",
      "Grand Yoff", "Parcelles",
      "Liberte 6", "Place Obe"
    ]
  },
  {
    id: 3,
    numero: "15",
    depart: "Pikine",
    arrivee: "Medina",
    listeArrets: [
      "Pikine Centre", "Thiaroye Gare",
      "Hann", "Colobane",
      "Fass", "Medina"
    ]
  },
  {
    id: 4,
    numero: "23",
    depart: "Ouakam",
    arrivee: "Grand Dakar",
    listeArrets: [
      "Ouakam Village", "Mermoz",
      "Fann", "Point E",
      "Liberte 5", "Grand Dakar"
    ]
  },
  {
    id: 5,
    numero: "8",
    depart: "Almadies",
    arrivee: "Colobane",
    listeArrets: [
      "Almadies", "Ngor",
      "Yoff", "Ouest Foire",
      "Liberte 6", "Colobane"
    ]
  },
  {
    id: 6,
    numero: "12",
    depart: "Yoff",
    arrivee: "Sandaga",
    listeArrets: [
      "Yoff Village", "Aeroport LSS",
      "Parcelles U17", "Grand Yoff",
      "HLM", "Sandaga"
    ]
  }
];
  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <ListeLignes lignes={lignes} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

