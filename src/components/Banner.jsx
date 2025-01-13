import '../scss/banner.scss'

import PropTypes from 'prop-types'

const Banner = ({image, altText, title}) => {
    return (
        <div className="banner">
            <img src={image} alt={altText} />
            <h2 className='banner-title'>{title}</h2>
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string,
    altText: PropTypes.string,
    title: PropTypes.string,
}

export default Banner