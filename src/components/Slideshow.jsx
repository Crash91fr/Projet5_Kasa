import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import '../scss/slideshow.scss'

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="slide" />

            {images.length > 1 && (
                <div className="index-indicator">
                    {currentIndex +1}/{images.length}
                </div>
            )}
             {images.length > 1 && (
                <>
                <button className="slideshow-prev" onClick={goToPrevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} />           
                </button>
                
                <button className="slideshow-next" onClick={goToNextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} />            
                </button>
                </>
             )}            
        </div>
        ) 
    }

Slideshow.propTypes = {
    images: PropTypes.array.isRequired,
}

export default Slideshow