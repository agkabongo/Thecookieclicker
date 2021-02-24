import React from 'react';



function Upgrade({
    spendOnClick,
    cost,
    name,
    i,
    upinfo = {
        1: {id: 1,
            cps: 1,
            cost: 10,
            name: "auto-clicker",
            acquired : 0
          },
          2: {
            id: 2,
            cps: 5,
            cost: 50,
            name: "grandma",
            acquired : 0
          },
          3: {
            id: 3,
            cps: 25,
            cost: 100,
            name: "shipment",
            acquired : 0
          },
          4: {
            id: 4,
            cps: 100,
            cost: 1000,
            name: "truckload",
            acquired : 0
          },
          5: {
            id: 5,
            cps: 500,
            cost: 10000,
            name: "factory",
            acquired : 0
          }
    }

}) 


{
    return (upinfo[i].acquired++,

        <div>
           

            <div>
                {upinfo[i].name} ({upinfo[i].cps}cps): {upinfo[i].cost}c
              </div>
              <button
                className="buyBtn"
                onClick={() => {spendOnClick(upinfo[i].cost,upinfo[i].cps);}}
              >
                Buy
              </button>
        </div>
      
    );
}

export default Upgrade;