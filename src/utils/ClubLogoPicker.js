import React from 'react'
import { clubLogoSwitch } from './clubLogoSwitch'

const ClubLogoPicker = ({player}) => {
    return (
        <img 
            className="clubLogo"
            src={clubLogoSwitch(player)} 
            alt="Club Logo"
        />
    )
}

export default ClubLogoPicker