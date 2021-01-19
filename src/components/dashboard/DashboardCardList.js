import React from 'react'
import { motion } from 'framer-motion'
import DashboardCard from './DashboardCard'

const dashCardData = [
    {
        id: "top10",
        title: "Top Ten Players"
    },
    {
        id: "comparePlayers",
        title: "Compare Players"
    },
    {
        id: "teamStats",
        title: "Team Stats"
    },
    {
        id: "compareTeams",
        title: "Compare Teams"
    }
]

const DashboardCardList = ({ setShowModal, setModalContent }) => {
    return (
        <div className="dashboardCardContainer">
            { dashCardData.map(card => (
                <div className="dashCardCol" key={card.id}>
                    <DashboardCard 
                        card={card} 
                        setShowModal={setShowModal} 
                        setModalContent={setModalContent} 
                    />
                </div>
            ))}
        </div>
    )
}

export default DashboardCardList