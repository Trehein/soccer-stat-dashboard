import { motion } from 'framer-motion'
import React from 'react'
import TopTenListItem from './TopTenListItem'
import { topTenContainer } from '../../../motionVariants/topTenContainerVariants'

const TopTenList = ({ topTen }) => {
    return (
        <div className="topTenListContainer">
            <div className="topTenHeader">
                <div className="topTenTitleNameContainer">
                    <h3>
                        Player
                    </h3>
                </div>
                <div className="topTenListStatContainer">
                    <div className="topTenStatTitleBox">
                        <div className="h3Underline">
                            <h3>
                                PTS
                            </h3>
                        </div>
                    </div>
                    <div className="topTenStatTitleBox">
                        <div className="h3Underline">
                            <h3>
                                GS
                            </h3>
                        </div>
                    </div>
                    <div className="topTenStatTitleBox">
                        <div className="h3Underline">
                            <h3>
                                A
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                { topTen.map(player => {
                    return (
                        <motion.div className="topTenLIContainer"
                            variants={topTenContainer}
                            whileHover="hover"
                            cursor="pointer"
                        >
                            <TopTenListItem player={player} key={player.name}/>
                        </motion.div>
                    )
                })}
            </ul>
        </div>
    )
}

export default TopTenList