# SenTransport — Lignes de bus Dakar Dem Dikk

![React](https://img.shields.io/badge/React_19-20232a?style=flat-square&logo=react&logoColor=61dafb) ![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776ab?style=flat-square&logo=python&logoColor=white)

Application web pour consulter les lignes de bus Dakar Dem Dikk : liste des lignes, recherche, détail d'une ligne (départ, arrivée, nombre d'arrêts) et statistiques.

## Architecture

- **Front-end** (`src/`) : React — `ListeLignes`, `Recherche`, `DetailLigne`, composants de statistiques
- **API** (`api/app.py`) : Flask, données dans `Ligne_DDD.json`

| Route | Rôle |
| :-- | :-- |
| `GET /lignes` | toutes les lignes |
| `GET /lignes/<id>` | détail d'une ligne |
| `GET /arrets` | arrêts |
| `GET /stats` | nombre de lignes, d'arrêts, ligne la plus desservie |

## Lancer

```bash
# API (port 5000)
cd api && pip install flask flask-cors && python app.py

# Front-end (port 3000)
npm install && npm start
```

---

<p align="center">Réalisé par <a href="https://github.com/Moussa-Ndioukh-Faye"><b>Moussa Ndioukh Faye</b></a> · École Supérieure Polytechnique de Dakar (ESP/UCAD)</p>
