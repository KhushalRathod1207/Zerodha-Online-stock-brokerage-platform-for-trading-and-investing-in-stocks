import React from 'react'
import Charges from '../components/Pricing/Charges'
import ChargesAccountOpening from '../components/Pricing/ChargesAccountOpening'
import ChargesExplained from '../components/Pricing/ChargesExplained'
import ChargesOptionalValue from '../components/Pricing/ChargesOptionalValue'
import ChargesTabs from '../components/Pricing/ChargesTabs'
import DematAMC from '../components/Pricing/DematAMC'

function Pricing() {
    return (
        <>
            <Charges />
            <ChargesTabs />
            <ChargesAccountOpening />
            <DematAMC />
            <ChargesOptionalValue />
            <ChargesExplained />
        </>
    )
}

export default Pricing