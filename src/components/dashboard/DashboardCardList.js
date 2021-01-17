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

const DashboardCardList = () => {
    return (
        <div className="dashboardCardContainer">
        { dashCardData.map(card => (
            <div className="dashCardCol" key={card.title}>
                <DashboardCard card={card} />
            </div>
        ))}
        </div>
    )
}

export default DashboardCardList