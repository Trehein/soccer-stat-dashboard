import React from 'react'
import { motion } from 'framer-motion'
import DashboardCard from './DashboardCard'

const dashCardData = [
    {
        title: "Top Ten Players"
    },
    {
        title: "Compare Players"
    },
    {
        title: "Team Stats"
    },
    {
        title: "Compare Teams"
    }
]

const DashboardCardList = ({ setShowDashModal, setModalContent }) => {
    return (
        <div className="dashboardCardContainer">
            { dashCardData.map(card => (
                <div className="dashCardCol" key={card.title}>
                    <DashboardCard 
                        card={card} 
                        setShowDashModal={setShowDashModal} 
                        setModalContent={setModalContent} 
                    />
                </div>
            ))}
        </div>
    )
}

export default DashboardCardList