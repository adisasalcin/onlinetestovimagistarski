import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import {NavLink} from 'react-router-dom';
import B5 from '../components/Btest/B6';
import B6 from '../components/Btest/B6';
import B7 from '../components/Btest/B7';
import B8 from '../components/Btest/B8';
import B9 from '../components/Btest/B9';
import B10 from '../components/Btest/B10';
import B11 from '../components/Btest/B11';
import B12 from '../components/Btest/B12';
import B13 from '../components/Btest/B13';

export default class BTest3 extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }


toggleCategories(){


  if (this.state.activeTab===0){
    return(  <B9 />);
  }
  else if (this.state.activeTab===1){
    return(  <B10 />);
  }
  else if (this.state.activeTab===2){
    return(  <B11 />);
  }
  else if (this.state.activeTab===3){
    return(  <B12 />);
  }
  else if (this.state.activeTab===4){
    return(  <B13 />);
  }
}

  render(){
    return(
      <section>
      <div className="tabovi">
<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId })} ripple>
        <Tab>B9</Tab>
        <Tab>B10</Tab>
        <Tab>B11</Tab>
        <Tab>B12</Tab>
        <Tab>B13</Tab>
        </Tabs>
          </div>
        <section>
        {this.toggleCategories()}
        </section>
  </section>
    )
  }
}
