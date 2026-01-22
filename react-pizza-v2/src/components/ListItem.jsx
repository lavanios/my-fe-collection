import React from 'react'

export function ListItem({ name, isActive, onClick, className = '' }) {
    return (
        <li
            onClick={onClick}
            className={`${className} ${isActive ? 'active' : ''}`.trim() || undefined}
        >{name}</li>
    )
}
