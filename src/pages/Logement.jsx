{/*page de présentation d'un logement*/}

import { useParams } from 'react-router-dom'

import Slideshow from '../components/Slideshow'
import logements from '../logements.json'
import Collapse from '../components/Collapse'

import '../scss/logement.scss'

const Logement = () => {

    const { id } = useParams() /*récupère l'id dans l'URL*/
    const logement = logements.find((logement) => logement.id === id)

    if (!logement) {
        return null
    }

    return (
        <div className="logement-details">
                < Slideshow images={logement.pictures}
                />           
                {/*< Details logement={logement} />*/}
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