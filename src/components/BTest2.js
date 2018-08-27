import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import {NavLink} from 'react-router-dom';
import BTest3 from './BTest3';
import B5 from '../components/Btest/B5';
import B6 from '../components/Btest/B6';
import B7 from '../components/Btest/B7';
import B8 from '../components/Btest/B8';


export default class BTest2 extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }


toggleCategories(){

  if (this.state.activeTab===0){
    return(  <B5 />);
  }
  else if (this.state.activeTab===1){
    return(  <B6 />);
  }
  else if (this.state.activeTab===2){
    return(  <B7 />);
  }
  else if (this.state.activeTab===3){
    return(  <B8 />);
  }
  else if (this.state.activeTab===4){
    return(  <BTest3 />);
  }
}

  render(){
    return(
      <section>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId })} ripple>
        <Tab>B5</Tab>
        <Tab>B6</Tab>
        <Tab>B7</Tab>
        <Tab>B8</Tab>
        <Tab> + </Tab>
        </Tabs>
        <section>
        {this.toggleCategories()}
        </section>
  </section>
    )
  }
}
