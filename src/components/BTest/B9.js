import React from 'react';
import TestOpis from './TestOpis';
import RezultatiTesta from '../RezultatiTesta';
import TestiranjeB9 from './TestiranjeB9';


class B9 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            test: this.getData(),
            trenutnoAktivno: null,
            trenutniIndexPitanja: 0,
            odgovori: []
        };
        this.posaljiOdgovor = this.posaljiOdgovor.bind(this);
    }

    render() {
        return (
            <div className="App"><div className="naslovi">Test B9</div>

                {this.state.trenutnoAktivno === 'testPregled' &&
                    <TestOpis
                        test={this.state.test}
                        PrikaziTestPitanja={this.PrikaziTestPitanja.bind(this, 0)}
                    />
                }
                {this.state.trenutnoAktivno === 'testPitanja' &&
                    <TestiranjeB9
                        posaljiOdgovor={this.posaljiOdgovor}
                        test={this.state.test}
                        trenutniIndexPitanja={this.state.trenutniIndexPitanja}
                        dugmadIskljucena={this.state.dugmadIskljucena}
                        kasnjenjePrelaza={this.state.kasnjenjePrelaza}
                    />
                }
                {this.state.trenutnoAktivno === 'testRezultati' &&
                    <RezultatiTesta
                        rezultati={this.getResults()}
                        ikonice={this.state.test.ikonice}
                    />
                }
            </div>
        );
    };



    getData() {
        var test = require('./pitanja/B9/kviz.json'),
            pitanja = require('./pitanja/B9/pitanja.json');

        test.pitanja = pitanja;
        return test;
    };


    componentDidMount() {
        this.prikaziOpisTestova();
    };

    prikaziOpisTestova() {
        this.setState((prevState, props) => {
            return {
                trenutnoAktivno: 'testPregled'
            };
        });
    }



    PrikaziTestPitanja(index) {
        console.log(index);
        this.setState((prevState) => {
            return {
                trenutniIndexPitanja: index,
                trenutnoAktivno: 'testPitanja',
                dugmadIskljucena: false,
                kasnjenjePrelaza: 1000
            };
        });
    };

    prikaziRezultate() {
        this.setState((prevState) => {
            return {
                trenutnoAktivno: 'testRezultati'
            };
        });
    }

    posaljiOdgovor(odgovor) {
        var app = this;

        // spremanje odgovora i disable na klik dugmeta
        this.setState((prevState) => {
            return {
                dugmadIskljucena: true,
                odgovori: Object.assign({ [this.state.trenutniIndexPitanja]: odgovor }, prevState.odgovori)
            };
        });

        // pause for pitanje result to show before callback
        window.setTimeout(function () {

            // provjera ima li jos pitanja ili da se prikaze rezultat
            let slijedeciIndex = app.state.trenutniIndexPitanja + 1,
                imaLiVisePitanja = (slijedeciIndex < app.state.test.brojPitanja);

            (imaLiVisePitanja) ? app.PrikaziTestPitanja(slijedeciIndex) : app.prikaziRezultate();

        }, this.state.kasnjenjePrelaza);
    };

    getResults() {
        return this.state.test.pitanja.map((stavka, index) => {
            return Object.assign({}, stavka, this.state.odgovori[index]);
        });
    };

}



export default B9;
