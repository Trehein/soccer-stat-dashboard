import React from 'react'
import arsLogo from '../images/eplLogos/arsLogo.svg'
import totLogo from '../images/eplLogos/totLogo.svg'


const ClubLogoPicker = ({player}) => {
    switch (player.club) {
        case "ARS":
            return (
                <img 
                    src="../images/eplLogos/arsLogo.svg"
                    alt="Arsenal Logo"
                    height="50px"
                    width="50px"
                />  
            )
        case "TOT":
            return (
                <img 
                    src={totLogo}
                    alt="Tottenham Logo"
                    height="50px"
                    width="50px"
                />  
            )
        default:
            return (
                <>
                </>
            );
    }
}

export default ClubLogoPicker