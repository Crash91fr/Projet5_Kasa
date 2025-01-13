{/*page d'erreur 404*/}

import { Link } from 'react-router-dom'
import '../scss/error.scss'

const Error = () => {
    return (
        <>
            <div className="error">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </div>
        </>
    )
}

export default Error