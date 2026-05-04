import './LigneBus.css';

function LigneBus({
  numero,
  depart,
  arrivee,
  arrets,
  estSelectionnee,
  onClick
}) {
  return (
    <div
      className={`ligne-bus ${estSelectionnee ? 'ligne-bus-active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick();
      }}
    >
      <div className="ligne-numero">{numero}</div>

      <div className="ligne-info">
        <span className="ligne-trajet">
          {depart} &rarr; {arrivee}
        </span>

        <span className="ligne-arrets">
          {arrets} arrêt{arrets > 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
}

export default LigneBus;