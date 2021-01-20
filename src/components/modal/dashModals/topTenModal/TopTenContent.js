import React from 'react'
import { GiConsoleController } from 'react-icons/gi';
import allPlayerStats from '../../../../datasets/allPlayersStats.json'

const topTen = allPlayerStats.sort((a, b) => { return a.totalPts < b.totalPts ? 1 : -1; }).slice(0, 10)

console.log(topTen)

const TopTenContent = () => {
    return (
        <div></div>
    )
}

export default TopTenContent