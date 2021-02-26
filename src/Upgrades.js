import React from 'react';

function Upgrade({
    spendOnClick,
    cost,
    name,
    upinfo = [
        {
            id: 1,
            cps: 1,
            cost: 10,
            name: "auto-clicker",
            acquired: 0
        }, {
            id: 2,
            cps: 5,
            cost: 50,
            name: "grandma",
            acquired: 0
        }, {
            id: 3,
            cps: 25,
            cost: 100,
            name: "shipment",
            acquired: 0
        }, {
            id: 4,
            cps: 100,
            cost: 1000,
            name: "truckload",
            acquired: 0
        }, {
            id: 5,
            cps: 500,
            cost: 10000,
            name: "factory",
            acquired: 0
        }
    ]

}) {
    return (

        <div>

            {upinfo.map((info) => {
                return (
                    <div>
                        <div>{info.name}{info.cps}cps: {info.cost}c</div>
                        <button
                            className="buyBtn"
                            onClick={() => {
                            spendOnClick(info.cost, info.cps);
                        }}>
                            Buy
                        </button>
                    </div>
                )
            })}

        </div>

    );
}

export default Upgrade;