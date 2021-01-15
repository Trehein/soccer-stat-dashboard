import React from 'react'
import HeaderNavButton from './HeaderNavButton'
import './headerNavButtonStyles.css'

const headerNavButtonData = [ 
    { 
        title: 'Player Stats',
        link: '/playerStats',
    },
    { 
        title: 'Compare Players',
        link: '/comparePlayers',
    },
    { 
        title: 'Team Stats',
        link: '/teamStats',
    },
    { 
        title: 'Compare Teams',
        link: '/compareTeams',
    }
]

const HeaderNavButtonList = () => {
    return (
        <div className="headerNavButtonContainer">
            { headerNavButtonData.map(data => (
                <HeaderNavButton data={data} key={data.title} />
            ))}
        </div>
    )
}

export default HeaderNavButtonList