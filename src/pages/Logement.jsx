{/*page de présentation d'un logement*/}

import { useParams, Navigate } from 'react-router-dom'

import Details from '../components/Details'
import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import logements from '../logements.json'


import '../scss/logement.scss'

const Logement = () => {

    const { id } = useParams() 
    const logement = logements.find((logement) => logement.id === id)

    if (!logement) {
        return <Navigate to="/error" replace /> 
    }

    return (
        <div className="logement-details">
                < Slideshow images={logement.pictures}
                />           
                < Details logement={logement} 
                />
            <div className="collapse-logement">
                < Collapse label="Description">
                    {logement.description}
                </Collapse>
                < Collapse label="Équipements">
                    {logement.equipments.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </Collapse>
            </div>
        </div>
        )
    } 

export default Logement