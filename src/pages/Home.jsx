{/*imports missing*/}
import Card from '../components/Card'
import Banner from '../components/Banner'
import HomeBanner from '../assets/images/background-img-home.webp'

import '../scss/home.scss'

const Home = () => {
    return (
        <div className="home">
            <Banner
                image={HomeBanner}
                altText="Photographie d'un paysage de bord de mer"
                title="Chez vous, partout et ailleurs"
                />
            <Card />
        </div>
    )
}

export default Home