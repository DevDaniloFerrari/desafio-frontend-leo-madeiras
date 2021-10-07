import React from 'react'
import { Link } from 'react-router-dom'

export default function SideMenu() {
    return (
        <div>
            <Link to="/people">Pessoas</Link>
            <Link to="/addPeople">Nova Pessoa</Link>
        </div>
    )
}
