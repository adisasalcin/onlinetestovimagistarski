import React from 'react';
import {Button} from 'react-mdl';
import { Divider } from 'semantic-ui-react';
export default class TestOpis extends React.Component {

    render() {
        return (
          <section>
            <section className="opistestova">

          <p> U kategoriju D ubrajaju se motorna vozila za prijevoz lica koja, osim sjedišta za vozača, imaju više od osam sjedišta. U podkategoriju D1 ubrajaju se motorna vozila koja služe za prevoz lica i koja, osim sjedišta za  vozača, imaju više od osam, a ne više od šesnaest sjedišta. </p>
          <p> Pravo na upravljanje motornim vozilom za kategoriju D i podkategoriju D1 imaju osobe sa vozačkom dozvolom C ili CE najmanje dvije godine. </p>

          <p>Obuka podrazumjeva 7 časova teorije i 10 časova praktične obuke. Nakon završene teoretske obuke polaže se teoretski dio ispita, a nakon završene praktične obuke i praktični dio ispita.
           Nakon završene teoretske obuke polaže se teoretski dio ispita, a nakon završene praktične obuke i praktični dio ispita.</p>

          <p>Ovdje možete pronaći dodatne testove za kategoriju D i D1. Svaki test se sastoji od 10 pitanja, svako pitanje nosi 2 boda. SRETNO!!! </p>

            </section>
            <Divider />
                  <Button raised colored onClick={this.props.PrikaziTestPitanja}>Počni test</Button>

            </section>
        );
    };
}
