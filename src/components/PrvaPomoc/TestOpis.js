import React from 'react';
import {Button} from 'react-mdl';

export default class TestOpis extends React.Component {

    render() {
        return (
          <section>
          <section className="opistestova">

          <p> Polaganje ispita iz poznavanja pružanja prve pomoći se sastoji od 10 pitanja, oblast IV (prva pomoć). </p>
          <ul>

 <li> Svako od pitanja se vrednuje sa 1 bodom. </li>

 <li>Ukupan/maksimalan broj bodova koje kandidat može ostvariti je 10 bodova.</li>

 <li>Minimalan broj bodova koje kandidat mora ostvariti da bi položio je 8 bodova. </li></ul>

 Vrijeme trajanja ispita je 20 minuta. SRETNO !!

</section>

                  <Button raised colored onClick={this.props.PrikaziTestPitanja}>Počni test</Button>
<div className="prazanprostor"></div>
            </section>
        );
    };
}
