import React from 'react'
import arsLogo from '../images/eplLogos/arsLogo.svg'
import avlLogo from '../images/eplLogos/avlLogo.svg'
import bhaLogo from '../images/eplLogos/bhaLogo.svg'
import burLogo from '../images/eplLogos/burLogo.svg'
import cheLogo from '../images/eplLogos/cheLogo.svg'
import cryLogo from '../images/eplLogos/cryLogo.svg'
import eveLogo from '../images/eplLogos/eveLogo.svg'
import fulLogo from '../images/eplLogos/fulLogo.svg'
import leeLogo from '../images/eplLogos/leeLogo.svg'
import leiLogo from '../images/eplLogos/leiLogo.svg'
import livLogo from '../images/eplLogos/livLogo.svg'
import mciLogo from '../images/eplLogos/mciLogo.svg'
import munLogo from '../images/eplLogos/munLogo.svg'
import newLogo from '../images/eplLogos/newLogo.svg'
import shuLogo from '../images/eplLogos/shuLogo.svg'
import souLogo from '../images/eplLogos/souLogo.svg'
import totLogo from '../images/eplLogos/totLogo.svg'
import wbaLogo from '../images/eplLogos/wbaLogo.svg'
import whuLogo from '../images/eplLogos/whuLogo.svg'
import wolLogo from '../images/eplLogos/wolLogo.svg'

function clubToLink (player) {
    switch(player.club) {
        case "ARS": 
            return (arsLogo)
        case "AVL":
            return (avlLogo)
        case "BHA":
            return (bhaLogo)
        case "BUR":
            return (burLogo)
        case "CHE":
            return (cheLogo)
        case "CRY":
            return (cryLogo)
        case "EVE":
            return (eveLogo)
        case "FUL":
            return (fulLogo)
        case "LEE":
            return (leeLogo)
        case "LEI":
            return (leiLogo)
        case "LIV":
            return (livLogo)
        case "MCI":
            return (mciLogo)
        case "MUN":
            return (munLogo)
        case "NEW":
            return (newLogo)
        case "SHU":
            return (shuLogo)
        case "SOU":
            return (souLogo)
        case "TOT":
            return (totLogo)
        case "WBA":
            return (wbaLogo)
        case "WHU":
            return (whuLogo)
        case "WOL":
            return (wolLogo)
        default:
            return (arsLogo)
    }
}

const ClubLogoPicker = ({player}) => {
    return (
        <img 
            src={clubToLink(player)} 
            alt="Team Logo"
            height="25px"
            width="25px"
        />
    )
}

export default ClubLogoPicker