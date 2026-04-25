import './App.css';
import Header from './Header';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="contenu">
                <p>Bienvenue ! Cette application vous permet de trouver les meilleures lignes de transport en commun à Dakar.</p>
            </main>
        </div>
    );
}

//const App = () => <div className="App">a </div>;
export default App;
  