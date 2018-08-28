import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import {NavLink} from 'react-router-dom';
import D1 from '../components/DTest/D1';
import D2 from '../components/DTest/D2';


export default class DTest extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }


toggleCategories(){
  if(this.state.activeTab===0){
    return( <D1 /> );
  }
  else if (this.state.activeTab===1){
    return(  <D2 />);
  }

}


  render(){
    return(
  <section>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId })} ripple>
          <Tab>D1</Tab>
          <Tab>D2</Tab>

        </Tabs>
  <section>
        {this.toggleCategories()}
        </section>
        </section>
    )
  }
}
