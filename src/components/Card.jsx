{/*Composant carte logements*/}

import { Link } from 'react-router-dom'
import logements from '../logements.json'

import '../scss/card.scss'

const Card = () => {
    return (
            <div className="card-container">
                {logements.map((logement) => (
                    <div key={logement.id} className="card">
                        <Link to={`/logement/${logement.id}`}>
                        <img src={logement.cover} alt="photo du logement" />
                        <h2>{logement.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
       )
}

export default Card