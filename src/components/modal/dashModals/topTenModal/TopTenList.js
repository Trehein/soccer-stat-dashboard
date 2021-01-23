import { motion } from 'framer-motion'
import React from 'react'
import TopTenListItem from './TopTenListItem'
import { topTenContainer } from '../../../motionVariants/topTenContainerVariants'
import { topTenListVariants } from '../../../motionVariants/topTenListVariants'

const TopTenList = ({ topTen, setDisplayPlayer }) => {
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
            <motion.ul variants={topTenListVariants}>
                { topTen.map(player => {
                    return (
                        <motion.div className="topTenLIContainer" key={player.name}
                            variants={topTenContainer}
                            whileHover="hover"
                            cursor="pointer"
                        >
                            <TopTenListItem player={player} key={player.name} setDisplayPlayer={setDisplayPlayer} />
                        </motion.div>
                    )
                })}
            </motion.ul>
        </div>
    )
}

export default TopTenList