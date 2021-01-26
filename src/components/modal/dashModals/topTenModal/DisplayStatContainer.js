import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import AtkTable from './AtkTable'
import TeamTable from './TeamTable'
import DefTable from './DefTable'
import DiscTable from './DiscTable'

const DisplayStatContainer = ({player}) => {
    const [atkTable, setAtkTable] = useState(true);
    const [teamTable, setTeamTable] = useState(false);
    const [defTable, setDefTable] = useState(false);
    const [discTable, setDiscTable] = useState(false);

    return (
        <AnimateSharedLayout>
            <ul>
                <AtkTable 
                    player={player} 
                    setTeamTable={setTeamTable} 
                    atkTable={atkTable} 
                    setAtkTable={setAtkTable} 
                />
                <TeamTable 
                    player={player} 
                    setAtkTable={setAtkTable} 
                    setTeamTable={setTeamTable}
                    setDefTable={setDefTable} 
                    teamTable={teamTable} 
                />
                <DefTable 
                    player={player} 
                    setTeamTable={setTeamTable}
                    setDefTable={setDefTable} 
                    setDiscTable={setDiscTable} 
                    defTable={defTable} />
                <DiscTable 
                    player={player} 
                    setDefTable={setDefTable} 
                    setDiscTable={setDiscTable}
                    discTable={discTable} />
            </ul>
        </AnimateSharedLayout>
    )
}

export default DisplayStatContainer