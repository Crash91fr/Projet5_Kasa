{/*page d'erreur 404*/}

import { Link } from 'react-router-dom'
import '../scss/error.scss'

const Error = () => {
    return (
        <>
            <div className="error">
                <h2>404</h2>
                <h3>Oups! La page que vous demandez n&apos;existe pas.</h3>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </div>
        </>
    )
}

export default Error