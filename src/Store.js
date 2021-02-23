import React from 'react';
import Upgrade from './Upgrades';

const Store = ({spendOnClick,}) => {
    return (
        <div className="justify-center w-2/6">
            <h1 className="text-xl">Upgrades</h1>
           <Upgrade spendOnClick={spendOnClick}
            cost={5}
            name={'Cookie Click'}
           />
        </div>
    )

}

export default Store;