import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'

//Header Component
const Header = ({title, onAddTask}) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button text='Add' onClick={onAddTask}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Reminders'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
