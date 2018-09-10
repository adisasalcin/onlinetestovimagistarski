import React from 'react';
import TestOpis from './TestOpis';
import RezultatiTesta from '../RezultatiTesta';
import TestiranjeB1 from './TestiranjeB1';

class B1 extends React.Component {
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
            <div className="App">
            <div className="naslovi">Test B1</div>
                {this.state.trenutnoAktivno === 'testPregled' &&
                    <TestOpis
                        PrikaziTestPitanja={this.PrikaziTestPitanja.bind(this, 0)}
                    />
                }
                {this.state.trenutnoAktivno === 'testPitanja' &&
                    <TestiranjeB1
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
                    />
                }
            </div>
        );
    };

    getData() {
        var test = require('./pitanja/B1/kviz.json'),
            pitanja = require('./pitanja/B1/pitanja.json');
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
        this.setState((prevState) => {
            return {
                dugmadIskljucena: true,
                odgovori: Object.assign({ [this.state.trenutniIndexPitanja]: odgovor }, prevState.odgovori)
            };
        });

        window.setTimeout(function () {
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
export default B1;
