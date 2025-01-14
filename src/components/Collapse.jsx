{/*Composant menu déroulant*/}

import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import '../scss/collapse.scss'

const Collapse = ({label, children}) => {
    const [open, setOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = useRef(null)
    
    const toggle = () => {
        setOpen(!open)
    }

    useEffect(() => {
        // Only calculate height if the contentRef is available
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight)
        }
      }, [open]) // Recalculate the height when the component opens/closes

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
                style={{
                    height: open ? `${Math.min(contentHeight, 500)}px` : '0px', // Use state-driven height
                  }}
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