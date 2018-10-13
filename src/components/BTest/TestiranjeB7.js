import React from 'react';

const p=require('./pitanja/B7/slike/praznaslika.png');
const znak1=require('./pitanja/B7/slike/znak1.png');
const znak2=require('./pitanja/B7/slike/znak2.png');
const znak3=require('./pitanja/B7/slike/znak3.png');
const znak4=require('./pitanja/B7/slike/znak4.png');
const znak5=require('./pitanja/B7/slike/znak5.png');
const znak6=require('./pitanja/B7/slike/znak6.png');
const znak7=require('./pitanja/B7/slike/znak7.png');
const znak8=require('./pitanja/B7/slike/znak8.png');
const znak9=require('./pitanja/B7/slike/znak9.png');
const znak10=require('./pitanja/B7/slike/znak10.png');
const raskrsnica1=require('./pitanja/B7/slike/raskrsnica1.png');
const raskrsnica2=require('./pitanja/B7/slike/raskrsnica2.png');
const raskrsnica3=require('./pitanja/B7/slike/raskrsnica3.png');
const raskrsnica4=require('./pitanja/B7/slike/raskrsnica4.png');
const raskrsnica5=require('./pitanja/B7/slike/raskrsnica5.png');
const raskrsnica6=require('./pitanja/B7/slike/raskrsnica6.png');
const raskrsnica7=require('./pitanja/B7/slike/raskrsnica7.png');
const raskrsnica8=require('./pitanja/B7/slike/raskrsnica8.png');
const raskrsnica9=require('./pitanja/B7/slike/raskrsnica9.png');
const raskrsnica10=require('./pitanja/B7/slike/raskrsnica10.png');


const slike=[p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,
  znak1,znak2,znak3,znak4,znak5,znak6,znak7,znak8,znak9,znak10,
  raskrsnica1,raskrsnica2,raskrsnica3,raskrsnica4,raskrsnica5,raskrsnica6,raskrsnica7,raskrsnica8,raskrsnica9,raskrsnica10];


export default class TestiranjeB7 extends React.Component {
    render() {
        let test = this.props.test,
            pitanje = this.props.test.pitanja[this.props.trenutniIndexPitanja],
            htmlQuestion = function () {
                return { __html: pitanje.pitanje };
            },
            odgovorButtons = pitanje.odgovori.map((odgovor, i) =>
                <p key={i}>
                <button className={odgovor.odgovor} onClick={this.handleClick.bind(this, i)} disabled={this.props.dugmadIskljucena}>{odgovor}</button>
                </p>
        );

        return (
            <section className={'prikazTesta' + (this.props.dugmadIskljucena ? ' promjenaOut' : '')}>


                <div className="brojPitanja">Pitanje {this.props.trenutniIndexPitanja + 1} / {test.pitanja.length}</div>
                <hr />
                <div className="pitanje">
                    <div dangerouslySetInnerHTML={htmlQuestion()} />
                </div>
                <div className="odgovori">
                    {odgovorButtons}
                </div>
                <img src={slike[this.props.trenutniIndexPitanja + 1]} alt="slika"/>
            </section>

        );
    }
    handleClick(index, event) {
        let pitanje = this.props.test.pitanja[this.props.trenutniIndexPitanja],
            odgovor = { value: index + 1, jeTacno: (index + 1 === pitanje.tacno) },
            target = event.currentTarget;

        this.props.posaljiOdgovor(odgovor);

        target.classList.add('kliknuto', odgovor.jeTacno ? 'tacno' : 'netacno');

        window.setTimeout(function () {
            target.classList.remove('kliknuto', 'tacno', 'netacno');
        }, this.props.kasnjenjePrelaza);
    }
    }
