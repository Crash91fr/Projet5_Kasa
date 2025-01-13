{/*imports missing*/}

import Banner from '../components/Banner'
import AboutBanner from '../assets/images/background-img-about.webp'

import '../scss/about.scss'

const About = () => {
    return (
        <div className="about">
            <Banner 
                image={AboutBanner}
                altText="Photographie d'un paysage de montagne"
            />
        </div>
    )
}

export default About