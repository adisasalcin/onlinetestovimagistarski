import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import {NavLink} from 'react-router-dom';
import P1 from '../components/PrvaPomoc/P1';
import P2 from '../components/PrvaPomoc/P2';
import P3 from '../components/PrvaPomoc/P3';
import P4 from '../components/PrvaPomoc/P4';

import PrvaPomoc2 from './PrvaPomoc2';


export default class PrvaPomoc1 extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }


toggleCategories(){
  if(this.state.activeTab===0){
    return( <P1 /> );
  }
  else if (this.state.activeTab===1){
    return(  <P2 />);
  }
  else if (this.state.activeTab===2){
    return(  <P3 />);
  }
  else if (this.state.activeTab===3){
    return(  <P4 />);
  }
  else if (this.state.activeTab===4){
      return(  <PrvaPomoc2 />);
  }

}


  render(){
    return(
  <section>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId })} ripple>
          <Tab>P1</Tab>
          <Tab>P2</Tab>
          <Tab>P3</Tab>
          <Tab>P4</Tab>
          <Tab> + </Tab>
        </Tabs>
  <section>
        {this.toggleCategories()}
        </section>
        </section>
    )
  }
}
