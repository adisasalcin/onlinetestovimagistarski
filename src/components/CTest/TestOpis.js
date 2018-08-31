import React from 'react';
import {Button} from 'react-mdl';
import { Divider } from 'semantic-ui-react';
export default class TestOpis extends React.Component {

    render() {
        return (
          <section>
          <section className="opistestova">
          <p>U kategoriju C ubrajaju se motorna vozila za prijevoz tereta čija je najveća dozvoljena masa veća od   7. 500 kg. U potkategoriju C1 ubrajaju se motorna vozila za prijevoz tereta čija je najveća dozvoljena masa veća od 3.500 kg, a manja od 7.500 kg.</p>
          <p> Pravo na upravljanje motornim vozilom za kategoriju C1 ima osoba sa navršenih 18 godina starosti za C1, te 21 godinu starosti za C. Obuka za C kategoriju traje 5 nastavnih časova. </p>

          <p>Kako bi se pristupilo obuci C kategorije kandidat mora imati:</p>
          <ul>
          <li>vozačku dozvolu sa potkategorijom C1 najmanje godinu dana i </li>
          <li>najmanje 21 godinu starosti.</li>
          </ul>

          <p>Obuka za C1 kategoriju traje 10 nastavnih časova. Kako bi se pristupilo obuci C1 kategorije kandidat mora imati:</p>
          <ul>
          <li>položen ispit iz poznavanja propisa o sigurnosti saobraćaja (za C kategoriju) i</li>
          <li>položen ispit iz upravljanja motornim vozilom B kategorije (ili vozačku dozvolu B kategorije).</li>
          </ul>
          <p>Ovdje možete pronaći dodatne testove za kategoriju C i C1. Svaki test se sastoji od 10 pitanja, svako pitanje nosi 2 boda. SRETNO!!! </p>
</section>
          <Divider />

              <Button raised colored onClick={this.props.PrikaziTestPitanja}>Počni test</Button>
              <div className="prazanprostor"></div>
          </section>
        );
    };
}
