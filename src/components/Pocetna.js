import React from 'react';
import AppRouter from '../routers/AppRouter';
import {NavLink} from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'

import { Layout,Header,Navigation, Drawer, Content } from 'react-mdl';

const Pocetna =()=>(
  <div className="pocetna" style={{height: '700px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong><img src="https://www.ssrs.cz/data/images/unnamed-bq9xr97jrj.png" width='30px' height='30px' className="logo" />Testovi</strong></span>}>
              <div className="vertikalni_meni">
              <Navigation>
                  <NavLink to="/" activeClassName="is-active" exact={true}> Početna </NavLink>
      
              </Navigation>
              </div>
          </Header>
          <Drawer title="Testovi">

              <Navigation>
                  <NavLink to="/BTest1" activeClassName="is-active" exact={true}> B kategorija</NavLink>
                  <NavLink to="/CTest" activeClassName="is-active" exact={true}> C kategorija</NavLink>
                  <NavLink to="/DTest" activeClassName="is-active" exact={true}> D kategorija</NavLink>
                    <NavLink to="/PrvaPomoc1" activeClassName="is-active" exact={true}> Prva Pomoć</NavLink>
              </Navigation>

          </Drawer>
          <Content> <AppRouter/> </Content>
      </Layout>
  </div>


);

export default Pocetna;
