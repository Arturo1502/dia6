import React from 'react'
import Card from '../Card'

export default function CardContainer({ users }) {
    return (
        <ul className='card_container'>

            {users && users.map(information =>
                <Card
                    key={information.id}
                    avatar={information.avatar}
                    name={information.name}
                    role={information.role}
                    email={information.email}
                />
            )}
        </ul>
    )
}
