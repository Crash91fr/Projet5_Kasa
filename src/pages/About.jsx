{/*page A propos*/}

import Banner from '../components/Banner'
import AboutBanner from '../assets/images/background-img-about.webp'
import Collapse from '../components/Collapse'

const About = () => {
    return (
        <div className="about">
            <Banner 
                image={AboutBanner}
                altText="Photographie d'un paysage de montagne"
            />
            <Collapse label="Fiabilité">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collapse>
            <Collapse label="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse label="Service">
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collapse>
            <Collapse label="Sécurité">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
        </div>
    )
}

export default About