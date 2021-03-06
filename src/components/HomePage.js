import React from 'react';
import {Grid,Cell} from 'react-mdl';

class HomePage extends React.Component {
    render() {
        return (
          <div style={{width:'100%', margin:'auto'}}>
          <Grid className="homepage">
            <Cell col={12}>
            <img src="https://s3.amazonaws.com/tinycards/image/ea30cd5fc1486212432e39536c7d2d2c" alt="avatar"
              className="avatar-slika" />
              <div className="baner-text">
                  <h1>Dobro došli </h1>
                  <hr />
              <p> <a href="/BTest1" className="linkoviPocetna"> B kategorija |</a>
              <a href="/CTest" className="linkoviPocetna"> C kategorija |</a>
              <a href="/DTest" className="linkoviPocetna"> D kategorija |</a>
              <a href="/PrvaPomoc1" className="linkoviPocetna"> Prva Pomoć</a> </p>
                <div className="mreze-linkovi">
                <a href="https://www.linkedin.com/" rel="noopener nofererrer">
                            <i className="fa fa-linkedin-square" /></a>
                <a href="https://www.google.com/" rel="noopener nofererrer">
                            <i className="fa fa-google"/></a>
                <a href="https://www.instagram.com/" rel="noopener nofererrer">
                            <i className="fa fa-instagram" /></a>
                <a href="https://www.facebook.com/" rel="noopener nofererrer" >
                            <i className="fa fa-facebook" /></a>
                <a href="https://www.twitter.com/"  >
                            <i className="fa fa-twitter"/></a> </div>
              </div>
      </Cell> </Grid>
      <div className="prazanprostor"></div>
        </div>
        );
    };
}
export default HomePage;
