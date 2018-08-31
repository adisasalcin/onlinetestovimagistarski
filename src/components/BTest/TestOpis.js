import React from 'react';
import {Button} from 'react-mdl';
import { Divider } from 'semantic-ui-react';
export default class TestOpis extends React.Component {

    render() {
        return (

            <section className="opistestova">

          <p>B – kategorija je dozvola za upravljanje putničkim vozilom, tj vozilima čija masa nije veća od 3.5t i nemaju više od 8 mjesta za sjedenje ne računajući sjedište za vozača.</p>
            <p>Obuka vozača se može vršiti sa navršenih 16 godina, a polaganje vozačkog ispita sa 17 godina.</p>
            <p>Obuka podrazumjeva 40 časova teorije i 40 časova praktične obuke. Nakon završene teoretske obuke polaže se teoretski dio ispita, a nakon završene praktične obuke i praktični dio ispita.</p>

          <p>   Polaganje testova za B kategoriju se sastoji od 40 pitanja, i to:</p>

            <ul><li>oblasti I, 20 pitanja (teoretska pitanja), svako od pitanja se vrednuje sa 2 boda </li>
            <li>oblast II, 10 pitanja (znakovi), svako od pitanja se vrednuje sa 3  boda</li>
            <li>oblast III, 10 pitanja (raskrsnice), svako od pitanja se vrednuje sa 5 bodova </li></ul>

          <p>  Ukupan/maksimalan broj bodova koje kandidat može ostvariti je 120.

            Minimalan broj bodova koje kandidat mora ostvariti da bi položio je 108. </p>

          <p>  Vrijeme trajanja ispita je 50 minuta. SRETNO!! </p>



<Divider />
        <Button raised colored onClick={this.props.PrikaziTestPitanja}>Počni test</Button>
  <div className="prazanprostor"></div>
            </section>

        );
    };
}
