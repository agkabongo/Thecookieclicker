import React from 'react';


const Upgrade = ({
spendOnClick,
cost, 
name,

}) => {
return (
    
    <div className="bg-blue-300" onClick={() => spendOnClick(cost)}>
        {name} Upgrade.
    </div>

)
}

export default Upgrade;