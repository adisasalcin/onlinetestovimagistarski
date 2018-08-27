import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import {NavLink} from 'react-router-dom';
import BTest2 from './BTest2';
import B1 from '../components/Btest/B1';
import B2 from '../components/Btest/B2';
import B3 from '../components/Btest/B3';
import B4 from '../components/Btest/B4';


export default class BTest1 extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }


toggleCategories(){
  if(this.state.activeTab===0){
    return( <B1 /> );
  }
  else if (this.state.activeTab===1){
    return(  <B2 />);
  }
  else if (this.state.activeTab===2){
    return(  <B3 />);
  }
  else if (this.state.activeTab===3){
    return(  <B4 />);
  }
  else if (this.state.activeTab===4){
    return(  <BTest2 />);
  }

}


  render(){
    return(
      <section>
      <div className="tabovi">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId })} ripple>
        <Tab id="tab1">B1</Tab>
        <Tab>B2</Tab>
        <Tab>B3</Tab>
        <Tab>B4</Tab>
        <Tab> + </Tab>
        </Tabs>
          </div>
        <section>
        {this.toggleCategories()}
        </section>
  </section>
    )
  }
}
