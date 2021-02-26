import React from 'react';
import logo from './logo.svg';
import './App.css';
import CookieView from './CookieView';
import Store from './Store';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.earnOnClick = this.earnOnClick.bind(this);
        this.spendOnClick = this.spendOnClick.bind(this);
        this.state = {
            money: 0,
            moneyPerClick: 1,
            gain: 0
        };
    }

    earnOnClick() {
        const {money, moneyPerClick} = this.state;
        this.setState({
            money: money + moneyPerClick
        });
    }

    spendOnClick(cost, cps) {
        var {money, moneyPerClick, gain} = this.state;
        if (money - cost >= 0) {
            this.setState({
                money: money - cost, moneyPerClick :  moneyPerClick += cps
            });
            console.log(money, moneyPerClick, cps)
            this.setState({money: money=AutoClicker(money,cps)})
        } else {
            alert("You're broke!")
        }  
          
          
        function  AutoClicker(money, cps){
          var tId = setInterval(() => {money += cps}, 10000)
          console.log(tId)
        return tId
      }

    }
  
      
  
    

    render() {
        var {money, moneyPerClick} = this.state
        
        return (
            <div className="App">
                <h1 className="App-header ">Cookie Clicker</h1>
                <div className="flex justify-between gap-3 py-20">

                    <CookieView money={money} onClick={this.earnOnClick} />
                    <Store spendOnClick={this.spendOnClick} />
                    {AutoClicker()}
                </div>

            </div>
        )
    }
}
