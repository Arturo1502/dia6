import React from 'react'

export default function Card({ avatar, name, role, email }) {
    return (
        <li className='card'>

            <div className='head'>
                <img src={avatar} alt="img-perfil" />
            </div>

            <div className='data'>
                <h2>Nombre: {name}</h2>
                <h2>Rol: {role}</h2>
                <h2 className='email'>Email:{email}</h2>
            </div>

        </li>
    )
}
