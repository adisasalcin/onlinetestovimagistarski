import React,{Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import {NavLink} from 'react-router-dom';
import P5 from '../components/PrvaPomoc/P5';
import P6 from '../components/PrvaPomoc/P6';
import P7 from '../components/PrvaPomoc/P7';
import P8 from '../components/PrvaPomoc/P8';
import P9 from '../components/PrvaPomoc/P9';
import P10 from '../components/PrvaPomoc/P10';

export default class PrvaPomoc2 extends Component{
  constructor(props){
    super(props);
    this.state={activeTab:0};
  }


toggleCategories(){
  if(this.state.activeTab===0){
    return( <P5 /> );
  }
  else if (this.state.activeTab===1){
    return(  <P6 />);
  }
  else if (this.state.activeTab===2){
    return(  <P7 />);
  }
  else if (this.state.activeTab===3){
    return(  <P8 />);
  }
  else if (this.state.activeTab===4){
    return(  <P9 />);
  }
  else if (this.state.activeTab===5){
    return(  <P10 />);
  }

}


  render(){
    return(
  <section>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({ activeTab: tabId })} ripple>
          <Tab>P5</Tab>
          <Tab>P6</Tab>
          <Tab>P7</Tab>
          <Tab>P8</Tab>
          <Tab>P9</Tab>
          <Tab>P10</Tab>
        </Tabs>
  <section>
        {this.toggleCategories()}
        </section>
        </section>
    )
  }
}
