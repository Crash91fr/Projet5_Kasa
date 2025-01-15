{/*page de présentation d'un logement*/}

import { useParams } from 'react-router-dom'

import Slideshow from '../components/Slideshow'
import logements from '../logements.json'

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
            </div>
            
           
            /*<div className="Details">
                < Details 
                />    
            </div> */

        )
    } 

export default Logement