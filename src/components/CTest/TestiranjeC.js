import React from 'react';

export default class TestiranjeC extends React.Component {
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
