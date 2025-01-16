{/*Composant détails de la page Logement*/}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import '../scss/details.scss'

const Details = ({logement}) => {
    
    const stars = Array(5).fill(0)
    const filledStars = logement.rating

    const [firstName, lastName] = logement.host.name.split(' ')

    return (
        <div className="details">
            <div className="details-left">
                <h2 className="title">{logement.title}</h2>
                <h3 className="subtitle">{logement.location}</h3>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))} 
                    </div>  
            </div>
            <div className="details-right">
                <div className="host-info">
                    <p>{firstName} <br /> {lastName}</p>
                    <img src={logement.host.picture} alt="Photo de profil du propriétaire"/>
                </div>
                    <div className="ratings">
                        {stars.map((_, index) => (                     
                            <FontAwesomeIcon 
                            icon={faStar}
                            key={index}
                            size="lg"
                            color={index < filledStars ? "#FF6060" : "#E3E3E3"}
                            />                  
                    ))}
                </div>
            </div>
        </div>
    )
}

Details.propTypes = {
    logement: PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        rating: PropTypes.string.isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}

export default Details
