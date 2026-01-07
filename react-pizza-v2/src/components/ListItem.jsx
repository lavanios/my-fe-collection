import React from 'react'

function ListItem({ name, isActive, onClick }) {
    return (
        <li
            onClick={onClick}
            className={isActive ? 'active' : ''}
        >{name}</li>
    )
}

export default ListItem;