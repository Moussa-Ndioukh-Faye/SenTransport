import LigneBus from './LigneBus';
import './ListeLignes.css';

function Listelignes({ lignes }) {
    return(
        <div className="Liste-lignes">
            <h2 className="liste-titre"> Lignes Dakar Dem Dikk</h2>
            <p className="liste-description">
                {lignes.length} lignes disponibles
            </p>
            {lignes.map(ligne => (
               <LigneBus
                key={ligne.id}
                numero={ligne.numero}
                depart={ligne.depart}
                arrivee={ligne.arrivee}
                arrets={ligne.arrets}
                />            
                ))}

        </div>
    );
}
export default Listelignes;