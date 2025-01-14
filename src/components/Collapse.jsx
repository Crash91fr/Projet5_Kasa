{/*Composant menu déroulant*/}

import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import '../scss/collapse.scss'

const Collapse = ({label, children}) => {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)
    
    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div className="collapse-bar">    
            <div className="collapse-header" onClick={toggle}>
                <h3>{label}</h3> 
                <span className={open ? 'rotate-icon' : ''}> 
                    <FontAwesomeIcon icon={faChevronUp} />
                </span>
            </div>
            
            <div 
                className="collapse-parent"
                ref={contentRef}
                style={open  && contentRef.current
                    ? { height: Math.min(Math.max(contentRef.current.scrollHeight, 100), 500) + 'px' }
                    : { height: '0px' }}
                >
                <div className="collapse-content"> {open && children} </div>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Collapse