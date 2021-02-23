import React from 'react';
import logo from './logo.svg';
import './App.css';
import CookieView from './CookieView';
import Store from './Store';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.earnOnClick=this.earnOnClick.bind(this);
      this.spendOnClick=this.spendOnClick.bind(this);
      this.state = { 
        money: 0,
        moneyPerClick: 1,
      };
    }

    earnOnClick(){
      const {money, moneyPerClick} = this.state;
      this.setState({money: money+moneyPerClick});
    }

    spendOnClick(cost){
      const{money, moneyPerClick} = this.state;
      if(money-cost >=0){
        this.setState({moneyPerClick: moneyPerClick+1});
        this.setState({money: money-cost});
      } else {
       alert("You're broke!")
      }
      
    }

    render(){
      const {money} = this.state
      return (
        <div className="App">
        <h1 className="">Cookie Clicker</h1>
        <p className="font-serif ... text-yellow-300	">
            The quick brown fox jumps over the lazy dog.
        </p>
        <div className="flex justify-between gap-3">
         
           <CookieView money={money} onClick= {this.earnOnClick}/>
           <Store spendOnClick = {this.spendOnClick} />

        </div>
        
    </div>
      )
    }
}



