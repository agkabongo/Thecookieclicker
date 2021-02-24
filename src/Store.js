import React from 'react';
import Upgrade from './Upgrades';

const Store = ({spendOnClick}) => {
    return (
        <div className="justify-center w-2/6">
            <h1 className="text-xl">Upgrades</h1>
            <Upgrade spendOnClick={spendOnClick} i={1}/>
            <Upgrade spendOnClick={spendOnClick} i={2}/>
            <Upgrade spendOnClick={spendOnClick} i={3}/>
            <Upgrade spendOnClick={spendOnClick} i={4}/>
            <Upgrade spendOnClick={spendOnClick} i={5}/>
            
        </div>
    )

}

export default Store;