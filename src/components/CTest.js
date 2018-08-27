import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import {NavLink} from 'react-router-dom';
import C1 from '../components/CTest/C1';
import C2 from '../components/CTest/C2';
import C3 from '../components/CTest/C3';
import C4 from '../components/CTest/C4';


export default class CTest extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }


toggleCategories(){
  if(this.state.activeTab===0){
    return( <C1 /> );
  }
  else if (this.state.activeTab===1){
    return(  <C2 />);
  }
  else if (this.state.activeTab===2){
    return(  <C3 />);
  }
  else if (this.state.activeTab===3){
    return(  <C4 />);
  }

}


  render(){
    return(
  <section>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId })} ripple>
          <Tab>C1</Tab>
          <Tab>C2</Tab>
          <Tab>C3</Tab>
          <Tab>C4</Tab>
        </Tabs>
  <section>
        {this.toggleCategories()}
        </section>
        </section>
    )
  }
}
